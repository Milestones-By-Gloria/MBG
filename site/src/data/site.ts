// Single source of truth for shared site values.
// Update placeholders here once Gloria signs up for Cal.com etc.

export const site = {
  name: 'Milestones by Gloria',
  tagline: "THOUGHTFULLY PLANNING LIFE'S MOST MEANINGFUL MOMENTS",
  shortDescription:
    'Thoughtful, calm, detail-driven event planning and coordination for weddings, milestones, and corporate gatherings.',

  email: 'milestonesbygloria@gmail.com',
  emailHref: 'mailto:milestonesbygloria@gmail.com',

  socials: {
    instagram: 'https://instagram.com/milestonesbygloria',
    facebook: 'https://facebook.com/milestonesbygloria',
    pinterest: 'https://pinterest.com/milestonesbygloria',
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
  { href: '/gallery', label: 'Gallery' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
] as const;
