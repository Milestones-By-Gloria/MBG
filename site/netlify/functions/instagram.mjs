// Public read endpoint — serves the cached Instagram posts as JSON.
//
// Reachable at /.netlify/functions/instagram (and /api/instagram via the
// redirect in netlify.toml). The frontend fetches this; it never calls
// Instagram directly, so page loads are fast and resilient.
//
// Response shape:
//   { "posts": [ { id, caption, permalink, timestamp,
//                  mediaType, isVideo, image }, ... ],
//     "fetchedAt": "2026-07-22T18:00:00.000Z" }
//
// Caching: the CDN holds the response for an hour (s-maxage=3600) and may
// serve a stale copy while revalidating, so this function runs rarely even
// under traffic. The hourly scheduled sync keeps the underlying data fresh.

import { readPosts, syncInstagram } from './lib/ig.mjs';

// Re-sync inline once the cached payload is older than this. Instagram's signed
// media URLs die after a day or two, so a stale cache is as useless as an empty
// one — it just fails later, in the browser, as broken images.
const MAX_CACHE_AGE_MS = 60 * 60 * 1000; // 1h, same cadence as ig-sync

function isStale(cached) {
  if (!cached?.posts?.length) return true;
  const fetchedAt = Date.parse(cached.fetchedAt ?? '');
  return !Number.isFinite(fetchedAt) || Date.now() - fetchedAt > MAX_CACHE_AGE_MS;
}

export default async () => {
  let cached = await readPosts();

  // Cold OR stale cache: populate it inline. The cold case is the first request
  // after a deploy, before the schedule has run. The stale case covers contexts
  // where the hourly `ig-sync` schedule never runs at all — deploy previews and
  // branch deploys, where Netlify only runs scheduled functions in production —
  // and any production run where the schedule has been failing. The CDN holds
  // this response for an hour, so at most one request per hour pays for it.
  if (isStale(cached)) {
    try {
      await syncInstagram();
      // A failed sync leaves the previous payload in Blobs, so the worst case
      // is that we re-read (and serve) the same stale posts we already had.
      cached = (await readPosts()) ?? cached;
    } catch (err) {
      console.error('[instagram] lazy sync failed:', err.message);
    }
  }

  const body = cached ?? { posts: [], fetchedAt: null };
  return new Response(JSON.stringify(body), {
    headers: {
      'content-type': 'application/json',
      'cache-control': 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
};
