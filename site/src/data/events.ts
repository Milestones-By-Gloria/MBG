// "Events We Plan" grid for the Milestone & Social Events page. Copy and photos
// matched to Gloria's mockups (photos from the WEBSITE Drive folder).
export interface EventType {
  title: string;
  text: string;
  image: string;
}

export const eventsWePlan: EventType[] = [
  { title: 'Birthday Parties', text: 'Birthdays for children, teens and adults.', image: '/images/event-birthday.jpg' },
  { title: 'Baby Showers', text: 'Showers to celebrate your growing family.', image: '/images/event-baby-shower.jpg' },
  { title: 'Engagement Parties', text: 'Celebrate the beginning of forever.', image: '/images/event-engagement.jpg' },
  { title: 'Bridal Showers', text: 'Celebrations before the big day.', image: '/images/event-bridal-shower.jpg' },
  { title: 'Graduation Parties', text: 'Celebrate accomplishments with a personalized event.', image: '/images/event-graduation.jpg' },
  { title: 'Anniversaries', text: 'Celebrate years of love and commitment.', image: '/images/event-anniversary.jpg' },
  { title: 'Housewarming Parties', text: 'Welcome friends and family into your new home.', image: '/images/event-housewarming.jpg' },
  { title: 'Retirement Celebrations', text: 'Celebrate a lifetime of accomplishments.', image: '/images/reception-navy-banquet.jpg' },
  { title: 'Holiday Parties', text: 'Gatherings for family, friends or organizations.', image: '/images/event-holiday.jpg' },
  { title: 'And More', text: 'Family reunions, private dinners and special events…', image: '/images/event-dessert.jpg' },
];
