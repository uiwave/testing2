import { Tour } from "@/types/Tour";
import { Clock, Signal, MapPin, DollarSign } from "lucide-react";

interface Props {
  tour: Tour;
}

export default function TourInfoSection({ tour }: Props) {
  return (
    <section className="w-full overflow-hidden">
      <div >
        <div >
          <div className="bg-card border-border flex flex-col gap-4 rounded-2xl border p-6">
            <h3 className="font-heading text-xl tracking-wider text-white">
              Resumen del tour
            </h3>
            <div className="border-border flex items-center gap-3 border-b pb-4">
              <DollarSign className="text-primary size-5 shrink-0" />
              <div>
                <span className="text-muted-foreground text-xs">Precio</span> 
                <p className="font-heading text-2xl text-white">
                  ${tour.price} <span className="text-sm">Persona</span>
                </p>
              </div>
            </div>
            <div className="border-border flex items-center gap-3 border-b pb-4">
              <Clock className="text-primary size-5 shrink-0" />
              <div>
                <span className="text-muted-foreground text-xs">Duración</span>
                <p className="font-heading text-lg text-white">
                  {tour.duration}
                </p>
              </div>
            </div>
            <div className="border-border flex items-center gap-3 border-b pb-4">
              <Signal className="text-primary size-5 shrink-0" />
              <div>
                <span className="text-muted-foreground text-xs">
                  Dificultad
                </span>
                <p className="font-heading text-lg text-white">
                  {tour.difficulty}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-primary size-5 shrink-0" />
              <div>
                <span className="text-muted-foreground text-xs">Destino</span>
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
