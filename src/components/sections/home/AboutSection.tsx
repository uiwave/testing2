import { Heading } from "@/components/uiwave/Heading";
import { Link } from "@/i18n/navigation";
import { ArrowUpRight, MapPin, Sparkles, Compass } from "lucide-react";
import { useTranslations } from "next-intl";

const FEATURES = [
  {
    icon: Compass,
    title: "Planificación de Viajes Personalizada",
    description:
      "Diseñamos cada itinerario a tu medida, combinando tus intereses con los mejores destinos de Perú.",
  },
  {
    icon: MapPin,
    title: "Guías Locales Expertos",
    description:
      "Acompañamiento con profesionales apasionados por la cultura, historia y rincones ocultos.",
  },
  {
    icon: Sparkles,
    title: "Experiencias Únicas",
    description:
      "Acceso exclusivo a actividades gastronómicas, de aventura y turismo vivencial auténtico.",
  },
];

export default function AboutSection() {
  const t = useTranslations("home.about");

  return (
    <section className="w-full overflow-hidden">
      <div className="uw-container uw-section pb-0">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-10">
          {/* COLUMNA IZQUIERDA: GALERÍA DE 3 IMÁGENES */}
          <div className="grid grid-cols-2 gap-4">
            {/* Imagen Grande (Izquierda) */}
            <div className="h-full w-full overflow-hidden rounded-full shadow-lg">
              <img
                src="/images/Cuevas-de-Arte-Rupestre-en-Sumbay-02.webp"
                alt="Cuevas de Arte Rupestre en Sumbay"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Columna con 2 Imágenes Medianas (Derecha) */}
            <div className="grid h-full grid-rows-2 gap-4">
              <div className="h-full w-full overflow-hidden rounded-full rounded-bl-none shadow-lg">
                <img
                  src="/images/Cuevas-de-Arte-Rupestre-en-Sumbay-02.webp" // Cambia por tu ruta de imagen
                  alt="Plato peruano o ingrediente"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="h-full w-full overflow-hidden rounded-full rounded-tl-none shadow-lg">
                <img
                  src="/images/Cuevas-de-Arte-Rupestre-en-Sumbay-02.webp" // Cambia por tu ruta de imagen
                  alt="Experiencia gastronómica"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: INFORMACIÓN */}
          <div className="flex flex-col items-start gap-6">
            <Heading
              centered
              badge={t("badge")}
              title={t("title")}
              description={t("description")}
              className="mb-0 text-start lg:mb-0"
            />

            <div className="flex w-full flex-col gap-6">
              {FEATURES.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="group relative overflow-hidden">
                    <div className="flex items-start gap-5">
                      <div className="flex shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10 p-3 text-white shadow-inner transition-transform duration-300 group-hover:border-white/30 group-hover:bg-white/20">
                        <Icon className="h-6 w-6" />
                      </div>

                      <div className="flex flex-col gap-1.5 pt-0.5">
                        <h3 className="font-heading group-hover:text-primary text-xl tracking-wide text-white transition-colors duration-300 sm:text-2xl">
                          {feature.title}
                        </h3>
                        <p className="text-sm leading-relaxed sm:text-base">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
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
