import type { Lawyer } from "@/lib/types";

export const lawyers: Lawyer[] = [
  {
    id: "law1",
    slug: "rita-basnet-berlin",
    name: "Rita Basnet, Rechtsanwältin",
    citySlug: "berlin",
    practiceAreas: ["Immigration", "Family"],
    languages: ["Nepali", "English", "German"],
    address: "Potsdamer Straße 88, 10785 Berlin",
    phone: "+49 30 5566 7788",
    mapsUrl: "https://maps.google.com/?q=Potsdamer+Strasse+88+Berlin",
    photo: "https://picsum.photos/seed/rita-basnet/300/300",
    status: "approved",
  },
  {
    id: "law2",
    slug: "bikash-thapa-munich",
    name: "Bikash Thapa, Attorney at Law",
    citySlug: "munich",
    practiceAreas: ["Corporate", "Immigration"],
    languages: ["Nepali", "English", "German"],
    address: "Maximilianstraße 30, 80539 Munich",
    phone: "+49 89 6677 8899",
    mapsUrl: "https://maps.google.com/?q=Maximilianstrasse+30+Munich",
    photo: "https://picsum.photos/seed/bikash-thapa/300/300",
    status: "approved",
  },
  {
    id: "law3",
    slug: "meera-gurung-frankfurt",
    name: "Meera Gurung, Rechtsanwältin",
    citySlug: "frankfurt",
    practiceAreas: ["Civil", "Criminal"],
    languages: ["Nepali", "English"],
    address: "Mainzer Landstraße 50, 60325 Frankfurt",
    phone: "+49 69 7788 9900",
    mapsUrl: "https://maps.google.com/?q=Mainzer+Landstrasse+50+Frankfurt",
    photo: "https://picsum.photos/seed/meera-gurung/300/300",
    status: "approved",
  },
];

export function getLawyersByCity(citySlug: string) {
  return lawyers.filter((l) => l.citySlug === citySlug);
}
