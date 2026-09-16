import { Tour } from "@/types/Tour";
import { routing } from "./routing";

export type Locale = (typeof routing.locales)[number];

const TOUR_SLUGS = [
  "tour-a-machu-picchu",
  "colca-canyon",
  "lago-titicaca",
  "huacachina-buggy",
  "valle-sagrado",
  "aguas-termales",
  "islas-flotantes",
  "bodegas-ica",
  "rainbow-mountain",
  "sillar-blanco",
  "city-tour-cusco",
] as const;

export type TourSlug = (typeof TOUR_SLUGS)[number];

export function isLocale(value: string | undefined): value is Locale {
  return routing.locales.includes(value as Locale);
}

export async function getTours(locale: Locale): Promise<Tour[]> {
  const tours: Tour[] = [];

  for (const slug of TOUR_SLUGS) {
    const tour = await getTourBySlug(slug, locale);
    if (tour) {
      tours.push(tour);
    }
  }

  return tours;
}

export async function getTourBySlug(
  slug: string,
  locale: Locale,
): Promise<Tour | undefined> {
  try {
    const tour = (await import(`../../messages/tours/${slug}/${locale}.json`))
      .default as Tour;
    return tour;
  } catch {
    return undefined;
  }
}

export async function getTourSlugs(): Promise<string[]> {
  return [...TOUR_SLUGS];
}
