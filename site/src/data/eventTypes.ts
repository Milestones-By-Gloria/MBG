export interface EventType {
  title: string;
  body: string[];
  image: string;
  alt: string;
}

export const milestoneEvents: EventType[] = [
  {
    title: 'Birthday Celebrations',
    body: [
      'From intimate gatherings to larger celebrations, birthdays are a time to honor life and create joyful memories.',
      "Whether it's a child's party or a milestone birthday, every detail is designed to feel special and personal.",
    ],
    image: '/images/milestone-birthday.jpg',
    alt: 'Birthday cake with lit candles at sunset',
  },
  {
    title: 'Baby Showers & Gender Reveals',
    body: [
      'Welcoming a new life is a beautiful milestone. These events are designed to feel warm, joyful, and meaningful — bringing together loved ones to celebrate this exciting new chapter.',
    ],
    image: '/images/milestone-baby.jpg',
    alt: 'Newborn baby feet held gently',
  },
  {
    title: 'Baptisms & Religious Celebrations',
    body: [
      'These sacred and meaningful occasions are handled with care and respect.',
      "From coordinating the day's flow to ensuring a smooth transition between ceremony and celebration, every detail is thoughtfully managed.",
    ],
    image: '/images/milestone-baptism.jpg',
    alt: 'Child at a baptism celebration',
  },
  {
    title: 'Anniversaries',
    body: [
      "Whether it's a first anniversary or a milestone celebration, these moments are an opportunity to reflect, reconnect, and celebrate love in a meaningful way.",
    ],
    image: '/images/milestone-anniversary.jpg',
    alt: 'Wedding rings displayed on white florals',
  },
  {
    title: 'Celebrations of Life',
    body: [
      'Honoring the life of a loved one is deeply personal. I approach these events with compassion and sensitivity, ensuring a respectful and beautifully organized gathering for family and friends.',
    ],
    image: '/images/milestone-celebration-of-life.jpg',
    alt: 'Person holding a single rose in remembrance',
  },
  {
    title: 'Graduation & Achievements',
    body: [
      'Celebrate accomplishments big and small with events that recognize hard work, growth, and new beginnings.',
    ],
    image: '/images/milestone-graduation.jpg',
    alt: 'Graduates throwing caps in celebration',
  },
  {
    title: 'Custom & Cultural Celebrations',
    body: [
      'Every family and culture has unique traditions worth celebrating. I work closely with you to ensure your event reflects what matters most to you.',
    ],
    image: '/images/milestone-cultural.jpg',
    alt: 'Person in vibrant cultural attire',
  },
];

export const corporateEvents: EventType[] = [
  {
    title: 'School Events',
    body: [
      'From graduations to school-wide celebrations, these events are all about creating memorable experiences for students, families, and staff.',
      "Whether it's coordinating logistics, managing large groups, or ensuring a smooth flow of activities, every detail is handled with care and structure.",
    ],
    image: '/images/corp-school.jpg',
    alt: 'Graduate posing for portrait',
  },
  {
    title: 'Grandparents & Family Appreciation Events',
    body: [
      'These heartfelt gatherings are an opportunity to celebrate connection across generations.',
      'From set-up to execution, I ensure a warm, welcoming, and well-organized environment where families can focus on spending meaningful time together.',
    ],
    image: '/images/corp-grandparents.jpg',
    alt: 'Multi-generational family taking a selfie together',
  },
  {
    title: 'Prom & Formal Events',
    body: [
      'Elegant, exciting, and unforgettable — proms and formal events require careful coordination to ensure everything runs seamlessly.',
      'From timelines to vendor coordination and on-site management, I help create a polished and memorable experience for students.',
    ],
    image: '/images/corp-prom.jpg',
    alt: 'Prom corsage detail',
  },
  {
    title: 'Large-Scale & Promotional Events',
    body: [
      'From grand openings to community festivals and brand activations, these events are designed to make an impact.',
      'I provide structured coordination to manage vendors, timelines, and logistics, ensuring your event is both engaging and professionally executed.',
    ],
    image: '/images/corp-large-scale.jpg',
    alt: 'Trade show floor with attendees',
  },
  {
    title: 'Daycare & Childcare Events',
    body: [
      'With experience in childcare settings, I understand the importance of safety, structure, and engagement.',
      'From family days to themed events, I create organized, fun, and stress-free experiences for children, families, and staff.',
    ],
    image: '/images/corp-daycare.jpg',
    alt: 'Children enjoying an organized activity',
  },
  {
    title: 'Corporate Gatherings & Staff Events',
    body: [
      'From team celebrations to appreciation events, these gatherings are an opportunity to bring people together in a meaningful way.',
      "I ensure a smooth and professional experience that reflects your organization's values and goals.",
    ],
    image: '/images/corp-staff.jpg',
    alt: 'Team posing together at a staff event',
  },
];
