import type { Category } from "@/lib/types";

export const categories: Category[] = [
  { id: "cat1", slug: "cricket", name: "Cricket", icon: "Zap", group: "sports", description: "Weekend leagues, tape-ball, and hardball clubs." },
  { id: "cat2", slug: "football", name: "Football", icon: "CircleDot", group: "sports", description: "5-a-side and 11-a-side teams across every city." },
  { id: "cat3", slug: "volleyball", name: "Volleyball", icon: "Activity", group: "sports", description: "Indoor courts and summer beach tournaments." },
  { id: "cat4", slug: "badminton", name: "Badminton", icon: "Feather", group: "sports", description: "Casual and competitive club nights." },
  { id: "cat5", slug: "basketball", name: "Basketball", icon: "CircleDot", group: "sports", description: "Pick-up games and university teams." },
  { id: "cat6", slug: "cultural-organizations", name: "Cultural Organizations", icon: "Landmark", group: "community", description: "Preserving Nepali heritage, language, and art." },
  { id: "cat7", slug: "student-associations", name: "Student Associations", icon: "GraduationCap", group: "community", description: "University-based NRNA and student unions." },
  { id: "cat8", slug: "music-groups", name: "Music Groups", icon: "Music", group: "community", description: "Folk, modern, and devotional music circles." },
  { id: "cat9", slug: "religious-organizations", name: "Religious Organizations", icon: "Sparkles", group: "community", description: "Temples, pujas, and festival gatherings." },
  { id: "cat10", slug: "professional-networks", name: "Professional Networks", icon: "Briefcase", group: "community", description: "Career mentoring and industry meetups." },
  { id: "cat11", slug: "restaurants", name: "Nepali Restaurants", icon: "UtensilsCrossed", group: "food", description: "Momos, dal bhat, and thakali kitchens." },
  { id: "cat12", slug: "grocery-stores", name: "Grocery Stores", icon: "ShoppingBasket", group: "food", description: "Spices, lentils, and imported staples." },
  { id: "cat13", slug: "doctors", name: "Doctors", icon: "Stethoscope", group: "services", description: "Nepali and English-speaking physicians." },
  { id: "cat14", slug: "lawyers", name: "Lawyers", icon: "Scale", group: "services", description: "Immigration, family, and corporate law." },
  { id: "cat15", slug: "housing", name: "Housing", icon: "Home", group: "life", description: "Rooms, flats, and temporary stays." },
  { id: "cat16", slug: "jobs", name: "Jobs", icon: "Briefcase", group: "life", description: "Openings shared by the community." },
  { id: "cat17", slug: "events", name: "Events", icon: "CalendarDays", group: "life", description: "Festivals, tournaments, and meetups." },
  { id: "cat18", slug: "tuition", name: "Tuition", icon: "BookOpen", group: "services", description: "Language classes and exam prep." },
  { id: "cat19", slug: "driving-schools", name: "Driving Schools", icon: "Car", group: "services", description: "Nepali-friendly Fahrschulen." },
];

export const sportsCategories = categories.filter((c) => c.group === "sports");
export const communityCategories = categories.filter((c) => c.group === "community");
export const serviceCategories = categories.filter((c) => c.group === "services");

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}
