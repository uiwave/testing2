"use client";

import { useState, useEffect } from "react";
import { MapPin, Compass, Clock, DollarSign } from "lucide-react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { DESTINATIONS } from "@/data/destinations";
import { FilterField } from "./filters/FilterField";
import { FilterActions } from "./filters/FilterActions";
import { DURATION_OPTIONS, PRICE_OPTIONS } from "./filters/filterOptions";
import { useTranslations } from "next-intl";

export function FilterSection() {
  const t = useTranslations("tours");

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
        <div className="bg-card relative rounded-2xl">
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <div className="bg-primary absolute top-0 left-10 h-40 w-40 -translate-y-1/2 rounded-full blur-2xl"></div>
          </div>
          <img
            src="/images/bg/boking-img.png"
            alt=""
            className="absolute bottom-0 left-10 z-10 hidden h-[calc(100%+32px)] max-h-none object-contain md:block"
          />
          <div className="relative z-20 p-6 sm:p-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:items-end">
              <div className="hidden md:col-span-3 md:block lg:col-span-3"></div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:col-span-9 lg:col-span-9 lg:flex lg:items-end lg:gap-0">
                <FilterField
                  icon={MapPin}
                  label={t("filter.destination.label")}
                  value={pendingDestino}
                  onValueChange={setPendingDestino}
                  placeholder={t("filter.destination.placeholder")}
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
                  label={t("filter.duration.label")}
                  value={pendingDuracion}
                  onValueChange={setPendingDuracion}
                  placeholder={t("filter.duration.placeholder")}
                  options={DURATION_OPTIONS}
                />
                {/* <FilterField
                icon={DollarSign}
                label="Precio"
                value={pendingPrecio}
                onValueChange={setPendingPrecio}
                placeholder="Rango de precio"
                options={PRICE_OPTIONS}
              /> */}
                <FilterActions
                  onApply={handleApplyFilters}
                  onClear={handleClearFilters}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
