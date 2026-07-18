import type { Club } from "@/lib/types";

// Nepali music, dohori, and dance groups across Germany.
// categorySlug is always "music-groups" (must match lib/data/categories.ts).
//
// Empty for now — no verified, formally-named Nepali music/dance groups in
// Germany were confirmed yet. Add entries below following the same shape as
// lib/data/cultural-organizations.ts, e.g.:
//
// {
//   id: "mg1",
//   slug: "your-group-slug",
//   name: "Group Name",
//   citySlug: "city-slug",           // must exist in lib/data/cities.ts
//   categorySlug: "music-groups",
//   logo: "https://picsum.photos/seed/your-group-logo/200/200",
//   coverImage: "https://picsum.photos/seed/your-group-cover/1200/600",
//   description: "What the group does, genre, founding year, etc.",
//   social: { facebook: "", instagram: "", website: "" },
//   phone: "",
//   email: "",
//   mapsUrl: "",
//   contactPerson: "",               // leader/founder/manager name
//   status: "approved",
// },
export const musicGroups: Club[] = [];
