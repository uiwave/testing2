import TourInfoSection from "@/components/sections/tour-detail/TourInfoSection";
import PageHero from "@/components/uiwave/PageHero";
import { notFound } from "next/navigation";
import {
  getTourBySlug,
  getTourSlugs,
  isLocale,
  type Locale,
} from "@/i18n/tours";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import TourDesciption from "@/components/sections/tour-detail/TourDesciption";
import TourItinerary from "@/components/sections/tour-detail/TourItinerary";
import TourInclude from "@/components/sections/tour-detail/TourInclude";
import TourNotInclude from "@/components/sections/tour-detail/TourNotInclude";
import TourRecommendation from "@/components/sections/tour-detail/TourRecommendation";
import TourAdditional from "@/components/sections/tour-detail/TourAdditional";
import TourGallery from "@/components/sections/tour-detail/TourGallery";

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

      <div className="uw-container uw-section py-10 lg:py-14">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-8">
            <Tabs defaultValue="description" className="w-full">
              <TabsList
                variant="line"
                className="border-border mb-10 flex w-full border-b"
              >
                {tour.description && (
                  <TabsTrigger value="description">Descripción</TabsTrigger>
                )}
                {tour.itinerary && tour.itinerary.length > 0 && (
                  <TabsTrigger value="itinerary">Itinerario</TabsTrigger>
                )}
                {tour.includes && tour.notIncludes && (
                  <TabsTrigger value="includes">Incluido</TabsTrigger>
                )}
                {tour.recommendations && tour.recommendations.length > 0 && (
                  <TabsTrigger value="recommendations">
                    Recomendaciones
                  </TabsTrigger>
                )}
                {tour.additional && tour.additional.length > 0 && (
                  <TabsTrigger value="additional">Adicionales</TabsTrigger>
                )}
              </TabsList>

              {tour.description && (
                <TabsContent value="description" className="space-y-10">
                  <TourDesciption description={tour.description} />
                  {tour.images && tour.images.length > 0 && (
                    <TourGallery data={tour.images} />
                  )}
                </TabsContent>
              )}

              {tour.itinerary && tour.itinerary.length > 0 && (
                <TabsContent value="itinerary">
                  <TourItinerary itinerary={tour.itinerary} />
                </TabsContent>
              )}

              {tour.includes && tour.notIncludes && (
                <TabsContent value="includes">
                  <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
                    <TourInclude data={tour.includes} />
                    <TourNotInclude data={tour.notIncludes} />
                  </div>
                </TabsContent>
              )}

              {tour.recommendations && tour.recommendations.length > 0 && (
                <TabsContent value="recommendations">
                  <TourRecommendation data={tour.recommendations} />
                </TabsContent>
              )}

              {tour.additional && tour.additional.length > 0 && (
                <TabsContent value="additional">
                  <TourAdditional data={tour.additional} />
                </TabsContent>
              )}
            </Tabs>
          </div>

          <div className="lg:sticky lg:top-24 lg:col-span-4">
            <TourInfoSection tour={tour} />
          </div>
        </div>
      </div>
    </>
  );
}
