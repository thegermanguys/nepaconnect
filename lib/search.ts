import { cities } from "@/lib/data/cities";
import { clubs } from "@/lib/data/clubs";
import { businesses, groceries } from "@/lib/data/businesses";
import { restaurants } from "@/lib/data/restaurants";
import { events } from "@/lib/data/events";
import { jobs } from "@/lib/data/jobs";
import { housingListings } from "@/lib/data/housing";

export type SearchResultType = "city" | "club" | "restaurant" | "business" | "event" | "job" | "housing";

export interface SearchResult {
  type: SearchResultType;
  title: string;
  subtitle: string;
  href: string;
  image?: string;
}

export function runSearch(query: string, type?: string): SearchResult[] {
  const q = query.trim().toLowerCase();
  const results: SearchResult[] = [];

  const matches = (...fields: (string | undefined)[]) =>
    !q || fields.some((f) => f?.toLowerCase().includes(q));

  if (!type || type === "city") {
    cities.forEach((c) => {
      if (matches(c.name, c.state)) {
        results.push({ type: "city", title: c.name, subtitle: c.state, href: `/cities/${c.slug}`, image: c.heroImage });
      }
    });
  }
  if (!type || type === "club") {
    clubs.forEach((c) => {
      if (matches(c.name, c.categorySlug, c.citySlug)) {
        results.push({
          type: "club",
          title: c.name,
          subtitle: `${c.categorySlug} · ${c.citySlug}`,
          href: `/cities/${c.citySlug}/${c.categorySlug}#${c.slug}`,
          image: c.logo,
        });
      }
    });
  }
  if (!type || type === "restaurant") {
    restaurants.forEach((r) => {
      if (matches(r.name, r.citySlug, ...r.cuisine)) {
        results.push({ type: "restaurant", title: r.name, subtitle: r.citySlug, href: `/restaurants/${r.slug}`, image: r.photos[0] });
      }
    });
  }
  if (!type || type === "business") {
    [...businesses, ...groceries].forEach((b) => {
      if (matches(b.name, b.category, b.citySlug)) {
        results.push({ type: "business", title: b.name, subtitle: b.category, href: `/businesses/${b.slug}`, image: b.photos[0] });
      }
    });
  }
  if (!type || type === "event") {
    events.forEach((e) => {
      if (matches(e.title, e.citySlug, e.category)) {
        results.push({ type: "event", title: e.title, subtitle: e.location, href: `/events/${e.slug}`, image: e.poster });
      }
    });
  }
  if (!type || type === "job") {
    jobs.forEach((j) => {
      if (matches(j.title, j.company, j.citySlug)) {
        results.push({ type: "job", title: j.title, subtitle: j.company, href: `/jobs/${j.slug}` });
      }
    });
  }
  if (!type || type === "housing") {
    housingListings.forEach((h) => {
      if (matches(h.title, h.citySlug, h.type)) {
        results.push({ type: "housing", title: h.title, subtitle: `€${h.price}/mo`, href: `/housing/${h.slug}`, image: h.photos[0] });
      }
    });
  }

  return results;
}
