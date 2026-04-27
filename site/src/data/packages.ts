export interface Package {
  title: string;
  tagline: string;
  includes: string[];
  image: string;
  alt: string;
}

export const weddingPackages: Package[] = [
  {
    title: 'Day of Coordination',
    tagline:
      "For couples who've planned everything and need a professional to execute it seamlessly.",
    includes: [
      'Final consultation (2–3 weeks before)',
      'Custom timeline creation',
      'Vendor confirmation & coordination',
      'Full wedding day management (up to 10 hours)',
      'Set-up & light styling assistance',
      'Point of contact for all vendors',
    ],
    image: '/images/wedding-day-of.jpg',
    alt: 'White tulip bridal bouquet',
  },
  {
    title: 'Partial Planning',
    tagline: 'For couples who need guidance and support along the way.',
    includes: [
      'Everything in Day-Of Coordination',
      '2–4 planning meetings',
      'Vendor recommendations',
      'Timeline + layout assistance',
      'Ongoing email support',
    ],
    image: '/images/wedding-partial.jpg',
    alt: 'Wedding shoes and rings styled with flowers',
  },
  {
    title: 'Full Planning & Coordination',
    tagline: 'A fully guided experience from vision to execution.',
    includes: [
      'Unlimited consultations',
      'Budget planning',
      'Vendor sourcing & booking assistance',
      'Design & styling guidance',
      'Full coordination from start to finish',
      'Wedding day execution',
    ],
    image: '/images/wedding-full.jpg',
    alt: 'Wedding ceremony aisle decorated with white florals',
  },
];
