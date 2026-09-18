import TourSummary from "@/components/sections/tour-detail/TourSummary";
import TourItineraryList from "@/components/sections/tour-detail/TourItineraryList";
import TourIncludesSection from "@/components/sections/tour-detail/TourIncludesSection";
import TourNotIncludesSection from "@/components/sections/tour-detail/TourNotIncludesSection";
import TourGalleryList from "@/components/sections/tour-detail/TourGalleryList";
import TourInfoSection from "@/components/sections/tour-detail/TourInfoSection";
import TourDescriptionSection from "@/components/sections/tour-detail/TourDescriptionSection";
import PageHero from "@/components/uiwave/PageHero";
import { notFound } from "next/navigation";
import {
  getTourBySlug,
  getTourSlugs,
  isLocale,
  type Locale,
} from "@/i18n/tours";

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
      <div className="uw-container uw-section">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <div className="space-y-10 lg:col-span-8">
            <TourSummary tour={tour} />
            {tour.description && (
              <TourDescriptionSection description={tour.description} />
            )}
            {tour.itinerary && <TourItineraryList itinerary={tour.itinerary} />}
            {(tour.includes || tour.notIncludes) && (
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                {tour.includes && (
                  <TourIncludesSection includes={tour.includes} />
                )}
                {tour.notIncludes && (
                  <TourNotIncludesSection notIncludes={tour.notIncludes} />
                )}
              </div>
            )}
            {tour.images && <TourGalleryList images={tour.images} />}
          </div>
          <div className="lg:sticky lg:top-24 lg:col-span-4">
            <TourInfoSection tour={tour} />
          </div>
        </div>
      </div>
    </>
  );
}
