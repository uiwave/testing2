import { TourItinerary } from "@/types/Tour";

interface Props {
  itinerary?: TourItinerary[];
}

export default function TourItineraryList({ itinerary }: Props) {
  return (
    <section className="w-full overflow-hidden">
      <h2 className="font-heading mb-2 text-lg tracking-wider text-white">
        Itinerario
      </h2>
      <div className="bg-primary mb-6 h-0.5 w-12" />
      <div className="relative">
        <div className="bg-border absolute top-0 bottom-0 left-4 w-px" />
        <div className="flex flex-col gap-8">
          {itinerary?.map((day) => (
            <div key={day.day} className="relative flex gap-6">
              <div className="bg-primary text-primary-foreground font-heading relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full text-sm">
                {day.day}
              </div>
              <div className="flex flex-col gap-1 pt-1">
                <h3 className="font-heading text-base tracking-wider text-white">
                  {day.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/80">
                  {day.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
