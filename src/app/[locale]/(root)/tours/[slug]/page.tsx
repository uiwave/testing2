import TourInfoSection from "@/components/sections/tour-detail/TourInfoSection";
import PageHero from "@/components/uiwave/PageHero";
import { notFound } from "next/navigation";
import {
  getTourBySlug,
  getTourSlugs,
  isLocale,
  type Locale,
} from "@/i18n/tours";
import { Check, X, Compass, Info, Clock, Calendar } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

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

      <div className="uw-container uw-section py-12 lg:py-16">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Columna Principal */}
          <div className="space-y-12 lg:col-span-8">
            <Tabs defaultValue="description" className="w-full">
              {/* Tabs List estilizado a todo el ancho */}
              <TabsList
                variant="line"
                className="mb-8 flex w-full border-b border-white/10 pb-1"
              >
                {tour.description && (
                  <TabsTrigger
                    value="description"
                    className="flex-1 text-center text-sm font-medium transition-colors sm:text-base md:text-lg"
                  >
                    Descripción
                  </TabsTrigger>
                )}
                {tour.itinerary && tour.itinerary.length > 0 && (
                  <TabsTrigger
                    value="itinerary"
                    className="flex-1 text-center text-sm font-medium transition-colors sm:text-base md:text-lg"
                  >
                    Itinerario
                  </TabsTrigger>
                )}
                {tour.includes && tour.notIncludes && (
                  <TabsTrigger
                    value="includes"
                    className="flex-1 text-center text-sm font-medium transition-colors sm:text-base md:text-lg"
                  >
                    Incluido
                  </TabsTrigger>
                )}
                {tour.recommendations && tour.recommendations.length > 0 && (
                  <TabsTrigger
                    value="recommendations"
                    className="flex-1 text-center text-sm font-medium transition-colors sm:text-base md:text-lg"
                  >
                    Recomendaciones
                  </TabsTrigger>
                )}
                {tour.additional && tour.additional.length > 0 && (
                  <TabsTrigger
                    value="additional"
                    className="flex-1 text-center text-sm font-medium transition-colors sm:text-base md:text-lg"
                  >
                    Adicionales
                  </TabsTrigger>
                )}
              </TabsList>

              {/* 1. DESCRIPCIÓN */}
              {tour.description && (
                <TabsContent
                  value="description"
                  className="focus-visible:outline-none"
                >
                  <div className="space-y-4">
                    <h2 className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      Acerca del tour
                    </h2>
                    <p className="text-base leading-relaxed whitespace-pre-line text-slate-300 sm:text-lg sm:leading-8">
                      {tour.description}
                    </p>
                  </div>
                </TabsContent>
              )}

              {/* 2. ITINERARIO */}
              {tour.itinerary && tour.itinerary.length > 0 && (
                <TabsContent
                  value="itinerary"
                  className="focus-visible:outline-none"
                >
                  <div className="space-y-6">
                    <h2 className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      Itinerario detallado
                    </h2>
                    <Accordion
                      type="single"
                      collapsible
                      className="w-full divide-y divide-white/10 border-t border-b border-white/10"
                    >
                      {tour.itinerary.map((day) => (
                        <AccordionItem
                          key={day.day}
                          value={`day-${day.day}`}
                          className="border-none py-2"
                        >
                          <AccordionTrigger className="font-heading group py-4 text-left hover:no-underline">
                            <div className="flex items-center gap-4">
                              <span className="bg-primary/20 text-primary group-hover:bg-primary flex size-10 shrink-0 items-center justify-center rounded-lg text-sm font-bold transition-colors group-hover:text-white">
                                D{day.day}
                              </span>
                              <span className="group-hover:text-primary text-lg font-semibold text-white transition-colors sm:text-xl">
                                {day.title}
                              </span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="space-y-6 pt-2 pb-6 pl-14 text-base">
                            {day.description && (
                              <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
                                {day.description}
                              </p>
                            )}

                            {day.activities && day.activities.length > 0 && (
                              <div className="border-primary/30 space-y-5 border-l-2 pl-4 sm:pl-6">
                                {day.activities.map((activity, index) => (
                                  <div key={index} className="space-y-1.5">
                                    <div className="flex flex-wrap items-center gap-2.5">
                                      {activity.time && (
                                        <span className="bg-primary/15 text-primary inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-semibold tracking-wide">
                                          <Clock className="size-3" />
                                          {activity.time}
                                        </span>
                                      )}
                                      <h4 className="text-base font-bold text-white sm:text-lg">
                                        {activity.title}
                                      </h4>
                                    </div>
                                    {activity.description && (
                                      <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
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
                </TabsContent>
              )}

              {/* 3. INCLUIDO Y NO INCLUIDO */}
              {tour.includes && tour.notIncludes && (
                <TabsContent
                  value="includes"
                  className="focus-visible:outline-none"
                >
                  <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
                    <div className="space-y-6">
                      <h2 className="font-heading text-xl font-bold tracking-tight text-white sm:text-2xl">
                        Lo que incluye
                      </h2>
                      <ul className="space-y-4">
                        {tour.includes?.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3.5">
                            <div className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                              <Check className="size-3.5 stroke-[3]" />
                            </div>
                            <span className="text-base leading-snug text-slate-300">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-6">
                      <h2 className="font-heading text-xl font-bold tracking-tight text-white sm:text-2xl">
                        No incluye
                      </h2>
                      <ul className="space-y-4">
                        {tour.notIncludes?.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3.5">
                            <div className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-rose-500/10 text-rose-400">
                              <X className="size-3.5 stroke-[3]" />
                            </div>
                            <span className="text-base leading-snug text-slate-400">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TabsContent>
              )}

              {/* 4. RECOMENDACIONES */}
              {tour.recommendations && tour.recommendations.length > 0 && (
                <TabsContent
                  value="recommendations"
                  className="focus-visible:outline-none"
                >
                  <div className="space-y-6">
                    <h2 className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      Recomendaciones para el viaje
                    </h2>
                    <ul className="space-y-4">
                      {tour.recommendations.map((item, index) => (
                        <li key={index} className="flex items-start gap-4">
                          <div className="bg-primary/10 text-primary mt-1 flex size-6 shrink-0 items-center justify-center rounded-lg">
                            <Compass className="size-4" />
                          </div>
                          <span className="text-base leading-relaxed text-slate-300 sm:text-lg">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>
              )}

              {/* 5. ADICIONALES */}
              {tour.additional && tour.additional.length > 0 && (
                <TabsContent
                  value="additional"
                  className="focus-visible:outline-none"
                >
                  <div className="space-y-6">
                    <h2 className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      Información importante
                    </h2>
                    <ul className="space-y-4">
                      {tour.additional.map((item, index) => (
                        <li key={index} className="flex items-start gap-4">
                          <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
                            <Info className="size-4" />
                          </div>
                          <span className="text-base leading-relaxed text-slate-300 sm:text-lg">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>
              )}
            </Tabs>

            {/* GALERÍA DE IMÁGENES */}
            {tour.images && tour.images.length > 0 && (
              <div className="border-t border-white/10 pt-6">
                <h3 className="font-heading mb-6 text-xl font-bold text-white sm:text-2xl">
                  Galería del tour
                </h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {tour.images.map((img, i) => (
                    <div
                      key={i}
                      className="group relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-800"
                    >
                      <img
                        src={img}
                        alt={`Galería ${tour.title} ${i + 1}`}
                        className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Columna Lateral (Sidebar) */}
          <div className="lg:sticky lg:top-24 lg:col-span-4">
            <TourInfoSection tour={tour} />
          </div>
        </div>
      </div>
    </>
  );
}
