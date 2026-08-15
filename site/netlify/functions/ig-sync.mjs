// Scheduled worker — runs hourly. Refreshes the Instagram token when it nears
// expiry and re-fetches the latest posts into the Blobs cache. This is the
// primary populator; the public endpoint just reads what this writes.
//
// Runs on a schedule only (not reachable via public URL). To trigger a run
// on demand, use the Netlify CLI: `netlify functions:invoke ig-sync`.

import { syncInstagram } from './lib/ig.mjs';

export default async () => {
  try {
    const result = await syncInstagram();
    return new Response(JSON.stringify(result), {
      headers: { 'content-type': 'application/json' },
    });
  } catch (err) {
    // Surface the reason in the function log; don't crash the schedule.
    console.error('[ig-sync] failed:', err.message);
    return new Response(JSON.stringify({ ok: false, error: err.message }), {
      status: 500,
      headers: { 'content-type': 'application/json' },
    });
  }
};

export const config = { schedule: '@hourly' };
