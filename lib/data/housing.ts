import type { Housing } from "@/lib/types";

export const housingListings: Housing[] = [
  {
    id: "h1",
    slug: "wg-room-neukolln-berlin",
    title: "Sunny WG Room near Neukölln",
    citySlug: "berlin",
    type: "Room",
    price: 480,
    sizeSqm: 16,
    availableFrom: "2026-08-01",
    photos: ["https://picsum.photos/seed/wg-neukolln-1/900/600", "https://picsum.photos/seed/wg-neukolln-2/900/600"],
    description: "Furnished room in a 3-person WG, 5 minutes from Momo House. Nepali-speaking flatmates.",
    contactName: "Sabin",
    contactPhone: "+49 176 1234567",
    isPromoted: true,
    status: "approved",
  },
  {
    id: "h2",
    slug: "1-bed-apartment-sendling-munich",
    title: "1-Bedroom Apartment in Sendling",
    citySlug: "munich",
    type: "Apartment",
    price: 1150,
    sizeSqm: 42,
    availableFrom: "2026-09-01",
    photos: ["https://picsum.photos/seed/sendling-apt-1/900/600"],
    description: "Renovated apartment close to U3, 10 minutes from TU Munich by bike.",
    contactName: "Prashanti",
    contactPhone: "+49 176 2345678",
    status: "approved",
  },
  {
    id: "h3",
    slug: "temporary-stay-frankfurt-newcomers",
    title: "Temporary Stay for Newcomers (up to 4 weeks)",
    citySlug: "frankfurt",
    type: "Temporary Accommodation",
    price: 25,
    sizeSqm: 12,
    availableFrom: "2026-07-15",
    photos: ["https://picsum.photos/seed/temp-frankfurt-1/900/600"],
    description: "Community-run guest room for newly arrived Nepalis while they find permanent housing. Per-night rate.",
    contactName: "Frankfurt Nepali Youth Society",
    contactPhone: "+49 176 3456789",
    status: "approved",
  },
  {
    id: "h4",
    slug: "shared-flat-ehrenfeld-cologne",
    title: "Shared Flat Room in Ehrenfeld",
    citySlug: "cologne",
    type: "Room",
    price: 420,
    sizeSqm: 14,
    availableFrom: "2026-08-15",
    photos: ["https://picsum.photos/seed/ehrenfeld-1/900/600"],
    description: "Quiet room in a student-heavy flat share, close to public transport.",
    contactName: "Nirajan",
    contactPhone: "+49 176 4567890",
    status: "approved",
  },
];

export function getHousingByCity(citySlug: string) {
  return housingListings.filter((h) => h.citySlug === citySlug);
}
export function getHousingBySlug(slug: string) {
  return housingListings.find((h) => h.slug === slug);
}
