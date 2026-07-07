import type { University } from "@/lib/types";

export const universities: University[] = [
  {
    id: "u1",
    slug: "tu-berlin",
    name: "Technische Universität Berlin",
    citySlug: "berlin",
    logo: "https://picsum.photos/seed/tu-berlin-logo/200/200",
    studentAssociationName: "Nepalese Student Association TU Berlin",
    studentAssociationContact: "nsa.tuberlin@gmail.com",
    nearbyRestaurantSlugs: ["momo-house-berlin"],
    nearbyGrocerySlugs: ["kathmandu-bazaar-berlin"],
    nearbyHousingSlugs: ["wg-room-neukolln-berlin"],
    nearbyClubSlugs: ["berlin-gorkha-cricket-club"],
  },
  {
    id: "u2",
    slug: "tu-munich",
    name: "Technical University of Munich",
    citySlug: "munich",
    logo: "https://picsum.photos/seed/tu-munich-logo/200/200",
    studentAssociationName: "Nepalese Students' Association TUM",
    studentAssociationContact: "nsa.tum@gmail.com",
    nearbyRestaurantSlugs: ["yeti-kitchen-munich"],
    nearbyGrocerySlugs: ["everest-mart-munich"],
    nearbyHousingSlugs: ["1-bed-apartment-sendling-munich"],
    nearbyClubSlugs: ["munich-yeti-football-club"],
  },
  {
    id: "u3",
    slug: "goethe-university-frankfurt",
    name: "Goethe University Frankfurt",
    citySlug: "frankfurt",
    logo: "https://picsum.photos/seed/goethe-uni-logo/200/200",
    studentAssociationName: "Nepalese Community Goethe University",
    studentAssociationContact: "ncgu.frankfurt@gmail.com",
    nearbyRestaurantSlugs: ["namaste-frankfurt"],
    nearbyGrocerySlugs: [],
    nearbyHousingSlugs: ["temporary-stay-frankfurt-newcomers"],
    nearbyClubSlugs: ["frankfurt-himal-cricket-club"],
  },
  {
    id: "u4",
    slug: "rwth-aachen",
    name: "RWTH Aachen University",
    citySlug: "aachen",
    logo: "https://picsum.photos/seed/rwth-logo/200/200",
    studentAssociationName: "Nepalese Student Society RWTH Aachen",
    studentAssociationContact: "nss.rwth@gmail.com",
    nearbyRestaurantSlugs: [],
    nearbyGrocerySlugs: [],
    nearbyHousingSlugs: [],
    nearbyClubSlugs: [],
  },
];

export function getUniversitiesByCity(citySlug: string) {
  return universities.filter((u) => u.citySlug === citySlug);
}
export function getUniversityBySlug(slug: string) {
  return universities.find((u) => u.slug === slug);
}
