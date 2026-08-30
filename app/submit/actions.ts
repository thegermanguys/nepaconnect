"use server";

import { redirect } from "next/navigation";
import { createAdminClient } from "@/lib/supabase/admin";

function str(formData: FormData, key: string): string {
  const v = formData.get(key);
  return typeof v === "string" ? v.trim() : "";
}

function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

function uniqueSuffix(): string {
  return Math.random().toString(36).slice(2, 8);
}

export async function submitListingAction(formData: FormData) {
  const formType = str(formData, "_form");
  const supabase = createAdminClient();

  let errorMessage: string | null = null;

  try {
    if (formType === "sports-club" || formType === "association") {
      const name = str(formData, "name");
      const row = {
        slug: `${slugify(name)}-${uniqueSuffix()}`,
        name,
        city_slug: str(formData, "city"),
        category_slug: str(formData, "category"),
        description: str(formData, "description"),
        phone: str(formData, "phone"),
        email: str(formData, "email"),
        captain_name: formType === "sports-club" ? str(formData, "captain") : "",
        practice_location: formType === "sports-club" ? str(formData, "practiceLocation") : "",
        contact_person: formType === "association" ? str(formData, "contactName") : "",
        status: "pending" as const,
      };
      const { error } = await supabase.from("clubs").insert(row);
      if (error) errorMessage = error.message;
    } else if (formType === "restaurant") {
      const name = str(formData, "name");
      const cuisineRaw = str(formData, "cuisine");
      const row = {
        slug: `${slugify(name)}-${uniqueSuffix()}`,
        name,
        city_slug: str(formData, "city"),
        description: str(formData, "description"),
        address: str(formData, "address"),
        phone: str(formData, "phone"),
        cuisine: cuisineRaw ? cuisineRaw.split(",").map((s) => s.trim()).filter(Boolean) : [],
        status: "pending" as const,
      };
      const { error } = await supabase.from("restaurants").insert(row);
      if (error) errorMessage = error.message;
    } else if (formType === "event") {
      const title = str(formData, "title");
      const row = {
        slug: `${slugify(title)}-${uniqueSuffix()}`,
        title,
        city_slug: str(formData, "city"),
        organizer: str(formData, "organizer"),
        start_date: str(formData, "date"),
        location: str(formData, "location"),
        description: str(formData, "description"),
        category: str(formData, "category") || "other",
        status: "pending" as const,
      };
      const { error } = await supabase.from("events").insert(row);
      if (error) errorMessage = error.message;
    } else {
      errorMessage = "Unknown submission type.";
    }
  } catch (err) {
    errorMessage = err instanceof Error ? err.message : "Something went wrong.";
  }

  // redirect() throws internally, so it must happen outside the try/catch
  // above — otherwise our own catch block would swallow that throw.
  if (errorMessage) {
    redirect(`/submit?error=${encodeURIComponent(errorMessage)}`);
  }
  redirect("/submit?submitted=1");
}
