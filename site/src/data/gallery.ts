// Fallback grid for the Gallery — shown only until the live Instagram feed
// loads (see InstagramFeed.astro). Uses the elegant decor photos from Drive.
export interface GalleryImage { src: string; alt: string }

export const galleryImages: GalleryImage[] = [
  { src: '/images/hero-milestone-lakeside.jpg', alt: 'Lakeside celebration table at sunset' },
  { src: '/images/reception-round-gold.jpg', alt: 'Candlelit reception table setting' },
  { src: '/images/event-birthday.jpg', alt: 'Happy birthday celebration setup' },
  { src: '/images/event-baby-shower.jpg', alt: 'Baby shower styling' },
  { src: '/images/reception-navy-roses.jpg', alt: 'Reception table with navy napkins and roses' },
  { src: '/images/event-graduation.jpg', alt: 'Graduation celebration table' },
  { src: '/images/event-engagement.jpg', alt: 'Engagement celebration with cake' },
  { src: '/images/event-holiday.jpg', alt: 'Festive holiday table setting' },
  { src: '/images/event-dessert.jpg', alt: 'Elegant dessert table' },
  { src: '/images/reception-long-white.jpg', alt: 'Long candlelit banquet table' },
  { src: '/images/event-anniversary.jpg', alt: 'Anniversary dinner setting' },
  { src: '/images/reception-roses-navy.jpg', alt: 'Rose centerpiece with navy accents' },
];
