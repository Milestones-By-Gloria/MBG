# Instagram feed — backend

Self-hosted, auto-refreshing Instagram feed for milestonesbygloria.ca. No
third-party widget, no monthly fee — runs entirely on Netlify's free tier.

**Status:** backend complete on branch `instagram-feed`. Frontend (the visible
feed component) is intentionally **not** built yet — it lands during the site
remodel and just consumes the JSON endpoint below.

## How it works

```
                 hourly schedule
                        │
                        ▼
   Instagram Graph API  ─►  ig-sync (function)  ─►  Netlify Blobs
   (graph.instagram.com)    refresh token +          ├─ token  (long-lived, auto-refreshed)
                            fetch recent posts        └─ posts  (cached feed JSON)
                                                            │
   browser  ──GET /api/instagram──►  instagram (function) ─┘  reads cache, returns JSON
```

- **`site/netlify/functions/lib/ig.mjs`** — all Instagram + Blobs logic.
- **`site/netlify/functions/ig-sync.mjs`** — scheduled hourly (`@hourly`).
  Refreshes the token when it nears expiry and re-fetches posts into Blobs.
- **`site/netlify/functions/instagram.mjs`** — public endpoint. Serves the
  cached posts; lazily populates the cache on the very first hit.

### Why this design
- **Zero maintenance** — the token (~60 days) auto-refreshes long before it
  expires. Refresh needs only the token itself (no app secret), so there is
  exactly one secret to manage.
- **Resilient** — a failed fetch keeps the last good posts instead of blanking
  the feed. Page loads never wait on Instagram.
- **Cheap** — ~720 scheduled invocations/month vs. Netlify's 125k free ceiling;
  images load from Instagram's CDN, not our bandwidth.

## The one secret: `IG_SEED_TOKEN`

The long-lived token is **never** committed. It seeds once from an environment
variable, then lives in Netlify Blobs and is auto-refreshed from there.

Set it in **Netlify → Site configuration → Environment variables**:

| Key             | Value                          |
| --------------- | ------------------------------ |
| `IG_SEED_TOKEN` | the `IGAA…` long-lived token   |

Get/regenerate the token in the Meta dashboard:
**developers.facebook.com → the MBG-IG app → API setup with Instagram login →
Generate access tokens.**

## First-time deploy / bootstrap

1. Set `IG_SEED_TOKEN` in Netlify (above).
2. Deploy the branch.
3. Trigger the first sync (or just load the endpoint, which self-populates):
   ```
   netlify functions:invoke ig-sync      # or: curl https://<site>/api/instagram
   ```
4. Confirm: `GET https://<site>/api/instagram` returns posts.

The hourly schedule takes over from there.

## Rotating the token (do this once, after launch)

The token pasted during setup lived briefly in a chat transcript. To retire it:

1. Meta dashboard → **Generate access tokens** → generate a fresh one.
2. Update `IG_SEED_TOKEN` in Netlify with the new value.
3. In **Netlify → Blobs**, delete the `instagram/token` entry (so it re-seeds
   from the new env var) — or run `netlify functions:invoke ig-sync` after
   deleting it. The old token is now dead.

## Endpoint contract (for the frontend)

`GET /api/instagram` → `application/json`, CDN-cached ~1h:

```json
{
  "posts": [
    {
      "id": "18150877777446994",
      "caption": "Nothing means more to me than…",
      "permalink": "https://www.instagram.com/p/DbHd2eemvCp/",
      "timestamp": "2026-07-23T01:17:52+0000",
      "mediaType": "IMAGE",          // IMAGE | VIDEO | CAROUSEL_ALBUM
      "isVideo": false,
      "image": "https://instagram.f…fbcdn.net/…"  // thumbnail for videos
    }
  ],
  "fetchedAt": "2026-07-22T18:00:00.000Z"
}
```

Frontend notes for the remodel:
- Link each tile to `permalink` (opens the post on Instagram).
- Use `image` as the tile background/`<img>`; show a play badge when `isVideo`.
- `img-src https:` is already allowed by the site CSP, so fbcdn images load
  with no config change. The `/api/instagram` fetch is same-origin
  (`connect-src 'self'`), also already allowed.

## Tuning

In `lib/ig.mjs`: `POST_LIMIT` (how many posts to cache),
`REFRESH_WHEN_DAYS_LEFT` (token refresh lead time). Schedule is in
`ig-sync.mjs` (`export const config`).
