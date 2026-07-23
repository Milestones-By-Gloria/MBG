// Service definitions for the three dedicated service pages. Copy is taken
// verbatim from Gloria's 2026 mockups. Icon names map to src/components/Icon.astro.

export interface ServiceFeature { icon: string; title: string; text: string }
export interface ServiceStep { title: string; text: string }

export interface Service {
  slug: string;
  navLabel: string;
  title: string;
  script?: string;
  tagline: string;
  intro: string;
  image: string;
  imageAlt: string;
  cardText: string;
  cardImage: string;
  whatsIncluded: ServiceFeature[];
  process: ServiceStep[];
}

export const weddingPlanning: Service = {
  slug: 'wedding-planning',
  navLabel: 'Wedding Planning',
  title: 'Wedding Planning',
  tagline: 'Your vision, our expertise — a day to remember.',
  intro:
    'Full-service wedding planning for couples who want a beautifully designed celebration and a stress-free journey from “yes” to “I do.”',
  image: '/images/wedding-planning-plan.jpg',
  imageAlt: 'Wedding planning flatlay with "The Plan" checklist and MG notebook',
  cardText: 'Full-service planning and coordination so your day unfolds exactly as you imagined.',
  cardImage: '/images/wedding-planning-plan.jpg',
  whatsIncluded: [
    { icon: 'clipboard-pen', title: 'Planning Guidance', text: 'Expert guidance from the beginning to help bring your vision to life.' },
    { icon: 'user', title: 'Vendor Management', text: 'We research, recommend, and manage trusted vendors on your behalf.' },
    { icon: 'palette', title: 'Design & Concept', text: 'Thoughtful design and styling that reflects your unique love story.' },
    { icon: 'calendar', title: 'Timeline Creation', text: 'A detailed timeline and flow of events to keep your day running seamlessly.' },
    { icon: 'clipboard-check', title: 'Budget Management', text: 'We help you plan smartly and stay on track with your budget.' },
    { icon: 'heart', title: 'Ongoing Support', text: 'Continuous support and communication every step of the way.' },
  ],
  process: [
    { title: 'Inquire', text: 'Submit an inquiry and tell us about your wedding vision.' },
    { title: 'Consultation', text: "We'll schedule a complimentary call to learn more about your needs, style and priorities." },
    { title: 'Proposal & Booking', text: "You'll receive a custom proposal. Once confirmed, we'll reserve your date and get started!" },
    { title: 'Planning & Design', text: "We'll bring your vision to life — securing vendors, creating design concepts, and managing all the details." },
    { title: 'Timeline & Final Details', text: "We'll finalize logistics, confirm details, and create your seamless wedding day timeline." },
    { title: 'Wedding Day', text: 'Relax and be fully present while we handle everything behind the scenes.' },
  ],
};

export const weddingCoordination: Service = {
  slug: 'wedding-coordination',
  navLabel: 'Wedding Coordination',
  title: 'Wedding Coordination',
  tagline: "Enjoy your day. We've got the details.",
  intro:
    'For couples who have planned their wedding and want a trusted professional to bring it all together seamlessly on the big day.',
  image: '/images/reception-round-gold.jpg',
  imageAlt: 'Elegant candlelit reception table set for the celebration',
  cardText: 'Day-of coordination so your fully-planned day unfolds without a hitch.',
  cardImage: '/images/reception-round-gold.jpg',
  whatsIncluded: [
    { icon: 'calendar-clock', title: 'Timeline Management', text: 'We create a detailed wedding-day timeline and keep everyone on track.' },
    { icon: 'users-care', title: 'Vendor Liaison', text: "We confirm and communicate with all your vendors so you don't have to." },
    { icon: 'message', title: 'Communication Hub', text: 'We are the single point of contact for vendors and your wedding party on the day.' },
    { icon: 'shield-check', title: 'Problem Solving', text: 'We handle any unexpected situations calmly so you can stay present.' },
    { icon: 'heart', title: 'Ceremony & Reception', text: 'We ensure every detail is executed exactly as you planned.' },
    { icon: 'gift', title: 'Setup Oversight', text: 'We oversee set-up and light styling to bring your vision to life.' },
  ],
  process: [
    { title: 'Inquire', text: 'Submit an inquiry and tell us about your wedding day.' },
    { title: 'Consultation', text: "We'll schedule a complimentary call to learn more about your day and your plans." },
    { title: 'Book Your Date', text: "Once you're ready to move forward, we'll send the agreement and retainer to reserve your date." },
    { title: 'Planning Check-In', text: "We'll connect closer to your wedding day to finalize details, timelines, and logistics." },
    { title: 'Wedding Day', text: 'Sit back, relax, and be fully present while we take care of everything.' },
  ],
};

export const milestones: Service = {
  slug: 'milestones',
  navLabel: 'Milestone & Social Events',
  title: 'Milestone',
  script: 'Celebrations',
  tagline: 'Every celebration deserves to feel extraordinary.',
  intro:
    "Whether you're celebrating a birthday, baby shower, anniversary, engagement, graduation, or another meaningful milestone, we'll thoughtfully design every detail so you can be fully present with the people you love.",
  image: '/images/hero-milestone-lakeside.jpg',
  imageAlt: 'Elegant milestone celebration table overlooking a lake at sunset',
  cardText: 'Birthdays, baby showers, anniversaries, and life celebrations, designed with intention.',
  cardImage: '/images/hero-milestone-lakeside.jpg',
  whatsIncluded: [
    { icon: 'party', title: 'Event Planning', text: 'We help develop your vision from the very beginning.' },
    { icon: 'flower', title: 'Design & Styling', text: 'Beautiful decor and styling tailored to your celebration.' },
    { icon: 'users-care', title: 'Vendor Coordination', text: 'We source and communicate with trusted vendors.' },
    { icon: 'calendar-clock', title: 'Timeline Creation', text: 'A customized event timeline for a seamless experience.' },
    { icon: 'gift', title: 'Setup & Styling', text: 'We bring your vision to life before guests arrive.' },
    { icon: 'heart', title: 'Event Management', text: 'We oversee the celebration so you can simply enjoy it.' },
  ],
  process: [
    { title: 'Inquire', text: "Tell us about your celebration, vision and the experience you'd like to create." },
    { title: 'Consultation', text: "We'll schedule a complimentary call to discuss your event, answer your questions, and recommend the services that best fit your celebration." },
    { title: 'Book Your Date', text: "Once you're ready to move forward, we'll send over the agreement and retainer to officially reserve your date." },
    { title: 'Planning & Design', text: "We'll coordinate vendors, develop your timeline, finalize decor and logistics, and ensure every detail comes together seamlessly." },
    { title: 'Celebrate', text: 'Relax, and enjoy every moment while we take care of the rest and bring your vision to life.' },
  ],
};

// Childcare has a distinct shape (activities + important-to-know + two-up pricing),
// so it is defined separately rather than as a generic Service.
export const childcare = {
  slug: 'childcare',
  navLabel: 'Wedding Childcare',
  title: 'Wedding',
  script: 'Childcare',
  tagline: 'So everyone can enjoy the celebration.',
  intro:
    'Professional on-site childcare so little guests can play, laugh, and make memories while you enjoy every moment of your day.',
  image: '/images/childcare-teepee.jpg',
  imageAlt: 'Cozy children’s teepee play space with a teddy bear at a celebration',
  cardText: 'On-site care so little guests are happy and safe while you celebrate.',
  cardImage: '/images/childcare-teepee.jpg',
  whatsIncluded: [
    { icon: 'users-care', title: 'Professional Care', text: 'Experienced, qualified caregivers who love working with children.' },
    { icon: 'palette', title: 'Fun & Engaging Activities', text: 'Games, crafts, books, movies, and more for all ages.' },
    { icon: 'meal', title: 'Meal & Snack Assistance', text: 'We help serve meals and snacks provided by the couple.' },
    { icon: 'shield-check', title: 'Safe & Secure Environment', text: 'Dedicated space, carefully supervised at all times.' },
    { icon: 'heart', title: 'Peace of Mind for Parents', text: 'Parents can relax and celebrate knowing their children are in good hands.' },
  ],
  activities: [
    { icon: 'palette', title: 'Creative Corner', text: 'Colouring, crafts, stickers, bracelet making & more.' },
    { icon: 'party', title: 'Game Zone', text: 'Giant Jenga, scavenger hunts, relay games & more.' },
    { icon: 'puzzle', title: 'Imagination Station', text: 'Building blocks, LEGO, dress-up & pretend play.' },
    { icon: 'play', title: 'Movie Lounge', text: 'Family-friendly movies with cozy pillows and blankets.' },
    { icon: 'book', title: 'Quiet Corner', text: 'Books, puzzles, sensory toys, stuffed animals & more.' },
    { icon: 'heart', title: 'Rest & Recharge', text: 'A quiet space for little ones who need a break.' },
  ],
  importantToKnow: [
    'A secure, separate space is required for childcare.',
    'Couples provide meals, snacks & any special supplies.',
    "Children's information & allergy forms are required.",
    'Staff ratios are planned based on the number and ages of children.',
    'All staff have experience working with children and are background checked.',
    'Set-up and clean-up are included in the time.',
  ],
  closingTitle: 'More than Babysitting.',
  closingText:
    'With years of professional experience in childcare and event coordination, we create safe, engaging experiences so children have just as much fun as the adults. You celebrate ~ we take care of the little ones.',
};

// Ordered list used by the Services hub and any "all services" listing.
export const services: Service[] = [weddingCoordination, weddingPlanning, milestones];
