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

export default async () => {
  let cached = await readPosts();

  // Cold cache (e.g. right after first deploy, before the schedule has run):
  // populate it inline so the very first request still returns posts.
  if (!cached?.posts?.length) {
    try {
      await syncInstagram();
      cached = await readPosts();
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
