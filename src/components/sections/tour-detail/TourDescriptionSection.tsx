interface Props {
  description: string;
}

export default function TourDescriptionSection({ description }: Props) {
  return (
    <section className="w-full overflow-hidden">
      <h2 className="font-heading mb-5.5 text-[2rem] leading-[1.2] text-white">
        Descripción
      </h2>
      <p className="text-base leading-relaxed whitespace-pre-line">
        {description}
      </p>
    </section>
  );
}
