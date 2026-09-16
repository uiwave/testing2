"use client";

import { useState } from "react";
import TourCard from "@/components/uiwave/TourCard";
import { cn } from "cn";
import type { Tour } from "@/types/Tour";

interface Props {
  tours: Tour[];
}

const DESTINATIONS = ["Todos", "Cusco", "Arequipa", "Puno", "Ica"] as const;

export default function ToursGrid({ tours }: Props) {
  const [activeFilter, setActiveFilter] = useState<string>("Todos");

  const filteredTours =
    activeFilter === "Todos"
      ? tours
      : tours.filter(
          (tour) =>
            tour.destination.toLowerCase() === activeFilter.toLowerCase(),
        );

  return (
    <section className="w-full overflow-hidden">
      <div className="uw-container uw-section pt-0">
        <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
          {DESTINATIONS.map((dest) => (
            <button
              key={dest}
              onClick={() => setActiveFilter(dest)}
              className={cn(
                "font-heading cursor-pointer rounded-lg px-5 py-2.5 text-sm tracking-wider transition-all",
                activeFilter === dest
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border-border hover:border-primary hover:text-primary border text-white",
              )}
            >
              {dest}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredTours.map((tour) => (
            <TourCard key={tour.slug} data={tour} />
          ))}
        </div>
      </div>
    </section>
  );
}