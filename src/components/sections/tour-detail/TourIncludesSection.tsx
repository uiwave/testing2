import { Check } from "lucide-react";

interface Props {
  includes?: string[];
}

export default function TourIncludesSection({ includes }: Props) {
  return (
    <section className="w-full overflow-hidden">
      <h3 className="font-heading mb-2 text-lg tracking-wider text-white">
        Incluido
      </h3>
      <div className="bg-primary mb-6 h-0.5 w-12" />
      <ul className="flex flex-col gap-3">
        {includes?.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <div className="bg-primary/10 mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-lg">
              <Check className="text-primary size-3.5" />
            </div>
            <span className="text-sm text-white">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
