# Milestones by Gloria

Marketing website for **Milestones by Gloria** (MBG) — a thoughtful, calm, detail-driven event planning and coordination service founded by Gloria Niyomahoro.

Built as a static site with Astro, hosted on Netlify, with Cal.com booking and Netlify Forms for inquiries.

## Stack

| Concern | Choice |
|---|---|
| Framework | [Astro](https://astro.build) (static, no JS by default) |
| Hosting | [Netlify](https://www.netlify.com) (free tier) |
| Contact form | [Netlify Forms](https://docs.netlify.com/forms/setup/) (free up to 100/mo) |
| Booking | [Cal.com](https://cal.com) — Google Calendar two-way sync |
| Fonts | Google Fonts: Italiana, Libre Baskerville, Montserrat, DM Sans |
| Domain (planned) | `milestonesbygloria.ca` via Porkbun |

See [`PLAN.md`](./PLAN.md) for full design and decisions.

## Pages

| Route | Page |
|---|---|
| `/` | Home — full-viewport hero |
| `/about` | About / Founder |
| `/services` | Services & Packages (Wedding, Milestone, Corporate) |
| `/benefits` | Why MBG (six numbered points) |
| `/testimonials` | Client testimonials |
| `/contact` | Inquiry form |

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
└── site/
    ├── astro.config.mjs
    ├── netlify.toml             # build settings + cache headers
    ├── package.json
    ├── public/
    │   ├── images/              # 22 photos used across the site
    │   ├── favicon.svg
    │   ├── robots.txt
    │   └── sitemap.xml
    └── src/
        ├── components/          # Nav, Footer, Button, Section, Testimonial, CalcomButton
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

Adding a new testimonial = appending an entry to the array in `testimonials.ts` and committing.

## Design system

Palette and typography were extracted directly from the source Canva design:

- Primary brown: `#623e2a` (used for nearly all headings/text)
- Cream background: `#fbf7f7`
- Periwinkle background: `#f4f5fb`
- Display serif: **Italiana** (substitute for Canva's CatchyMager)
- Italic serif: **Libre Baskerville**
- Sans body / UI: **Montserrat**

## Deployment

The site auto-deploys from the `main` branch via Netlify:

1. Connect this repo to a new Netlify site.
2. Build settings are read from `netlify.toml` (build command `npm run build`, publish dir `site/dist`).
3. Each push to `main` triggers a new deploy.
4. The contact form is auto-detected by Netlify and submissions appear in the Netlify dashboard.

### Custom domain (after purchase)

1. Buy `milestonesbygloria.ca` at [Porkbun](https://porkbun.com).
2. In Netlify: **Domain settings → Add custom domain** → enter the `.ca`.
3. At Porkbun: switch nameservers to Netlify's (or copy Netlify's DNS records).
4. SSL provisions automatically; site goes live at `milestonesbygloria.ca`.

## Contact form behaviour

The form on `/contact` is a Netlify Form. On submit, Netlify:
1. Records the submission in the dashboard,
2. Sends an email notification to Gloria,
3. Redirects the user to `/contact?success=true` (rendered with a thank-you state).

Spam protection: a hidden honeypot field (`bot-field`).

## Cal.com booking

The `Book Free Consultation` button on `/services` lazy-loads the Cal.com popup embed on hover/focus, so the script doesn't impact page load unless someone interacts with it.

To wire it to Gloria's real calendar:
1. Gloria signs up at [cal.com](https://cal.com) with her Google account and authorizes Google Calendar.
2. She creates an event type (e.g. "Free 30-min Consultation").
3. Update `calcomLink` in `site/src/data/site.ts` to her username/event slug (e.g. `gloria-mbg/consultation`).
4. Commit and push — Netlify redeploys.

## License

All site content (copy, photos) © Milestones by Gloria.
