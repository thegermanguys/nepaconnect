import type { UsefulLink } from "@/lib/types";

export const usefulLinks: UsefulLink[] = [
  {
    id: "ul1",
    title: "Federal Foreign Office — Visa Navigator",
    url: "https://www.auswaertiges-amt.de",
    description: "Official visa requirements and application process for Germany.",
    group: "visa",
  },
  {
    id: "ul2",
    title: "Embassy of Nepal, Berlin",
    url: "https://de.nepalembassy.gov.np",
    description: "Passport renewal, NRN card, and consular services for Nepali citizens.",
    group: "embassy",
  },
  {
    id: "ul3",
    title: "Federal Office for Migration and Refugees (BAMF)",
    url: "https://www.bamf.de",
    description: "Residence permits, integration courses, and asylum procedures.",
    group: "government",
  },
  {
    id: "ul4",
    title: "Deutsche Bahn — Bahncard & Regional Tickets",
    url: "https://www.bahn.de",
    description: "Plan train travel and find student discounts across Germany.",
    group: "transport",
  },
  {
    id: "ul5",
    title: "DAAD — Guide for International Students",
    url: "https://www.daad.de",
    description: "Scholarships, university applications, and student visa guidance.",
    group: "student",
  },
  {
    id: "ul6",
    title: "Emergency Services — 112",
    url: "tel:112",
    description: "Fire, ambulance, and medical emergencies anywhere in Germany.",
    group: "emergency",
  },
  {
    id: "ul7",
    title: "Police — 110",
    url: "tel:110",
    description: "Non-life-threatening police assistance across Germany.",
    group: "emergency",
  },
  {
    id: "ul8",
    title: "Nepal Embassy Emergency Consular Line",
    url: "tel:+493012345678",
    description: "24-hour consular support for Nepali citizens in distress.",
    group: "emergency",
  },
];

export const emergencyContacts = usefulLinks.filter((l) => l.group === "emergency");
