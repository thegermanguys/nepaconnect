"use client";

import * as React from "react";
import { ShieldCheck } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { submitListingAction } from "@/app/submit/actions";
import type { City, Category } from "@/lib/types";

type FieldType = "text" | "email" | "tel" | "textarea" | "select" | "date";

interface FieldConfig {
  name: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
}

function buildCategoryForms(
  cityOptions: { value: string; label: string }[],
  sportsCategories: Category[],
  communityCategories: Category[]
): Record<string, { label: string; fields: FieldConfig[] }> {
  return {
    "sports-club": {
      label: "Sports Club",
      fields: [
        { name: "name", label: "Club name", type: "text", required: true },
        { name: "city", label: "City", type: "select", required: true, options: cityOptions },
        {
          name: "category",
          label: "Sport",
          type: "select",
          required: true,
          options: sportsCategories.map((c) => ({ value: c.slug, label: c.name })),
        },
        { name: "captain", label: "Captain name", type: "text", required: true },
        { name: "phone", label: "Phone", type: "tel", required: true },
        { name: "email", label: "Email", type: "email", required: true },
        { name: "practiceLocation", label: "Practice location", type: "text" },
        { name: "description", label: "Description", type: "textarea", required: true },
      ],
    },
    restaurant: {
      label: "Restaurant",
      fields: [
        { name: "name", label: "Restaurant name", type: "text", required: true },
        { name: "city", label: "City", type: "select", required: true, options: cityOptions },
        { name: "cuisine", label: "Cuisine", type: "text", placeholder: "Nepali, Tibetan…" },
        { name: "address", label: "Address", type: "text", required: true },
        { name: "phone", label: "Phone", type: "tel", required: true },
        { name: "description", label: "Description", type: "textarea", required: true },
      ],
    },
    association: {
      label: "Cultural / Music Group",
      fields: [
        { name: "name", label: "Group name", type: "text", required: true },
        { name: "city", label: "City", type: "select", required: true, options: cityOptions },
        {
          name: "category",
          label: "Focus area",
          type: "select",
          required: true,
          options: communityCategories.map((c) => ({ value: c.slug, label: c.name })),
        },
        { name: "contactName", label: "Contact name", type: "text", required: true },
        { name: "email", label: "Email", type: "email", required: true },
        { name: "description", label: "Description", type: "textarea", required: true },
      ],
    },
    event: {
      label: "Event",
      fields: [
        { name: "title", label: "Event title", type: "text", required: true },
        { name: "city", label: "City", type: "select", required: true, options: cityOptions },
        {
          name: "category",
          label: "Event type",
          type: "select",
          required: true,
          options: [
            { value: "festival", label: "Festival" },
            { value: "sports", label: "Sports" },
            { value: "cultural", label: "Cultural" },
            { value: "networking", label: "Networking" },
            { value: "religious", label: "Religious" },
            { value: "concert", label: "Concert" },
            { value: "other", label: "Other" },
          ],
        },
        { name: "organizer", label: "Organizer", type: "text", required: true },
        { name: "date", label: "Date", type: "date", required: true },
        { name: "location", label: "Location", type: "text", required: true },
        { name: "description", label: "Description", type: "textarea", required: true },
      ],
    },
  };
}

export function SubmitForm({
  cities,
  sportsCategories,
  communityCategories,
}: {
  cities: City[];
  sportsCategories: Category[];
  communityCategories: Category[];
}) {
  const [category, setCategory] = React.useState("sports-club");
  const cityOptions = React.useMemo(() => cities.map((c) => ({ value: c.slug, label: c.name })), [cities]);
  const CATEGORY_FORMS = React.useMemo(
    () => buildCategoryForms(cityOptions, sportsCategories, communityCategories),
    [cityOptions, sportsCategories, communityCategories]
  );
  const config = CATEGORY_FORMS[category];

  return (
    <Tabs value={category} onValueChange={setCategory} className="mt-8">
      <TabsList className="flex-wrap h-auto gap-y-2">
        {Object.entries(CATEGORY_FORMS).map(([key, val]) => (
          <TabsTrigger key={key} value={key}>{val.label}</TabsTrigger>
        ))}
      </TabsList>

      <TabsContent value={category}>
        <form
          action={submitListingAction}
          className="grid grid-cols-1 gap-5 rounded-2xl border border-border bg-surface p-6 shadow-soft sm:grid-cols-2 sm:p-8"
        >
          <input type="hidden" name="_form" value={category} />
          {config.fields.map((field) => (
            <div key={field.name} className={field.type === "textarea" ? "sm:col-span-2 space-y-2" : "space-y-2"}>
              <Label htmlFor={field.name}>
                {field.label} {field.required && <span className="text-primary">*</span>}
              </Label>
              {field.type === "textarea" ? (
                <Textarea id={field.name} name={field.name} required={field.required} placeholder={field.placeholder} rows={4} />
              ) : field.type === "select" ? (
                <Select id={field.name} name={field.name} required={field.required} defaultValue="">
                  <option value="" disabled>Select…</option>
                  {field.options?.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </Select>
              ) : (
                <Input id={field.name} name={field.name} type={field.type} required={field.required} placeholder={field.placeholder} />
              )}
            </div>
          ))}

          <div className="sm:col-span-2 flex items-start gap-2 rounded-xl bg-surface-2 p-4 text-sm text-muted-foreground">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-pine" />
            Your submission is sent to our moderation queue and reviewed before it appears publicly.
          </div>

          <Button type="submit" size="lg" className="sm:col-span-2">
            Submit for Review
          </Button>
        </form>
      </TabsContent>
    </Tabs>
  );
}
