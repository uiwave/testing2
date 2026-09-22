import { Compass } from "lucide-react";

interface Props {
  data: string[];
}

export default function TourRecommendation({ data }: Props) {
  return (
    <div className="space-y-6">
      <h2 className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">
        Recomendaciones para el viaje
      </h2>
      <ul className="space-y-4">
        {data.map((item, index) => (
          <li key={index} className="flex items-start gap-4">
            <div className="bg-primary/10 text-primary mt-1 flex size-6 shrink-0 items-center justify-center rounded-lg">
              <Compass className="size-4" />
            </div>
            <span className="text-base leading-relaxed text-slate-300 sm:text-lg">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
