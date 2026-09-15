import { Tour } from "@/types/Tour";
import { Heading } from "@/components/uiwave/Heading";
import { Clock, Signal, MapPin, DollarSign } from "lucide-react";

interface Props {
  tour: Tour;
}

export default function TourInfoSection({ tour }: Props) {
  return (
    <section className="w-full overflow-hidden">
      <div className="uw-container uw-section">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-16">
          <div className="lg:col-span-2">
            <Heading
              badge={tour.destination}
              title={tour.title}
              className="text-start mb-0"
            />
            <p className="mt-6 text-base leading-relaxed">{tour.description}</p>
          </div>
          <div className="flex flex-col gap-4 rounded-2xl bg-card border border-border p-6">
            <h3 className="font-heading text-xl tracking-wider text-white">
              Resumen del tour
            </h3>
            <div className="flex items-center gap-3 border-b border-border pb-4">
              <DollarSign className="size-5 shrink-0 text-primary" />
              <div>
                <span className="text-xs text-muted-foreground">Precio</span>
                <p className="font-heading text-2xl text-white">
                  ${tour.price} <span className="text-sm">Persona</span>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 border-b border-border pb-4">
              <Clock className="size-5 shrink-0 text-primary" />
              <div>
                <span className="text-xs text-muted-foreground">Duración</span>
                <p className="font-heading text-lg text-white">
                  {tour.duration}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 border-b border-border pb-4">
              <Signal className="size-5 shrink-0 text-primary" />
              <div>
                <span className="text-xs text-muted-foreground">
                  Dificultad
                </span>
                <p className="font-heading text-lg text-white">
                  {tour.difficulty}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="size-5 shrink-0 text-primary" />
              <div>
                <span className="text-xs text-muted-foreground">
                  Destino
                </span>
                <p className="font-heading text-lg text-white">
                  {tour.destination}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
