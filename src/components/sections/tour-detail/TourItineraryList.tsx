import { TourItinerary } from "@/types/Tour";

interface Props {
  itinerary?: TourItinerary[];
}

export default function TourItineraryList({ itinerary }: Props) {
  return (
    <section className="w-full overflow-hidden">
      <h2 className="font-heading mb-6 text-xl tracking-wider text-white">
        Itinerario
      </h2>
      <div className="flex flex-col gap-6">
        {itinerary?.map((day) => (
          <div
            key={day.day}
            className="border-border border-b pb-6 last:border-0"
          >
            <div className="mb-2 flex items-center gap-3">
              <span className="bg-primary text-primary-foreground font-heading flex size-7 items-center justify-center rounded-full text-sm">
                {day.day}
              </span>
              <h3 className="font-heading text-lg tracking-wider text-white">
                {day.title}
              </h3>
            </div>
            <p className="pl-10 text-base leading-relaxed text-white">
              {day.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
