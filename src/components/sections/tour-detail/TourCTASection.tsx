import { Tour } from "@/types/Tour";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface Props {
  tour: Tour;
}

export default function TourCTASection({ tour }: Props) {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative">
        <img
          src={tour.image}
          alt={tour.title}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="uw-container relative z-10 py-20 text-center">
          <h2 className="font-heading text-[clamp(2rem,0.5rem+6vw,5rem)] leading-[0.95] text-white">
            ¿Listo para la aventura?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/80">
            Reserva ahora y vive una experiencia inolvidable en {tour.destination}. 
            Plazas limitadas, ¡no te quedes sin tu lugar!
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 font-heading text-lg tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
            >
              Reservar ahora
              <ArrowUpRight className="size-5" />
            </Link>
            <span className="font-heading text-3xl text-white">
              ${tour.price}{" "}
              <span className="text-base text-white/70">Persona</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
