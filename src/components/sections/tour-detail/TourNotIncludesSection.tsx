import { X } from "lucide-react";

interface Props {
  notIncludes?: string[];
}

export default function TourNotIncludesSection({ notIncludes }: Props) {
  return (
    <section className="w-full overflow-hidden">
      <div className="bg-card border-border flex flex-col gap-4 rounded-2xl border p-6">
        <h3 className="font-heading text-lg tracking-wider text-white">
          No incluido
        </h3>
        <ul className="flex flex-col gap-3">
          {notIncludes?.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <div className="bg-destructive/20 mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full">
                <X className="text-destructive size-3" />
              </div>
              <span className="text-white">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
