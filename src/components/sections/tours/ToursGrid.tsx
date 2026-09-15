"use client";

import { useState } from "react";
import { TOURS } from "@/data/tours";
import TourCard from "@/components/uiwave/TourCard";
import { cn } from "cn";

const DESTINATIONS = ["Todos", "Cusco", "Arequipa", "Puno", "Ica"] as const;

export default function ToursGrid() {
  const [activeFilter, setActiveFilter] = useState<string>("Todos");

  const filteredTours =
    activeFilter === "Todos"
      ? TOURS
      : TOURS.filter(
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
                "cursor-pointer rounded-lg px-5 py-2.5 font-heading text-sm tracking-wider transition-all",
                activeFilter === dest
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-white hover:border-primary hover:text-primary",
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
