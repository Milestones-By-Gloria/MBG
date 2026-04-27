# Milestones by Gloria

Marketing website for **Milestones by Gloria** (MBG) — a thoughtful, calm, detail-driven event planning and coordination service founded by Gloria Niyomahoro.

Built as a static site with Astro, hosted on Netlify, with Cal.com booking and Netlify Forms for inquiries.

**Live:** [milestonesbygloria.ca](https://milestonesbygloria.ca) (also reachable at the Netlify subdomain `milestones-by-gloria.netlify.app`)

## Stack

| Concern | Choice |
|---|---|
| Framework | [Astro](https://astro.build) (static, no JS by default) |
| Hosting | [Netlify](https://www.netlify.com) (free tier) |
| Contact form | [Netlify Forms](https://docs.netlify.com/forms/setup/) (free up to 100/mo) |
| Booking | [Cal.com](https://cal.com) — Google Calendar two-way sync |
| Fonts | Self-hosted via `@fontsource` (Italiana, Libre Baskerville, Montserrat, DM Sans) |
| Social icons | Inline SVG (simple-icons paths) |
| Domain | `milestonesbygloria.ca` via Porkbun, ALIAS to Netlify |

See [`PLAN.md`](./PLAN.md) for full design and decisions.

## Pages

| Route | Page |
|---|---|
| `/` | Home — full-viewport hero with 8-photo slideshow |
| `/about` | About / Founder |
| `/services` | Services & Packages (Wedding, Milestone, Corporate) |
| `/benefits` | Why MBG (six numbered points) |
| `/testimonials` | Client testimonials |
| `/contact` | Inquiry form + Cal.com booking + alt-contact tiles |

## Local development

```bash
cd site
npm install
npm run dev          # http://localhost:4321
```

```bash
npm run build        # static output to site/dist/
npm run preview      # preview the production build
```

## Project structure

```
.
├── PLAN.md                      # full implementation plan
├── README.md
├── netlify.toml                 # build settings + security headers
└── site/
    ├── astro.config.mjs
    ├── package.json
    ├── public/
    │   ├── images/              # photos used across the site
    │   ├── favicon.svg
    │   ├── robots.txt
    │   └── sitemap.xml
    └── src/
        ├── components/          # Nav, Footer, Button, Section, Testimonial, CalcomButton, SocialIcon
        ├── data/                # site config, packages, event types, testimonials
        ├── layouts/Base.astro
        ├── pages/               # one .astro file per route
        └── styles/global.css    # design tokens (palette + type scale)
```

### Where to edit common things

| What | File |
|---|---|
| Email, social links, Cal.com URL | `site/src/data/site.ts` |
| Wedding package details | `site/src/data/packages.ts` |
| Event types (milestone + corporate) | `site/src/data/eventTypes.ts` |
| Testimonials | `site/src/data/testimonials.ts` |
| Colors, fonts, spacing | `site/src/styles/global.css` (`:root` block) |
| Navigation order | `site/src/data/site.ts` (`nav`) |
| Hero slideshow photos | `site/src/pages/index.astro` (the `<img class="slide">` list) |
| Security headers / CSP | `netlify.toml` |

Adding a new testimonial = appending an entry to the array in `testimonials.ts` and committing.

## Design system

Palette and typography were extracted directly from the source Canva design:

- Primary brown: `#623e2a` (used for nearly all headings/text)
- Cream background: `#fbf7f7`
- Periwinkle background: `#f4f5fb`
- Display serif: **Italiana** (substitute for Canva's CatchyMager)
- Italic serif: **Libre Baskerville**
- Sans body / UI: **Montserrat**

All fonts are self-hosted via `@fontsource` packages and bundled with the build — no third-party CDN connections.

## Hero slideshow

Pure CSS auto-cycling slideshow on the home page. 8 photos, ~5 second hold each, 1 second cross-fade. Total cycle ~48 seconds. No JavaScript or external libraries; respects `prefers-reduced-motion`.

To swap photos, edit the `<img class="slide">` list in `src/pages/index.astro` and drop the new files into `public/images/`.

## Security

Security headers are set in `netlify.toml`:

- **Strict-Transport-Security** — HSTS, 2-year max-age, preload-eligible
- **Content-Security-Policy** — strict default-deny, allow-list for self + Cal.com
- **Permissions-Policy** — disables camera, microphone, geolocation, payment, etc.
- **X-Frame-Options / frame-ancestors** — prevent clickjacking
- **X-Content-Type-Options: nosniff**
- **Referrer-Policy: strict-origin-when-cross-origin**

The contact form uses a hidden honeypot field (`bot-field`). Akismet spam filtering should also be enabled in the Netlify dashboard.

## Deployment

The site auto-deploys from the `main` branch via Netlify:

1. Push to `main` triggers a new build.
2. Build settings come from `netlify.toml` (base `site/`, build `npm run build`, publish `dist/`).
3. The contact form is auto-detected by Netlify; submissions appear in the Netlify dashboard and email Gloria.

## Contact form behaviour

The form on `/contact` is a Netlify Form. On submit, Netlify:
1. Records the submission in the dashboard,
2. Sends an email notification to Gloria,
3. Redirects the user to `/contact?success=true` (rendered with a thank-you state).

Spam protection: a hidden honeypot field (`bot-field`) plus optional Akismet (toggle in Netlify dashboard).

## Cal.com booking

The `Book Free Consultation` button on `/services` and `/contact` lazy-loads the Cal.com popup embed on hover/focus, so the script doesn't impact page load unless someone interacts with it.

The booking link is configured in `site/src/data/site.ts` as `calcomLink: 'gloria-niyomahoro/free-consultation'`. Update that string to point at a different event type.

Cal.com → **Settings → Developer → Embed → Allowed origins** must include `https://milestonesbygloria.ca` and the Netlify URL.

## Domain

`milestonesbygloria.ca` is registered at Porkbun with two DNS records pointing at Netlify:

- `ALIAS @ → apex-loadbalancer.netlify.com`
- `CNAME www → milestones-by-gloria.netlify.app`

SSL is auto-provisioned by Netlify via Let's Encrypt.

## License

All site content (copy, photos) © Milestones by Gloria.
