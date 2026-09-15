import { Tour } from "@/types/Tour";
import { Heading } from "@/components/uiwave/Heading";
import { Check, X } from "lucide-react";

interface Props {
  tour: Tour;
}

export default function TourIncludesSection({ tour }: Props) {
  if (
    (!tour.includes || tour.includes.length === 0) &&
    (!tour.notIncludes || tour.notIncludes.length === 0)
  )
    return null;

  return (
    <section className="w-full overflow-hidden">
      <div className="uw-container uw-section pt-0">
        <Heading centered badge="Detalles" title="¿Qué incluye el tour?" />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {tour.includes && tour.includes.length > 0 && (
            <div className="bg-card border-border flex flex-col gap-4 rounded-2xl border p-6">
              <h3 className="font-heading text-lg tracking-wider text-white">
                Incluido
              </h3>
              <ul className="flex flex-col gap-3">
                {tour.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="bg-primary/20 mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full">
                      <Check className="text-primary size-3" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {tour.notIncludes && tour.notIncludes.length > 0 && (
            <div className="bg-card border-border flex flex-col gap-4 rounded-2xl border p-6">
              <h3 className="font-heading text-lg tracking-wider text-white">
                No incluido
              </h3>
              <ul className="flex flex-col gap-3">
                {tour.notIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="bg-destructive/20 mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full">
                      <X className="text-destructive size-3" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
