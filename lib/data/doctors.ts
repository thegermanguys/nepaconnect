import type { Doctor } from "@/lib/types";

export const doctors: Doctor[] = [
  {
    id: "doc1",
    slug: "dr-anita-shrestha-berlin",
    name: "Dr. Anita Shrestha",
    citySlug: "berlin",
    specialization: "General Medicine",
    languages: ["Nepali", "English", "German"],
    address: "Karl-Marx-Straße 55, 12043 Berlin",
    phone: "+49 30 2233 4455",
    mapsUrl: "https://maps.google.com/?q=Karl-Marx-Strasse+55+Berlin",
    appointmentUrl: "https://example.com/book/anita-shrestha",
    photo: "https://picsum.photos/seed/dr-anita/300/300",
    status: "approved",
  },
  {
    id: "doc2",
    slug: "dr-rajesh-poudel-munich",
    name: "Dr. Rajesh Poudel",
    citySlug: "munich",
    specialization: "Dentistry",
    languages: ["Nepali", "English"],
    address: "Sonnenstraße 12, 80331 Munich",
    phone: "+49 89 3344 5566",
    mapsUrl: "https://maps.google.com/?q=Sonnenstrasse+12+Munich",
    appointmentUrl: "https://example.com/book/rajesh-poudel",
    photo: "https://picsum.photos/seed/dr-rajesh/300/300",
    status: "approved",
  },
  {
    id: "doc3",
    slug: "dr-sabina-lama-frankfurt",
    name: "Dr. Sabina Lama",
    citySlug: "frankfurt",
    specialization: "Pediatrics",
    languages: ["Nepali", "English", "German", "Hindi"],
    address: "Berger Straße 90, 60316 Frankfurt",
    phone: "+49 69 4455 6677",
    mapsUrl: "https://maps.google.com/?q=Berger+Strasse+90+Frankfurt",
    appointmentUrl: "https://example.com/book/sabina-lama",
    photo: "https://picsum.photos/seed/dr-sabina/300/300",
    status: "approved",
  },
];

export function getDoctorsByCity(citySlug: string) {
  return doctors.filter((d) => d.citySlug === citySlug);
}
