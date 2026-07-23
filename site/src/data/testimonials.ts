export interface Testimonial {
  quote: string[];
  author: string;
  date?: string;
  context?: string;
  rating?: number;
  image?: string;
  alt?: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: [
      'Hiring Gloria as my Day-of Coordinator was one of the best decisions we made for our wedding. From the very beginning, my husband and I had complete confidence in her ability to manage every detail, and she truly exceeded all our expectations.',
      'She coordinated our ceremony with around 80 guests so seamlessly that I never felt stressed for a single moment. Instead of worrying about timelines, vendors, or unexpected situations, I was able to be fully present and enjoy every part of our special day.',
      "She's really Amazing ❤️",
    ],
    author: 'Ceejae & Nathan',
    date: 'July 15, 2026',
    context: 'Day-of Coordination · 80-guest wedding',
    rating: 5,
    image: '/images/testimonial-couple.jpg',
    alt: 'Elegant candlelit wedding table setting',
  },
  {
    quote: [
      'Hiring Gloria as my Day-of Coordinator was one of the best decisions I made for ensuring a smooth, stress-free wedding day. From the very beginning, my husband and I had complete confidence in her ability to manage every detail. She handled our large 300-person ceremony and cocktail hour seamlessly while also keeping our more intimate reception dinner running perfectly on schedule.',
      'Gloria is an exceptional communicator and made sure that every vendor was well-informed and fully prepared throughout the day. Her calm, organized presence made everything feel effortless. What truly stood out was her natural ability to think quickly and pivot when needed, always ensuring that the most meaningful moments of the ceremony and reception remained the heart of the celebration.',
      'Knowing that Gloria cared so deeply about making our day special allowed us to fully relax and simply enjoy every moment. We felt completely supported and taken care of from start to finish. I could not recommend her enough to any couple looking for someone who is professional, attentive, and genuinely invested in making their wedding day unforgettable.',
    ],
    author: 'Ainah & Matthew',
    date: 'August 16, 2025',
    context: 'Day-of Coordination · 300-person wedding',
    rating: 5,
    image: '/images/hero-bridal-party.jpg',
    alt: 'Gloria with the bride on her wedding day',
  },
  {
    quote: [
      "Gloria made our son's dinosaur-themed 4th birthday party so much fun! She planned age-appropriate games and activities that kept the children engaged, laughing, and excited throughout the celebration. She interacted so naturally with the kids and made sure everyone felt included.",
      'When one of the children had a small fall, Gloria responded right away, provided first aid, and handled the situation calmly and professionally. It gave us so much peace of mind knowing the children were in such capable hands.',
      'Because Gloria managed the games and kept everything running smoothly, we were able to relax and enjoy celebrating with our family and friends. We truly appreciated the care, creativity, and energy she brought to the party and would happily recommend Milestones by Gloria for future celebrations.',
    ],
    author: "Ezra's 4th Birthday",
    date: 'May 2, 2026',
    context: 'Childcare & party coordination',
    rating: 5,
    image: '/images/hero-family-portrait.jpg',
    alt: 'Family celebrating a dinosaur-themed birthday party',
  },
];
