import Link from "next/link";

interface Props {
  title: string;
  image: string;
  breadcrumbs?: { label: string; href: string }[];
}

export default function PageHero({ title, image, breadcrumbs }: Props) {
  return (
    <section className="relative flex min-h-[50vh] w-full items-end overflow-hidden sm:min-h-[60vh]">
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <img
        src="/images/bg/uw.webp"
        alt=""
        className="pointer-events-none absolute bottom-0 left-0 z-10 w-full"
      />
      <div className="uw-container relative z-20 pb-20 pt-30 sm:pb-24">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="mb-4 flex items-center gap-2 text-sm font-heading tracking-wider text-white/60 sm:text-base">
            <Link href="/" className="transition-colors hover:text-primary">
              Inicio
            </Link>
            {breadcrumbs.map((crumb) => (
              <span key={crumb.href} className="flex items-center gap-2">
                <span>/</span>
                <Link
                  href={crumb.href}
                  className="transition-colors hover:text-primary"
                >
                  {crumb.label}
                </Link>
              </span>
            ))}
            <span>/</span>
            <span className="text-primary">{title}</span>
          </nav>
        )}
        <h1 className="font-heading text-[clamp(2.5rem,0.5rem+8vw,6rem)] leading-[0.95] text-white">
          {title}
        </h1>
      </div>
    </section>
  );
}
