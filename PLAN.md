# Milestones by Gloria — Implementation Plan

## Stack
- **Framework**: Astro (static, no JS by default, shared header/footer components)
- **Hosting**: Netlify (auto-deploy on git push, free SSL, custom domain ready)
- **Forms**: Netlify Forms (built-in, free up to 100 submissions/month, emails Gloria on submit)
- **Booking**: Cal.com (Google Calendar two-way sync, free tier covers needs)
- **Domain plan**: `.ca` via Porkbun (~$13 CAD/yr)
- **Fonts**: Google Fonts — Cormorant Garamond (headings) + Inter (body)
- **Source control**: GitHub repo → connected to Netlify

## Pages

| Route | Purpose | Contents |
|---|---|---|
| `/` | **Home** | Full-viewport hero only: photo bg, title, tagline, `INQUIRE NOW` + `VIEW SERVICES` |
| `/about` | **Founder / About** | Gloria's portrait, name, "Founder", `EMAIL ME`, social icons, full bio, CTAs |
| `/services` | **Services & Packages** | Services intro + 3 cards · Wedding Packages (Day-of, Partial, Full) · Milestone Moments (7 event types) · Corporate & Community (6 event types) · CTA block. `BOOK FREE CONSULTATION` opens Cal.com popup |
| `/benefits` | **Benefits / Why MBG** | 6 numbered points (01–06) · "What This Means For You" bullets · closing line + CTAs |
| `/testimonials` | **Testimonials** | Ainah & Matthew Cheung quote + photo · structured to add more later |
| `/contact` | **Inquire Now** | Contact form (Name / Email / Message) wired to Netlify Forms · email + socials as alternatives |

## Shared layout (every page)
- **Sticky top nav**: wordmark on left · `Home · About · Services · Benefits · Testimonials` + `Inquire Now` (pill button) on right
  - Transparent over hero on `/`, solid background on every other page
- **Footer**: socials, email, copyright, quick links
- Consistent palette + typography across all pages

## Visual style
- **Palette**: cream `#F2EEE9` · dusty pink `#E8DEDA` · periwinkle `#D8D9E5` · warm brown `#5C3A2E` · near-black body
- **Typography**: serif headings, letter-spaced small-caps for tag labels, sans body
- **Imagery**: rounded-corner photos, subtle gradients, generous whitespace
- **Buttons**: light pill buttons with hover lift
- **Mobile-first responsive** — alternating image/text rows reflow to single column on phones

## Phases

### Phase 0 — Prerequisites (manual)
- Install Node.js 20+
- (Later) Gloria signs up for Cal.com with her Google account
- (Later) Buy `milestonesbygloria.ca` at Porkbun
- (Later) Create GitHub + Netlify accounts

### Phase 1 — Scaffold
Astro project at `C:\Projects\MBG\site\`, `netlify.toml`, `.gitignore`, `.nvmrc`.

### Phase 2 — Design system + shared layout
Color/type tokens, shared components (`Nav`, `Footer`, `Button`, `Section`), `Base` layout.

### Phase 3 — Asset prep
22 photos extracted from PDF copied to `site/public/images/`, renamed descriptively.

### Phase 4 — Page-by-page build
1. `/` Home — hero
2. `/about`
3. `/services`
4. `/benefits`
5. `/testimonials`
6. `/contact` + Netlify Forms

### Phase 5 — Responsive pass
Test 375 / 768 / 1280 / 1920px, hamburger nav under 768px.

### Phase 6 — Polish
Favicons, page-level meta + Open Graph tags, sitemap, robots.txt, lazy loading.

### Phase 7 — Deploy (manual, when ready)
GitHub repo → Netlify import → auto-deploy → `*.netlify.app` URL.

### Phase 8 — Custom domain (manual, when ready)
Buy `milestonesbygloria.ca` at Porkbun → point at Netlify.

### Phase 9 — Cal.com hookup (manual, when Gloria signs up)
Replace placeholder Cal.com URL in `src/data/site.ts` with her real link.

## File structure

```
C:\Projects\MBG\
├── Milestones by Gloria (Website).pdf
├── PLAN.md
├── _pdf_extract/
└── site/
    ├── astro.config.mjs
    ├── netlify.toml
    ├── package.json
    ├── tsconfig.json
    ├── public/
    │   ├── images/
    │   ├── favicon.svg
    │   └── robots.txt
    └── src/
        ├── components/
        ├── data/
        │   ├── site.ts          (email, socials, Cal.com URL — single source of truth)
        │   ├── packages.ts
        │   ├── eventTypes.ts
        │   └── testimonials.ts
        ├── layouts/
        │   └── Base.astro
        ├── pages/
        │   ├── index.astro
        │   ├── about.astro
        │   ├── services.astro
        │   ├── benefits.astro
        │   ├── testimonials.astro
        │   └── contact.astro
        └── styles/
            └── global.css
```

## Costs
- Netlify hosting + forms: **$0** (under all free-tier limits)
- Cal.com: **$0** (free tier covers needs)
- `.ca` domain at Porkbun: **~$13 CAD/yr**
- **Total year-1: ~$13 CAD**

## Open items (placeholders for now)
- Gloria's real email
- Real Instagram / Facebook / LinkedIn handles
- Cal.com booking link (after Gloria signs up)
- Custom domain (after `.ca` purchase)
