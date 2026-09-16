"use client";

import { useState, useEffect } from "react";
import { MapPin, Compass, Clock, DollarSign } from "lucide-react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { DESTINATIONS } from "@/data/destinations";
import { FilterField } from "./filters/FilterField";
import { FilterActions } from "./filters/FilterActions";
import { DURATION_OPTIONS, PRICE_OPTIONS } from "./filters/filterOptions";

export function FilterSection() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [pendingDestino, setPendingDestino] = useState("");
  const [pendingDuracion, setPendingDuracion] = useState("");
  const [pendingPrecio, setPendingPrecio] = useState("");

  useEffect(() => {
    setPendingDestino(searchParams.get("destino") || "");
    setPendingDuracion(searchParams.get("duracion") || "");
    setPendingPrecio(searchParams.get("precio") || "");
  }, [searchParams]);

  const handleApplyFilters = () => {
    const params = new URLSearchParams();
    if (pendingDestino) params.set("destino", pendingDestino);
    if (pendingDuracion) params.set("duracion", pendingDuracion);
    if (pendingPrecio) params.set("precio", pendingPrecio);
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleClearFilters = () => {
    setPendingDestino("");
    setPendingDuracion("");
    setPendingPrecio("");
    router.push(pathname);
  };

  return (
    <section className="relative z-30 w-full">
      <div className="uw-container uw-section">
        <div className="bg-card relative overflow-hidden rounded-2xl">
          <div className="py-6 sm:py-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:flex lg:items-end lg:gap-0">
              <FilterField
                icon={MapPin}
                label="Destino"
                value={pendingDestino}
                onValueChange={setPendingDestino}
                placeholder="¿A dónde viajas?"
                options={DESTINATIONS.map((dest) => ({
                  value: dest.slug,
                  label: dest.title,
                }))}
              />
              <FilterField
                icon={Compass}
                label="Tipo de Tour"
                placeholder="Selecciona un tipo"
                options={DESTINATIONS.map((dest) => ({
                  value: dest.slug,
                  label: dest.title,
                }))}
                onValueChange={() => {}}
              />
              <FilterField
                icon={Clock}
                label="Días"
                value={pendingDuracion}
                onValueChange={setPendingDuracion}
                placeholder="Duración del tour"
                options={DURATION_OPTIONS}
              />
              <FilterField
                icon={DollarSign}
                label="Precio"
                value={pendingPrecio}
                onValueChange={setPendingPrecio}
                placeholder="Rango de precio"
                options={PRICE_OPTIONS}
              />
              <FilterActions
                onApply={handleApplyFilters}
                onClear={handleClearFilters}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
