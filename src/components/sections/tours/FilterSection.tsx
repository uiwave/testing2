"use client";

import { useState, useEffect } from "react";
import { MapPin, Compass, Clock, DollarSign, Search } from "lucide-react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DESTINATIONS } from "@/data/destinations";

const DURATION_OPTIONS = [
  { value: "full-day", label: "Full Day" },
  { value: "2-3", label: "2-3 Días" },
  { value: "4-7", label: "4-7 Días" },
  { value: "8+", label: "1+ Semana" },
];

const PRICE_OPTIONS = [
  { value: "0-100", label: "$0 - $100" },
  { value: "100-200", label: "$100 - $200" },
  { value: "200-300", label: "$200 - $300" },
  { value: "300+", label: "$300+" },
];

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
              {/* Filter Destino */}
              <div className="group lg:border-border relative flex flex-col gap-2 px-5 py-4 lg:flex-1 lg:border-r">
                <div className="flex items-center gap-2">
                  <MapPin className="text-primary size-4 shrink-0" />
                  <span className="font-heading text-primary text-xs tracking-[3px] uppercase">
                    Destino
                  </span>
                </div>
                <Select value={pendingDestino || undefined} onValueChange={setPendingDestino}>
                  <SelectTrigger className="border-border hover:border-primary/60 [&>svg]:text-primary flex h-auto w-full cursor-pointer items-center justify-between gap-2 rounded-lg border bg-white/5 px-4 py-3 text-sm text-white/50 transition-colors focus:ring-0 focus:ring-offset-0 data-placeholder:text-white/50 [&>svg]:size-4 [&>svg]:opacity-100">
                    <SelectValue placeholder="¿A dónde viajas?" />
                  </SelectTrigger>
                  <SelectContent className="border-border bg-zinc-900 text-white">
                    <SelectItem value="todos">Todos</SelectItem>
                    {DESTINATIONS.map((dest) => (
                      <SelectItem key={dest.id} value={dest.slug}>
                        {dest.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {/* Filter Type Tour */}
              <div className="group lg:border-border relative flex flex-col gap-2 px-5 py-4 lg:flex-1 lg:border-r">
                <div className="flex items-center gap-2">
                  <Compass className="text-primary size-4 shrink-0" />
                  <span className="font-heading text-primary text-xs tracking-[3px] uppercase">
                    Tipo de Tour
                  </span>
                </div>
                <Select>
                  <SelectTrigger className="border-border hover:border-primary/60 [&>svg]:text-primary flex h-auto w-full cursor-pointer items-center justify-between gap-2 rounded-lg border bg-white/5 px-4 py-3 text-sm text-white/50 transition-colors focus:ring-0 focus:ring-offset-0 data-placeholder:text-white/50 [&>svg]:size-4 [&>svg]:opacity-100">
                    <SelectValue placeholder="Selecciona un tipo" />
                  </SelectTrigger>
                  <SelectContent className="border-border bg-zinc-900 text-white">
                    <SelectItem value="todos">Todos</SelectItem>
                    {DESTINATIONS.map((dest) => (
                      <SelectItem key={dest.id} value={dest.slug}>
                        {dest.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {/* Filter Days */}
              <div className="group lg:border-border relative flex flex-col gap-2 px-5 py-4 lg:flex-1 lg:border-r">
                <div className="flex items-center gap-2">
                  <Clock className="text-primary size-4 shrink-0" />
                  <span className="font-heading text-primary text-xs tracking-[3px] uppercase">
                    Días
                  </span>
                </div>
                <Select value={pendingDuracion || undefined} onValueChange={setPendingDuracion}>
                  <SelectTrigger className="border-border hover:border-primary/60 [&>svg]:text-primary flex h-auto w-full cursor-pointer items-center justify-between gap-2 rounded-lg border bg-white/5 px-4 py-3 text-sm text-white/50 transition-colors focus:ring-0 focus:ring-offset-0 data-placeholder:text-white/50 [&>svg]:size-4 [&>svg]:opacity-100">
                    <SelectValue placeholder="Duración del tour" />
                  </SelectTrigger>
                  <SelectContent className="border-border bg-zinc-900 text-white">
                    <SelectItem value="todos">Todos</SelectItem>
                    {DURATION_OPTIONS.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {/* Filter Price */}
              <div className="group lg:border-border relative flex flex-col gap-2 px-5 py-4 lg:flex-1 lg:border-r">
                <div className="flex items-center gap-2">
                  <DollarSign className="text-primary size-4 shrink-0" />
                  <span className="font-heading text-primary text-xs tracking-[3px] uppercase">
                    Precio
                  </span>
                </div>
                <Select value={pendingPrecio || undefined} onValueChange={setPendingPrecio}>
                  <SelectTrigger className="border-border hover:border-primary/60 [&>svg]:text-primary flex h-auto w-full cursor-pointer items-center justify-between gap-2 rounded-lg border bg-white/5 px-4 py-3 text-sm text-white/50 transition-colors focus:ring-0 focus:ring-offset-0 data-placeholder:text-white/50 [&>svg]:size-4 [&>svg]:opacity-100">
                    <SelectValue placeholder="Rango de precio" />
                  </SelectTrigger>
                  <SelectContent className="border-border bg-zinc-900 text-white">
                    <SelectItem value="todos">Todos</SelectItem>
                    {PRICE_OPTIONS.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {/* Botones */}
              <div className="px-5 py-4 flex gap-2">
                <button
                  onClick={handleClearFilters}
                  className="border-border text-primary font-heading inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-xl border px-7 py-3 text-sm tracking-[2px] whitespace-nowrap uppercase transition-opacity hover:opacity-90"
                >
                  Limpiar filtros
                </button>
                <button
                  onClick={handleApplyFilters}
                  className="bg-primary text-primary-foreground font-heading inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-xl px-7 py-3 text-sm tracking-[2px] whitespace-nowrap uppercase transition-opacity hover:opacity-90"
                >
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
