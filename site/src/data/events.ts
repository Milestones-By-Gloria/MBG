// "Events We Plan" grid for the Milestone & Social Events page. Copy from the
// mockups; images use the closest existing photo — see docs for replacements.
export interface EventType {
  title: string;
  text: string;
  image: string;
}

export const eventsWePlan: EventType[] = [
  { title: 'Birthday Parties', text: 'Birthdays for children, teens and adults.', image: '/images/milestone-birthday.jpg' },
  { title: 'Baby Showers', text: 'Showers to celebrate your growing family.', image: '/images/milestone-baby.jpg' },
  { title: 'Engagement Parties', text: 'Celebrate the beginning of forever.', image: '/images/milestone-anniversary.jpg' },
  { title: 'Bridal Showers', text: 'Celebrations before the big day.', image: '/images/wedding-partial.jpg' },
  { title: 'Graduation Parties', text: 'Celebrate accomplishments with a personalized event.', image: '/images/milestone-graduation.jpg' },
  { title: 'Anniversaries', text: 'Celebrate years of love and commitment.', image: '/images/milestone-anniversary.jpg' },
  { title: 'Housewarming Parties', text: 'Welcome friends and family into your new home.', image: '/images/hero-family-portrait.jpg' },
  { title: 'Retirement Celebrations', text: 'Celebrate a lifetime of accomplishments.', image: '/images/corp-staff.jpg' },
  { title: 'Holiday Parties', text: 'Gatherings for family, friends or organizations.', image: '/images/milestone-cultural.jpg' },
  { title: 'And More', text: 'Family reunions, private dinners and special events…', image: '/images/milestone-celebration-of-life.jpg' },
];
