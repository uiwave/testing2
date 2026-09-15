import { Tour } from "@/types/Tour";
import { Heading } from "@/components/uiwave/Heading";

interface Props {
  tour: Tour;
}

export default function TourItinerarySection({ tour }: Props) {
  if (!tour.itinerary || tour.itinerary.length === 0) return null;

  return (
    <section className="w-full overflow-hidden">
      <div className="uw-container uw-section pt-0">
        <Heading
          centered
          badge="Itinerario"
          title="Plan día a día"
        />
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border sm:left-8" />
          <div className="flex flex-col gap-8">
            {tour.itinerary.map((day) => (
              <div
                key={day.day}
                className="relative flex gap-6 sm:gap-8"
              >
                <div className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-lg text-primary-foreground sm:size-16 sm:text-xl">
                  {day.day}
                </div>
                <div className="flex flex-col gap-2 pt-2 sm:pt-3">
                  <h3 className="font-heading text-xl tracking-wider text-white sm:text-2xl">
                    {day.title}
                  </h3>
                  <p className="text-base leading-relaxed">
                    {day.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
