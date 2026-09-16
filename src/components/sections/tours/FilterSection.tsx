import {
  MapPin,
  Compass,
  Clock,
  DollarSign,
  Search,
  ChevronDown,
} from "lucide-react";

const fields = [
  {
    icon: MapPin,
    label: "Destino",
    placeholder: "¿A dónde viajas?",
  },
  {
    icon: Compass,
    label: "Tipo de Tour",
    placeholder: "Selecciona un tipo",
  },
  {
    icon: Clock,
    label: "Días",
    placeholder: "Duración del tour",
  },
  {
    icon: DollarSign,
    label: "Precio",
    placeholder: "Rango de precio",
  },
];

export function FilterSection() {
  return (
    <section className="relative z-30 w-full">
      <div className="uw-container uw-section">
        <div className="bg-card relative overflow-hidden rounded-2xl">
          <div className="py-6 sm:py-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:flex lg:items-end lg:gap-0">
              {fields.map((field, index) => {
                const Icon = field.icon;
                const isLast = index === fields.length - 1;

                return (
                  <div
                    key={field.label}
                    className={`group relative flex flex-col gap-2 px-5 py-4 lg:flex-1 ${
                      !isLast ? "lg:border-border lg:border-r" : ""
                    }`}
                  >
                    {/* Label */}
                    <div className="flex items-center gap-2">
                      <Icon className="text-primary size-4 shrink-0" />
                      <span className="font-heading text-primary text-xs tracking-[3px] uppercase">
                        {field.label}
                      </span>
                    </div>

                    {/* Select fake */}
                    <div className="border-border hover:border-primary/60 flex cursor-pointer items-center justify-between gap-2 rounded-lg border bg-white/5 px-4 py-3 transition-colors">
                      <span className="text-sm text-white/50">
                        {field.placeholder}
                      </span>
                      <ChevronDown className="text-primary size-4 shrink-0" />
                    </div>
                  </div>
                );
              })}

              {/* Botón buscar en la misma fila */}
              <div className="px-5 py-4">
                <button className="bg-primary text-primary-foreground font-heading inline-flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-xl px-7 py-3 text-sm tracking-[2px] whitespace-nowrap uppercase transition-opacity hover:opacity-90">
                  <Search className="size-4" />
                  Buscar Tours
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
