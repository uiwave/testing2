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
              <div>
                <h2 className="font-heading mb-5.5 text-[2rem] leading-[1.2] text-white">
                  Itinerario
                </h2>
                <Accordion
                  type="single"
                  collapsible
                  className="w-full space-y-3"
                >
                  {tour.itinerary.map((day) => (
                    <AccordionItem
                      key={day.day}
                      value={`day-${day.day}`}
                      className="border-white/10 not-last:border-b"
                    >
                      <AccordionTrigger className="font-heading py-4 text-left text-base text-white hover:no-underline">
                        <div className="flex items-center gap-3">
                          <div className="bg-primary flex size-8 shrink-0 items-center justify-center rounded-sm text-sm font-semibold text-white">
                            {day.day}
                          </div>
                          <span className="text-[1.25rem]">{day.title}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="space-y-4 pb-4 text-base">
                        {/* Descripción general del día */}
                        {day.description && (
                          <p className="leading-relaxed text-white/80">
                            {day.description}
                          </p>
                        )}

                        {/* Desglose de actividades/horarios si existen */}
                        {day.activities && day.activities.length > 0 && (
                          <div className="border-primary/30 mt-4 space-y-3 border-l-2 pl-4">
                            {day.activities.map((activity, index) => (
                              <div
                                key={index}
                                className="relative flex flex-col gap-1"
                              >
                                {/* Indicador visual de la actividad */}
                                <div className="bg-primary absolute top-1.5 -left-5.25 size-2.5 rounded-full" />

                                <div className="flex items-center gap-2">
                                  {activity.time && (
                                    <span className="bg-primary/10 text-primary rounded px-2 py-0.5 text-xs font-semibold">
                                      {activity.time}
                                    </span>
                                  )}
                                  <h4 className="text-sm font-semibold text-white">
                                    {activity.title}
                                  </h4>
                                </div>

                                {activity.description && (
                                  <p className="text-sm leading-normal text-white/70">
                                    {activity.description}
                                  </p>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
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
