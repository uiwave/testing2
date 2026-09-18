import { X } from "lucide-react";

interface Props {
  notIncludes?: string[];
}

export default function TourNotIncludesSection({ notIncludes }: Props) {
  return (
    <section className="w-full overflow-hidden">
      <h3 className="font-heading mb-2 text-lg tracking-wider text-white">
        No incluido
      </h3>
      <div className="bg-destructive mb-6 h-0.5 w-12" />
      <ul className="flex flex-col gap-3">
        {notIncludes?.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <div className="bg-destructive/10 mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-lg">
              <X className="text-destructive size-3.5" />
            </div>
            <span className="text-sm text-white">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
