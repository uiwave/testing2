interface Props {
  description: string;
}

export default function TourDescriptionSection({ description }: Props) {
  return (
    <section className="w-full overflow-hidden">
      <h2 className="font-heading text-lg tracking-wider text-white mb-2">
        Descripción
      </h2>
      <div className="w-12 h-0.5 bg-primary mb-6" />
      <p className="text-base leading-relaxed text-white">{description}</p>
    </section>
  );
}
