interface Props {
  description: string;
}

export default function TourDescriptionSection({ description }: Props) {
  return (
    <section className="w-full overflow-hidden">
      <h2 className="font-heading mb-2 text-lg tracking-wider text-white">
        Descripción
      </h2>
      <div className="bg-primary mb-6 h-0.5 w-12" />
      <p className="text-base leading-relaxed text-white">{description}</p>
    </section>
  );
}
