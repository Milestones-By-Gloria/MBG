// ──────────────────────────────────────────────────────────────────────
// Instagram feed — shared backend logic
//
// Owns everything to do with the Instagram Graph API and the Netlify Blobs
// cache. Two Netlify Functions consume this module:
//   • ig-sync.mjs   — scheduled hourly; refreshes the token and re-fetches
//                     posts, writing both into Blobs.
//   • instagram.mjs — public HTTP endpoint; serves the cached posts.
//
// Design notes:
//   • The long-lived token (~60 days) is stored in Blobs, NOT in the repo.
//     It seeds once from the IG_SEED_TOKEN env var, then lives in Blobs and
//     is auto-refreshed before expiry — so the site never needs a manual
//     token rotation to stay alive.
//   • Refreshing needs only the token itself (grant_type=ig_refresh_token) —
//     no app secret — so there is exactly one secret to manage.
//   • Instagram media URLs (fbcdn) are signed and expire after a few days.
//     Re-fetching hourly keeps the cached URLs fresh, so the feed never
//     serves dead image links.
//   • A failed fetch leaves the previous cache untouched (stale-but-alive)
//     rather than blanking the feed.
// ──────────────────────────────────────────────────────────────────────

import { getStore } from '@netlify/blobs';

const GRAPH = 'https://graph.instagram.com';
const MEDIA_FIELDS = 'id,caption,media_type,media_url,thumbnail_url,permalink,timestamp';
const POST_LIMIT = 12;              // how many recent posts to cache
const REFRESH_WHEN_DAYS_LEFT = 10;  // refresh the token once it's within this window of expiry
const DAY = 86400 * 1000;

const TOKEN_KEY = 'token';
const POSTS_KEY = 'posts';

function store() {
  // consistency: 'strong' → read-after-write, so a lazy sync followed by a
  // read in the same request sees the freshly written posts.
  return getStore({ name: 'instagram', consistency: 'strong' });
}

// Serve the cached posts payload: { posts: [...], fetchedAt } or null.
export async function readPosts() {
  return store().get(POSTS_KEY, { type: 'json' });
}

// Refresh-and-fetch. Safe to call on a schedule or lazily on first read.
// Returns a small status object; never throws for an ordinary fetch failure
// (it preserves the previous cache instead).
export async function syncInstagram() {
  const s = store();

  let tokenData = await s.get(TOKEN_KEY, { type: 'json' });

  // First run: seed the token from the environment, then persist it to Blobs.
  if (!tokenData?.token) {
    const seed = process.env.IG_SEED_TOKEN;
    if (!seed) {
      throw new Error('Instagram token missing: no token in Blobs and IG_SEED_TOKEN is not set');
    }
    // We don't know the exact issue time of a seeded token, so assume a
    // conservative 50 days of life remaining. It'll refresh well before the
    // real 60-day deadline, with no coverage gap.
    tokenData = { token: seed, expiresAt: Date.now() + 50 * DAY };
    await s.setJSON(TOKEN_KEY, tokenData);
  }

  // Refresh the token if it's getting close to expiry. Idempotent and cheap.
  if (tokenData.expiresAt - Date.now() < REFRESH_WHEN_DAYS_LEFT * DAY) {
    const refreshed = await refreshToken(tokenData.token);
    if (refreshed?.access_token) {
      tokenData = {
        token: refreshed.access_token,
        expiresAt: Date.now() + (refreshed.expires_in ?? 60 * 86400) * 1000,
      };
      await s.setJSON(TOKEN_KEY, tokenData);
    }
    // If the refresh failed we keep using the existing token — it's still
    // valid until its real expiry; we'll retry on the next scheduled run.
  }

  const posts = await fetchMedia(tokenData.token);
  if (posts) {
    await s.setJSON(POSTS_KEY, { posts, fetchedAt: new Date().toISOString() });
    return { ok: true, count: posts.length };
  }

  return { ok: false, reason: 'fetch failed — kept previous cache' };
}

async function refreshToken(token) {
  const url = `${GRAPH}/refresh_access_token?grant_type=ig_refresh_token&access_token=${encodeURIComponent(token)}`;
  const res = await fetch(url);
  if (!res.ok) return null;
  return res.json(); // { access_token, token_type, expires_in }
}

async function fetchMedia(token) {
  const url = `${GRAPH}/me/media?fields=${MEDIA_FIELDS}&limit=${POST_LIMIT}&access_token=${encodeURIComponent(token)}`;
  const res = await fetch(url);
  if (!res.ok) return null;
  const data = await res.json();
  if (!Array.isArray(data?.data)) return null;
  return data.data.map(normalize);
}

// Reduce the raw Graph payload to just what a feed UI needs. For videos/reels
// the still image is the thumbnail; for photos and carousels it's media_url.
function normalize(p) {
  const isVideo = p.media_type === 'VIDEO';
  return {
    id: p.id,
    caption: p.caption ?? '',
    permalink: p.permalink,
    timestamp: p.timestamp,
    mediaType: p.media_type, // IMAGE | VIDEO | CAROUSEL_ALBUM
    isVideo,
    image: isVideo ? (p.thumbnail_url ?? p.media_url) : p.media_url,
  };
}
