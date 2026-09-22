import { Check } from "lucide-react";

interface Props {
  data: string[];
}

export default function TourInclude({ data }: Props) {
  return (
    <div className="space-y-6">
      <h2 className="font-heading text-xl font-bold tracking-tight text-white sm:text-2xl">
        Lo que incluye
      </h2>
      <ul className="space-y-4">
        {data?.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3.5">
            <div className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
              <Check className="size-3.5 stroke-3" />
            </div>
            <span className="text-base leading-snug text-slate-300">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
