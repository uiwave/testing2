interface Props {
  description: string;
}

export default function TourDesciption({ description }: Props) {
  return (
    <p className="text-base leading-relaxed whitespace-pre-line">
      {description}
    </p>
  );
}
