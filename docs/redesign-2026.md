# Site redesign — 2026 (warm-gold)

A full visual + structural redesign translating Gloria's mockups into the live Astro site.
Built on the `instagram-feed` branch.

## Design system (`site/src/styles/global.css`)
- **Palette:** warm cream `#F7F3EC`, deeper cream `#F4ECE0`, blush `#F3E9E1`, navy ink `#2B3547`,
  gold accent `#BFA06A` (soft gold `#C9AE86`, hairline `#D9C4A0`). Semantic tokens (`--color-bg`,
  `--color-ink`, `--color-accent`, …) with legacy names kept as aliases.
- **Type:** Cormorant Garamond (display, all-caps letter-spaced), Pinyon Script (`--font-script`,
  cursive accents), Montserrat (body / UI / buttons). All self-hosted via `@fontsource`.
- Unused fonts removed (Bodoni Moda, Italiana, Inter, Libre Baskerville, DM Sans).

## Pages
`/` (concise landing) · `/about` · `/services` (hub) · `/services/wedding-planning` ·
`/services/childcare` · `/services/milestones` · `/gallery` · `/testimonials` · `/contact`.
Nav: HOME · ABOUT · SERVICES · GALLERY · TESTIMONIALS · CONTACT + "Book a Consultation".
`/benefits` removed → 301 redirect to `/about` (in `netlify.toml`).

## Reusable components (`site/src/components/`)
`Icon` (line-icon set), `SectionHeading`, `Hero`, `FeatureGrid`, `ProcessSteps`, `PricingCard`,
`EventCard`, `StarRating`, `TestimonialCard`, `InstagramFeed`.

## Pricing (published, `site.pricing` in `src/data/site.ts`)
Wedding planning **$90/hr** (min 10 h) · Social events **$90/hr** (min 4 h) ·
Childcare **$95/hr** up to 15 children, **+$40/hr** beyond. (The home mockup's "$85" was a typo.)

## Instagram
`/gallery` includes a live IG section (`InstagramFeed.astro`) reading `GET /api/instagram`.
Under plain `astro dev` the function isn't served, so it shows a "Follow on Instagram" fallback.
On Netlify it populates once `IG_SEED_TOKEN` is set (see `docs/instagram-feed.md`).

## Images
The real design photos were pulled from Gloria's Drive (`BRANDING/WEBSITE`, AI-generated decor
shots) and wired in as optimized JPEGs (`hero-milestone-lakeside`, `wedding-planning-plan`,
`childcare-teepee`, `event-*`, `reception-*`, etc.) matched to each mockup slot. Still using
existing repo photos: About portrait (`gloria-portrait.jpg`, real Gloria) and the 3 testimonial
photos (need actual client photos). Contact hero is text-only; `contact-place-setting.jpg` is
available if a hero image is wanted.

### (Historical) earlier stand-in mapping — now replaced:

| Where | Data file | Currently using | Needs |
|---|---|---|---|
| Childcare hero + service card | `data/services.ts` (`childcare.image`, `cardImage`) | `hero-family-portrait.jpg` | real childcare setup / play-tent photo |
| Events: Housewarming | `data/events.ts` | `hero-family-portrait.jpg` | housewarming photo |
| Events: Retirement | `data/events.ts` | `corp-staff.jpg` | retirement celebration photo |
| Events: Holiday | `data/events.ts` | `milestone-cultural.jpg` | holiday party photo |
| Gallery grid | `data/gallery.ts` | mix of existing photos | curated real event photos |
| Testimonial: Ceejae & Nathan | `data/testimonials.ts` | `testimonial-couple.jpg` | their photo (optional) |
| Testimonial: Ezra's Birthday | `data/testimonials.ts` | `hero-family-portrait.jpg` | birthday party photo |

All other photos map to existing, relevant images.

## Verify
`cd site && npm run dev` → walk every route. `npm run build` → 9 pages, no errors.
Cal.com "Book a Consultation" opens the hosted booking page; contact form posts to Netlify Forms.
