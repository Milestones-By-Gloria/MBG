export interface Testimonial {
  quote: string[];
  author: string;
  context?: string;
  image?: string;
  alt?: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: [
      "Hiring Gloria as my Day-of Coordinator was one of the best decisions I made for ensuring a smooth, stress-free wedding day. From the very beginning, my husband and I had complete confidence in her ability to manage every detail. She handled our large 300-person ceremony and cocktail hour seamlessly while also keeping our more intimate reception dinner running perfectly on schedule.",
      'Gloria is an exceptional communicator and made sure that every vendor was well-informed and fully prepared throughout the day. Her calm, organized presence made everything feel effortless. What truly stood out was her natural ability to think quickly and pivot when needed, always ensuring that the most meaningful moments of the ceremony and reception remained the heart of the celebration.',
      'Knowing that Gloria cared so deeply about making our day special allowed us to fully relax and simply enjoy every moment. We felt completely supported and taken care of from start to finish. I could not recommend her enough to any couple looking for someone who is professional, attentive, and genuinely invested in making their wedding day unforgettable.',
    ],
    author: 'Ainah & Matthew Cheung',
    context: 'Day-of Coordination · 300-person wedding',
    image: '/images/testimonial-couple.jpg',
    alt: 'Gloria with bride Ainah on her wedding day',
  },
];
