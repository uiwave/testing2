import TourInfoSection from "@/components/sections/tour-detail/TourInfoSection";
import PageHero from "@/components/uiwave/PageHero";
import { notFound } from "next/navigation";
import {
  getTourBySlug,
  getTourSlugs,
  isLocale,
  type Locale,
} from "@/i18n/tours";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
          <div className="space-y-7.5 lg:col-span-8">
            {tour.description && (
              <div>
                <h2 className="font-heading mb-5.5 text-[2rem] leading-[1.2] text-white">
                  Descripción
                </h2>
                <p className="text-base leading-relaxed whitespace-pre-line">
                  {tour.description}
                </p>
              </div>
            )}
            {tour.images && (
              <div className="grid grid-cols-2 gap-4">
                {tour.images?.map((img, i) => (
                  <div
                    key={i}
                    className="group relative aspect-video overflow-hidden rounded-2xl"
                  >
                    <img
                      src={img}
                      alt={`Galería ${i + 1}`}
                      className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            )}
            {tour.itinerary && (
              <>
                <div>
                  <h2 className="font-heading mb-5.5 text-[2rem] leading-[1.2] text-white">
                    Itinerario
                  </h2>
                  <Accordion type="single" collapsible className="w-full">
                    {tour.itinerary.map((day) => (
                      <AccordionItem key={day.day} value={`day-${day.day}`}>
                        <AccordionTrigger className="font-heading text-left text-base text-white">
                          Día {day.day}: {day.title}
                        </AccordionTrigger>
                        <AccordionContent className="text-sm leading-relaxed text-white/80">
                          {day.description}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </>
            )}
            {tour.includes && tour.notIncludes && (
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div>
                  <h2 className="font-heading mb-5.5 text-[2rem] leading-[1.2] text-white">
                    Incluido
                  </h2>
                  <ul className="flex flex-col gap-3">
                    {tour.includes?.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="bg-primary/10 mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-lg">
                          <Check className="text-primary size-3.5" />
                        </div>
                        <span className="text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="font-heading mb-5.5 text-[2rem] leading-[1.2] text-white">
                    No incluido
                  </h2>
                  <ul className="flex flex-col gap-3">
                    {tour.notIncludes?.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="bg-destructive/10 mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-lg">
                          <X className="text-destructive size-3.5" />
                        </div>
                        <span className="text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
          <div className="lg:sticky lg:top-24 lg:col-span-4">
            <TourInfoSection tour={tour} />
          </div>
        </div>
      </div>
    </>
  );
}
