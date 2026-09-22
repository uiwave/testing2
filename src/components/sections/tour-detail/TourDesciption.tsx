interface Props {
  description: string;
}

export default function TourDesciption({ description }: Props) {
  return (
    <p className="text-foreground text-base leading-7 whitespace-pre-line sm:text-lg sm:leading-8">
      {description}
    </p>
  );
}
