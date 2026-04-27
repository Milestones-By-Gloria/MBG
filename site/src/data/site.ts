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
} as const;

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/benefits', label: 'Benefits' },
  { href: '/testimonials', label: 'Testimonials' },
] as const;
