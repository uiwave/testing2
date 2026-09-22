import { Info } from "lucide-react";

interface Props {
  data: string[];
}

export default function TourAdditional({ data }: Props) {
  return (
    <div className="space-y-6">
      <h2 className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">
        Información importante
      </h2>
      <ul className="space-y-4">
        {data.map((item, index) => (
          <li key={index} className="flex items-start gap-4">
            <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
              <Info className="size-4" />
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
