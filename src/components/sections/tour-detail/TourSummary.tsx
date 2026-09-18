import { Tour } from "@/types/Tour";
import { DollarSign, Clock, Signal, MapPin } from "lucide-react";

interface Props {
  tour: Tour;
}

export default function TourSummary({ tour }: Props) {
  return (
    <section className="w-full overflow-hidden">
      <div className="border-border flex flex-wrap items-center justify-between gap-6 border-y py-8">
        <div className="flex items-center gap-4">
          <div className="bg-primary/10 flex items-center justify-center rounded-xl p-3">
            <DollarSign className="text-primary size-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-muted-foreground text-xs">Precio</span>
            <span className="font-heading text-xl tracking-wider text-white">
              ${tour.price}
            </span>
          </div>
        </div>

        <div className="bg-border hidden h-8 w-px sm:block" />

        <div className="flex items-center gap-4">
          <div className="bg-primary/10 flex items-center justify-center rounded-xl p-3">
            <Clock className="text-primary size-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-muted-foreground text-xs">Duración</span>
            <span className="font-heading text-xl tracking-wider text-white">
              {tour.duration}
            </span>
          </div>
        </div>

        <div className="bg-border hidden h-8 w-px sm:block" />

        <div className="flex items-center gap-4">
          <div className="bg-primary/10 flex items-center justify-center rounded-xl p-3">
            <MapPin className="text-primary size-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-muted-foreground text-xs">Destino</span>
            <span className="font-heading text-xl tracking-wider text-white">
              {tour.destination}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
