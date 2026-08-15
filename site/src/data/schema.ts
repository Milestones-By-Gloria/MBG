// JSON-LD builders for the per-page structured data. The site-wide
// LocalBusiness node lives in Base.astro; these hang off it by @id so Google
// reads them as services offered by that same business.

import { site } from './site';

const BUSINESS_ID = 'https://milestonesbygloria.ca/#business';

interface ServiceSchemaInput {
  /** Service name as a searcher would phrase it, e.g. "Wedding Planning". */
  name: string;
  description: string;
  /** Site-relative path, e.g. "/services/wedding-planning". */
  path: string;
  /** Hourly rate in dollars, e.g. 90. Omit for services without a flat rate. */
  hourlyRate?: number;
  /** Human-readable terms shown alongside the price, e.g. "Minimum 4 hours". */
  priceNote?: string;
}

export function serviceSchema({
  name,
  description,
  path,
  hourlyRate,
  priceNote,
}: ServiceSchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    serviceType: name,
    url: `https://milestonesbygloria.ca${path}`,
    provider: { '@id': BUSINESS_ID },
    areaServed: site.serviceCities.map((c) => ({ '@type': 'City', name: c })),
    ...(hourlyRate
      ? {
          offers: {
            '@type': 'Offer',
            priceCurrency: 'CAD',
            price: hourlyRate,
            unitText: 'HUR',
            ...(priceNote ? { description: priceNote } : {}),
            availability: 'https://schema.org/InStock',
          },
        }
      : {}),
  };
}
