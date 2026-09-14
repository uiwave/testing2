import { Send } from "lucide-react";

import { getSocials } from "@/data/site";

function BrandColumn() {
  const selectedSocials = getSocials(["facebook", "instagram", "tiktok"]);
  return (
    <div className="flex flex-col items-start gap-6">
      <img
        src="/logo-white.webp"
        alt="TRAVELINK Logo"
        className="h-12 xl:h-14 w-auto object-contain"
      />
      <p>
        Expediciones únicas por Perú. Diseñamos viajes a tu medida, combinando
        experiencia local y tecnología para que cada experiencia sea segura y
        memorable.
      </p>
      <div className="flex items-center gap-3">
        {selectedSocials.map(({ id, url, name, Icon }) => (
          <a
            key={id}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className="flex size-10 items-center justify-center rounded-full bg-white/10 hover:bg-primary transition-colors"
          >
            <Icon className="size-5 fill-current" />
          </a>
        ))}
      </div>
    </div>
  );
}

function NewsletterColumn() {
  return (
    <div className="flex flex-col justify-center text-center">
      <h3 className="font-heading tracking-wider text-[clamp(1.875rem,1.25rem+1.563vw,2.75rem)] leading-none">
        Únete para recibir noticias y ofertas.
      </h3>
      <form className="mt-6 flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          required
          placeholder="Tu correo electrónico"
          className="w-full rounded-lg bg-card border border-border px-4 py-3 text-sm text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground px-5 py-3 text-sm font-heading tracking-wider transition-opacity hover:opacity-90"
        >
          Suscribirse
          <Send className="size-4" />
        </button>
      </form>
    </div>
  );
}

function QuickLinksColumn() {
  return (
    <div className="flex flex-col gap-4 items-center">
      <h3 className="font-heading tracking-wider  text-[clamp(1.5rem,1.054rem+1.116vw,2.125rem)]">
        Enlaces
      </h3>
      <ul className="flex flex-col gap-2">
        {/* {quickLinks.map((link) => (
                  <li key={link.labelKey}>
                    <a
                      href={`/${locale}${link.href}`}
                      className="font-heading tracking-wider "
                    >
                      {t(link.labelKey)}
                    </a>
                  </li>
                ))} */}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden">
      <img
        src="/images/bg/uw.webp"
        alt=""
        className="pointer-events-none absolute top-0 left-0 z-10 w-full rotate-180"
      />
      <div className="relative">
        <img
          src="/images/Tour-a-Machu-Picchu-03.webp"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />

        <div className="relative uw-container pt-40 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            <BrandColumn />
            <NewsletterColumn />
            <QuickLinksColumn />
          </div>

          <p
            aria-hidden="true"
            className="mt-10 select-none text-center font-heading leading-none  text-[clamp(4.688rem,-9.821rem+36.272vw,25rem)]"
          >
            VIAJEROS
          </p>
        </div>
      </div>
    </footer>
  );
}
