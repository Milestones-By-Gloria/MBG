// Single source of truth for shared site values.
// Update placeholders here once Gloria signs up for Cal.com etc.

export const site = {
  name: 'Milestones by Gloria',
  tagline: "THOUGHTFULLY PLANNING LIFE'S MOST MEANINGFUL MOMENTS",
  shortDescription:
    'Thoughtful, calm, detail-driven event planning and coordination for weddings, milestones, and corporate gatherings.',

  email: 'milestonesbygloria@gmail.com',
  emailHref: 'mailto:milestonesbygloria@gmail.com',
  // NOTE: the mockups show info@milestonesbygloria.ca. Keep the Gmail address
  // until the Porkbun email forwarding for the .ca is set up — otherwise mail
  // to the .ca address bounces.

  // Contact details as given in Gloria's contact-page mockup.
  phone: '236-788-7631',
  phoneHref: 'tel:+12367887631',
  hours: 'Monday – Friday | 9 AM – 6 PM PST',
  responseTime: 'I aim to respond within 24–48 hours.',
  serviceArea: 'Vancouver, BC and beyond',
  serviceAreaNote: 'Available for travel',
  // Cities named in LocalBusiness.areaServed. City-level only by choice — the
  // business is not publishing a street address.
  serviceCities: [
    'Vancouver',
    'Burnaby',
    'Richmond',
    'North Vancouver',
    'West Vancouver',
    'Surrey',
    'Coquitlam',
    'New Westminster',
  ],
  instagramHandle: '@milestonesbygloria',
  footerScript: ['Moments beautifully planned.', 'Memories that last a lifetime.'],

  socials: {
    instagram: 'https://instagram.com/milestonesbygloria',
    // Canonical target of the fb.com/share/16ynG18c13 link, with the share
    // tracking params stripped.
    facebook: 'https://www.facebook.com/people/Milestones-by-Gloria/61589020823110/',
  },

  calcomLink: 'gloria-niyomahoro/free-consultation',

  founder: {
    name: 'Gloria Niyomahoro',
    role: 'Founder',
  },

  // Published rates (from Gloria's 2026 mockups). Wedding Coordination (day-of)
  // and full Wedding Planning are DISTINCT services at different rates — the
  // "$85" and "$90" in the mockups are not a typo.
  pricing: {
    coordinationRate: '$85/hr',
    coordinationMin: 'Minimum 4 hours',
    weddingRate: '$90/hr',
    weddingMin: 'Minimum 10 hours',
    socialRate: '$90/hr',
    socialMin: 'Minimum 4 hours',
    corporateRate: '$90/hr',
    corporateMin: 'Minimum 4 hours',
    childcareRate: '$95/hr',
    childcareBase: 'Up to 15 children',
    childcareExtra: '+$40/hr',
    childcareExtraNote: 'Additional qualified childcare staff required for larger groups',
  },
} as const;

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  // Gallery hidden for now — page lives at src/pages/_gallery.astro (unrouted).
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
] as const;
