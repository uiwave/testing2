import { Check } from "lucide-react";

interface Props {
  data: string[];
}

export default function TourInclude({ data }: Props) {
  return (
    <div className="space-y-6">
      <h2 className="font-heading text-2xl leading-[0.95] text-white sm:text-3xl">
        Lo que incluye
      </h2>
      <ul className="space-y-4">
        {data?.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3.5">
            <div className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
              <Check className="size-3.5 stroke-3" />
            </div>
            <span className="text-foreground text-base leading-snug sm:text-lg">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
