import { Heading } from "@/components/uiwave/Heading";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="w-full overflow-hidden">
      <div className="uw-container uw-section pb-0">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-10">
          <div className="relative mx-auto aspect-4/5 w-full max-w-130 sm:aspect-4/3 lg:aspect-3/4">
            <div className="bg-primary/10 absolute -inset-3 -rotate-2 rounded-4xl" />
            <div className="border-primary/50 absolute inset-0 rotate-1 rounded-2xl border" />
            <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-2xl ring-1 shadow-black/50 ring-white/10">
              <img
                src="/images/Cuevas-de-Arte-Rupestre-en-Sumbay-02.webp"
                alt="Cuevas de Arte Rupestre en Sumbay"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>
          <div className="flex flex-col items-start gap-6">
            <Heading
              centered
              badge="Sobre nosotros"
              title="Descubre el mundo viaja inteligente con nosotros"
              description=" Combinamos experiencia local y tecnología para que cada viaje por
              Perú sea simple, seguro y memorable de principio a fin."
              className="mb-0 text-start lg:mb-0"
            />
            <div className="flex w-full flex-col gap-6">
              <div className="border-primary flex items-start gap-4 border-l-2 pl-4">
                <div className="flex flex-col gap-1">
                  <h3 className="font-heading tracking-wider text-white sm:text-2xl">
                    Planificación de Viajes Personalizada
                  </h3>
                  <p className="text-base">
                    Diseñamos cada itinerario a tu medida, combinando tus
                    intereses con los mejores destinos de Perú.
                  </p>
                </div>
              </div>
            </div>
            <Link
              href=""
              className="bg-primary text-primary-foreground font-heading inline-flex items-center gap-2 rounded-lg px-6 py-3 text-base tracking-wider"
            >
              Más sobre nosotros
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
