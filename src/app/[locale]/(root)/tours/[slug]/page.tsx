import { notFound } from "next/navigation";
import {
  getTourBySlug,
  getTourSlugs,
  isLocale,
  type Locale,
} from "@/i18n/tours";
import PageHero from "@/components/uiwave/PageHero";
import TourInfoSection from "@/components/sections/tour-detail/TourInfoSection";
import TourGallerySection from "@/components/sections/tour-detail/TourGallerySection";
import TourItinerarySection from "@/components/sections/tour-detail/TourItinerarySection";
import TourIncludesSection from "@/components/sections/tour-detail/TourIncludesSection";
import TourCTASection from "@/components/sections/tour-detail/TourCTASection";

interface Props {
  params: Promise<{ slug: string; locale: string }>;
}

export async function generateStaticParams() {
  const slugs = await getTourSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function TourDetailPage({ params }: Props) {
  const { slug, locale: localeValue } = await params;

  if (!isLocale(localeValue)) {
    notFound();
  }

  const locale: Locale = localeValue;
  const tour = await getTourBySlug(slug, locale);

  if (!tour) {
    notFound();
  }

  return (
    <>
      <PageHero title={tour.title} image={tour.image} />
      <TourInfoSection tour={tour} />
      <TourGallerySection tour={tour} />
      <TourItinerarySection tour={tour} />
      <TourIncludesSection tour={tour} />
      <TourCTASection tour={tour} />
    </>
  );
}
