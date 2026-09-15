interface Props {
  title: string;
  image: string;
}

export default function PageHero({ title, image }: Props) {
  return (
    <section className="relative flex min-h-80 w-full items-center justify-center overflow-hidden pt-36 pb-20 sm:min-h-[50vh] sm:pt-40 sm:pb-24 md:min-h-[60vh]">
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
        className="pointer-events-none absolute bottom-0 left-0 z-10 max-h-24 w-full object-cover"
      />

      {/* Contenido del Título */}
      <div className="uw-container relative z-20 flex flex-col items-center px-4 text-center">
        <h1 className="font-heading text-[clamp(2.5rem,0.5rem+8vw,6rem)] leading-[0.95] text-white">
          {title}
        </h1>
      </div>
    </section>
  );
}
