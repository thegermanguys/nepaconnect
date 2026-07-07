// ---------------------------------------------------------------------------
// Core domain types. These mirror the Supabase/Postgres schema in
// supabase/schema.sql so the same shapes can move from dummy data to live
// queries without touching component code.
// ---------------------------------------------------------------------------

export type ModerationStatus = "pending" | "approved" | "rejected";

export interface City {
  id: string;
  slug: string;
  name: string;
  state: string; // German Bundesland
  lat: number;
  lng: number;
  heroImage: string;
  blurb: string;
  communityCount: number;
  businessCount: number;
  eventCount: number;
  memberCount: number;
  isFeatured?: boolean;
}

export type CategoryGroup =
  | "sports"
  | "community"
  | "services"
  | "food"
  | "life";

export interface Category {
  id: string;
  slug: string;
  name: string;
  icon: string; // lucide-react icon name
  group: CategoryGroup;
  description: string;
}

export interface SocialLinks {
  instagram?: string;
  facebook?: string;
  tiktok?: string;
  whatsapp?: string;
  website?: string;
}

export interface Club {
  id: string;
  slug: string;
  name: string;
  citySlug: string;
  categorySlug: string; // e.g. "cricket", "football"
  logo: string;
  coverImage: string;
  description: string;
  social: SocialLinks;
  captainName: string;
  phone: string;
  email: string;
  practiceLocation: string;
  practiceTime: string;
  mapsUrl: string;
  memberCount: number;
  isFeatured?: boolean;
  status: ModerationStatus;
}

export interface Business {
  id: string;
  slug: string;
  name: string;
  citySlug: string;
  category: string;
  logo: string;
  photos: string[];
  description: string;
  openingHours: { day: string; hours: string }[];
  address: string;
  mapsUrl: string;
  social: SocialLinks;
  phone: string;
  rating: number;
  reviewCount: number;
  isPremium?: boolean;
  status: ModerationStatus;
}

export interface Restaurant extends Business {
  cuisine: string[];
  menuHighlights: { name: string; price: string; description?: string }[];
  delivery: { partner: string; url: string }[];
}

export interface Grocery extends Business {
  specialties: string[];
}

export interface EventItem {
  id: string;
  slug: string;
  title: string;
  citySlug: string;
  organizer: string;
  poster: string;
  location: string;
  mapsUrl: string;
  startDate: string;
  endDate?: string;
  description: string;
  category: "festival" | "sports" | "cultural" | "networking" | "religious";
  festivalTag?: "Dashain" | "Tihar" | "Teej" | "Holi";
  price: string;
  registerUrl: string;
  isFeatured?: boolean;
  status: ModerationStatus;
}

export interface Job {
  id: string;
  slug: string;
  title: string;
  company: string;
  citySlug: string;
  salary: string;
  type: "Full-time" | "Part-time" | "Internship" | "Working Student" | "Ausbildung";
  remote: boolean;
  description: string;
  requirements: string[];
  postedDate: string;
  applyUrl: string;
  isPromoted?: boolean;
  status: ModerationStatus;
}

export interface Housing {
  id: string;
  slug: string;
  title: string;
  citySlug: string;
  type: "Room" | "Apartment" | "Temporary Accommodation";
  price: number;
  sizeSqm: number;
  availableFrom: string;
  photos: string[];
  description: string;
  contactName: string;
  contactPhone: string;
  isPromoted?: boolean;
  status: ModerationStatus;
}

export interface Doctor {
  id: string;
  slug: string;
  name: string;
  citySlug: string;
  specialization: string;
  languages: ("Nepali" | "English" | "German" | "Hindi")[];
  address: string;
  phone: string;
  mapsUrl: string;
  appointmentUrl: string;
  photo: string;
  status: ModerationStatus;
}

export interface Lawyer {
  id: string;
  slug: string;
  name: string;
  citySlug: string;
  practiceAreas: (
    | "Immigration"
    | "Civil"
    | "Criminal"
    | "Family"
    | "Corporate"
  )[];
  languages: ("Nepali" | "English" | "German")[];
  address: string;
  phone: string;
  mapsUrl: string;
  photo: string;
  status: ModerationStatus;
}

export interface University {
  id: string;
  slug: string;
  name: string;
  citySlug: string;
  logo: string;
  studentAssociationName?: string;
  studentAssociationContact?: string;
  nearbyRestaurantSlugs: string[];
  nearbyGrocerySlugs: string[];
  nearbyHousingSlugs: string[];
  nearbyClubSlugs: string[];
}

export interface ReviewItem {
  id: string;
  targetType: "business" | "restaurant" | "club";
  targetId: string;
  authorName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface UsefulLink {
  id: string;
  title: string;
  url: string;
  description: string;
  group: "government" | "embassy" | "visa" | "transport" | "student" | "emergency";
}
