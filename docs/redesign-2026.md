# Site redesign — 2026 (warm-gold) — STATUS & HANDOFF

Full visual + structural redesign of the Milestones by Gloria site, translating Gloria's 18
mockups (delivered 2026-07-22) into the Astro site. Built on branch **`instagram-feed`**.

- **PR:** #1 → `main` — https://github.com/Milestones-By-Gloria/MBG/pull/1
- **Live preview (public, shareable):** https://deploy-preview-1--milestones-by-gloria.netlify.app
- **Status:** complete and on the preview; **NOT yet merged to production** (awaiting Gloria's review).
- Last updated: 2026-07-24.

## Design system (`site/src/styles/global.css`)
- **Palette:** warm cream `#F7F3EC`, deeper cream `#F4ECE0`, blush `#F3E9E1`, navy ink `#2B3547`,
  gold accent `#BFA06A` (soft gold `#C9AE86`, hairline `#D9C4A0`). Semantic tokens
  (`--color-bg/-ink/-accent…`) with legacy names kept as aliases.
- **Type:** Cormorant Garamond (display, all-caps), Pinyon Script (`--font-script`, cursive
  accents only), Montserrat (body/UI/buttons). Self-hosted via `@fontsource`. Unused fonts pruned.
- Buttons: `.btn-dark` (navy fill, primary), `.btn-gold` (gold outline), `.btn-ghost`.

## Pages (13)
Nav: HOME · ABOUT · SERVICES · GALLERY · TESTIMONIALS · CONTACT + "Book a Consultation".
- `/` concise landing · `/about` · `/services` (hub, 5 cards) · `/gallery` · `/testimonials` ·
  `/contact` (form + FAQ) · `/privacy` · custom `/404`.
- Services sub-pages: `/services/wedding-coordination`, `/wedding-planning`, `/childcare`,
  `/milestones`, `/corporate-events`.
- `/benefits` removed → 301 to `/about` (`netlify.toml`).

## Reusable components (`site/src/components/`)
`Icon` (line-icon set), `SectionHeading`, `Hero`, `FeatureGrid`, `ProcessSteps`, `PricingCard`,
`EventCard`, `StarRating`, `TestimonialCard`, `InstagramFeed`.

## Pricing (published, `site.pricing` in `src/data/site.ts`; all user-confirmed 2026-07-24)
| Service | Rate | Minimum |
|---|---|---|
| Wedding Coordination (day-of) | $85/hr | 4 hours |
| Wedding Planning (full) | $90/hr | 10 hours |
| Milestone / Social Events | $90/hr | 4 hours |
| Corporate Events | $90/hr | 4 hours |
| Childcare | $95/hr (up to 15 kids), +$40/hr beyond | — |

Coordination and Planning are **intentionally distinct services** (the $85/$90 split is not a typo).

## Instagram gallery (WORKING)
- `IG_SEED_TOKEN` is set in Netlify (all deploy contexts, marked secret). The feed returns Gloria's
  real 12 posts; `/gallery` renders them linking to their **direct post permalinks**, with the
  curated photos as a fallback until the feed loads.
- Backend: `site/netlify/functions/` (see `docs/instagram-feed.md`). Frontend: `InstagramFeed.astro`.
- **Gotcha:** IG feed styles are `<style is:global>` namespaced under `.ig-feed`, because Astro's
  scoped-style attribute is NOT applied to tiles the client script injects via `innerHTML`.
- Under plain `astro dev` the function isn't served → shows fallback grid (real feed only on Netlify).

## Photos
- Real design photos pulled from Gloria's Drive (`Milestones by Gloria › BRANDING › WEBSITE`,
  AI-generated decor), optimized to web JPEGs via PIL and matched to each mockup slot:
  `hero-milestone-lakeside`, `wedding-planning-plan`, `childcare-teepee`, `childcare-teddy`,
  `event-{birthday,baby-shower,engagement,bridal-shower,graduation,anniversary,housewarming,holiday,dessert}`,
  `reception-{round-gold,long-white,navy-roses,navy-banquet,roses-navy}`, `contact-place-setting`.
- Gloria's portrait: `gloria-portrait.jpg` (user-uploaded branded white-top photo).
- Corporate "Types of Events": existing `corp-*.jpg`.
- Testimonials: Ainah=`testimonial-couple.jpg` (Gloria+bride), Ceejae=`reception-round-gold.jpg`,
  **Ezra=`event-birthday.jpg` (STAND-IN — real dinosaur-party family photo still needed).**
- Unused old stand-ins pruned (public/images now ~39 files).
- **Convert tip:** ImageMagick is NOT available (`convert` on this box is the Windows disk tool).
  Use Python **PIL** to resize/convert (thumbnail to ~1500px, JPEG q85, progressive).

## SEO / infra
- `@astrojs/sitemap@3.2.1` (PINNED — newer versions break the build on Astro 4.16) auto-generates
  `/sitemap-index.xml`; `robots.txt` points to it.
- `LocalBusiness` JSON-LD site-wide (`Base.astro`) + `FAQPage` JSON-LD on Contact.
- OG/share image = `hero-milestone-lakeside.jpg` as an absolute URL.
- Contact has a 6-item FAQ; footer shows "Proudly serving British Columbia" + Privacy link.
- Copy: all em dashes removed from user-facing text (only code comments still contain them).

## Still open / next steps
- **Merge PR #1 to `main`** to go live (production auto-deploys from main) — after Gloria signs off.
- Real **Ezra** family photo (currently a birthday-decor stand-in) — user will upload.
- **Analytics** (needs an account: Netlify Analytics or Plausible; Plausible would need a CSP update).
- **Rotate the IG token** post-launch (see `docs/instagram-feed.md`).
- **`.ca` email forwarding** at Porkbun (still unconfigured).
- **Responsive images / WebP** — deferred (user said skip for now); would use `astro:assets`.

## Verify
`cd site && npm install && npm run dev` → walk every route. `npm run build` → **13 pages**, no
errors, generates `dist/sitemap-index.xml`. Commit style: end messages with the Co-Authored-By +
Claude-Session trailers. Work stays on `instagram-feed`; do not merge to main without the go-ahead.
