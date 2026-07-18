import type { Club } from "@/lib/types";

// Nepali cultural organizations, societies, and associations across Germany.
// categorySlug is always "cultural-organizations" (must match lib/data/categories.ts).
export const culturalOrganizations: Club[] = [
  {
    id: "cl100",
    slug: "inas-germany",
    name: "INAS Germany",
    citySlug: "berlin",
    categorySlug: "cultural-organizations",
    logo: "/images/inas-logo.jpg",
    coverImage: "/images/inas-teej-26.jpg",
    description: "International Nepalese Artist Society(INAS) Germany.",
    social: { facebook: "https://www.facebook.com/profile.php?id=100032367049600" },
    phone: "",
    email: "",
    mapsUrl: "",
    contactPerson: "",
    status: "approved",
  },
  {
    id: "cl101",
    slug: "nedeg-berlin",
    name: "Nepali-Deutsche Gesellschaft e.V. (NEDEG)",
    citySlug: "berlin",
    categorySlug: "cultural-organizations",
    logo: "https://picsum.photos/seed/nedeg-logo/200/200",
    coverImage: "https://picsum.photos/seed/nedeg-cover/1200/600",
    description:
      "Founded in 1991, NEDEG is a non-profit society fostering cultural and social ties between Nepal and Germany through community events, newsletters, and member projects.",
    social: { website: "https://www.nedeg.de" },
    phone: "",
    email: "",
    mapsUrl: "https://maps.google.com/?q=Eosanderstra%C3%9Fe+13+10587+Berlin",
    contactPerson: "Rajendra Sthapit (Geschäftsführer)",
    isFeatured: true,
    status: "approved",
  },
  {
    id: "cl102",
    slug: "dng-cologne",
    name: "Deutsch-Nepalische Gesellschaft e.V. (DNG)",
    citySlug: "cologne",
    categorySlug: "cultural-organizations",
    logo: "https://picsum.photos/seed/dng-logo/200/200",
    coverImage: "https://picsum.photos/seed/dng-cover/1200/600",
    description:
      "A Cologne-based society dedicated to intercultural understanding between Germany and Nepal, best known for hosting the annual Nepaltag cultural festival.",
    social: {
      website: "https://www.deutsch-nepal.de",
      facebook: "https://www.facebook.com/deutschnepal/",
    },
    phone: "",
    email: "info@deutsch-nepal.de",
    mapsUrl: "https://maps.google.com/?q=Sedanstra%C3%9Fe+35+Cologne",
    contactPerson: "",
    status: "approved",
  },
  {
    id: "cl103",
    slug: "nepali-samaj-frankfurt",
    name: "Nepali Samaj e.V.",
    citySlug: "frankfurt",
    categorySlug: "cultural-organizations",
    logo: "https://picsum.photos/seed/nepalisamaj-logo/200/200",
    coverImage: "https://picsum.photos/seed/nepalisamaj-cover/1200/600",
    description:
      "A registered social and cultural organisation for the Nepali community in Frankfurt am Main, organising gatherings, festivals, and mutual-support activities.",
    social: { facebook: "https://www.facebook.com/samajnepali/" },
    phone: "",
    email: "",
    mapsUrl: "",
    contactPerson: "",
    status: "approved",
  },

  // Add new cultural organizations below this line, following the same shape.
];
