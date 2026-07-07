import type { Business } from "@/lib/types";

export const businesses: Business[] = [
  {
    id: "b1",
    slug: "himalaya-travel-berlin",
    name: "Himalaya Travel & Visa Consultancy",
    citySlug: "berlin",
    category: "Consultants",
    logo: "https://picsum.photos/seed/himalaya-travel-logo/200/200",
    photos: [
      "https://picsum.photos/seed/himalaya-travel-1/900/600",
      "https://picsum.photos/seed/himalaya-travel-2/900/600",
    ],
    description:
      "Visa consulting, flight bookings, and travel insurance for Nepalis in Berlin and beyond — run by former embassy staff.",
    openingHours: [
      { day: "Mon–Fri", hours: "09:00 – 18:00" },
      { day: "Sat", hours: "10:00 – 14:00" },
      { day: "Sun", hours: "Closed" },
    ],
    address: "Sonnenallee 112, 12045 Berlin",
    mapsUrl: "https://maps.google.com/?q=Sonnenallee+112+Berlin",
    social: { instagram: "https://instagram.com/himalayatravelberlin", website: "https://himalayatravel.de" },
    phone: "+49 30 9876 5432",
    rating: 4.8,
    reviewCount: 62,
    isPremium: true,
    status: "approved",
  },
  {
    id: "b2",
    slug: "annapurna-consulting-munich",
    name: "Annapurna Tax & Business Consulting",
    citySlug: "munich",
    category: "Consultants",
    logo: "https://picsum.photos/seed/annapurna-logo/200/200",
    photos: ["https://picsum.photos/seed/annapurna-1/900/600"],
    description: "Tax filing, freelance registration (Gewerbe), and business setup support in English and Nepali.",
    openingHours: [
      { day: "Mon–Fri", hours: "09:30 – 17:30" },
      { day: "Sat–Sun", hours: "Closed" },
    ],
    address: "Landsberger Str. 88, 80339 Munich",
    mapsUrl: "https://maps.google.com/?q=Landsberger+Str+88+Munich",
    social: { website: "https://annapurna-consulting.de" },
    phone: "+49 89 4567 8901",
    rating: 4.6,
    reviewCount: 34,
    status: "approved",
  },
  {
    id: "b3",
    slug: "sagarmatha-money-transfer-frankfurt",
    name: "Sagarmatha Money Transfer",
    citySlug: "frankfurt",
    category: "Financial Services",
    logo: "https://picsum.photos/seed/sagarmatha-logo/200/200",
    photos: ["https://picsum.photos/seed/sagarmatha-1/900/600"],
    description: "Fast, low-fee remittance service to Nepal with same-day delivery to major banks.",
    openingHours: [{ day: "Mon–Sat", hours: "10:00 – 19:00" }],
    address: "Kaiserstraße 45, 60329 Frankfurt",
    mapsUrl: "https://maps.google.com/?q=Kaiserstrasse+45+Frankfurt",
    social: { facebook: "https://facebook.com/sagarmathatransfer" },
    phone: "+49 69 2345 6789",
    rating: 4.5,
    reviewCount: 51,
    status: "approved",
  },
];

export const groceries: Business[] = [
  {
    id: "g1",
    slug: "kathmandu-bazaar-berlin",
    name: "Kathmandu Bazaar",
    citySlug: "berlin",
    category: "Grocery",
    logo: "https://picsum.photos/seed/kbazaar-logo/200/200",
    photos: ["https://picsum.photos/seed/kbazaar-1/900/600", "https://picsum.photos/seed/kbazaar-2/900/600"],
    description: "Everything from mustard oil to gundruk — Berlin's most complete Nepali grocery store.",
    openingHours: [{ day: "Mon–Sun", hours: "09:00 – 21:00" }],
    address: "Karl-Marx-Straße 78, 12043 Berlin",
    mapsUrl: "https://maps.google.com/?q=Karl-Marx-Strasse+78+Berlin",
    social: { instagram: "https://instagram.com/kathmandubazaarberlin" },
    phone: "+49 30 5678 1234",
    rating: 4.7,
    reviewCount: 88,
    isPremium: true,
    status: "approved",
  },
  {
    id: "g2",
    slug: "everest-mart-munich",
    name: "Everest Mart",
    citySlug: "munich",
    category: "Grocery",
    logo: "https://picsum.photos/seed/everestmart-logo/200/200",
    photos: ["https://picsum.photos/seed/everestmart-1/900/600"],
    description: "Fresh vegetables, spices, and frozen momos, imported weekly.",
    openingHours: [{ day: "Mon–Sat", hours: "10:00 – 20:00" }],
    address: "Dachauer Str. 145, 80636 Munich",
    mapsUrl: "https://maps.google.com/?q=Dachauer+Str+145+Munich",
    social: { facebook: "https://facebook.com/everestmartmunich" },
    phone: "+49 89 3456 7890",
    rating: 4.6,
    reviewCount: 40,
    status: "approved",
  },
];

export function getBusinessesByCity(citySlug: string) {
  return businesses.filter((b) => b.citySlug === citySlug);
}
export function getBusinessBySlug(slug: string) {
  return businesses.find((b) => b.slug === slug) ?? groceries.find((b) => b.slug === slug);
}
export function getGroceriesByCity(citySlug: string) {
  return groceries.filter((g) => g.citySlug === citySlug);
}
