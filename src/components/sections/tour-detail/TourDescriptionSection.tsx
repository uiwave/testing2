interface Props {
  description: string;
}

export default function TourDescriptionSection({ description }: Props) {
  return (
    <section className="w-full overflow-hidden">
      <h2 className="font-heading mb-6 text-xl tracking-wider text-white">
        Descripción
      </h2>
      <p className="text-base leading-relaxed">{description}</p>
    </section>
  );
}
