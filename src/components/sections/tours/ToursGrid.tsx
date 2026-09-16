import TourCard from "@/components/uiwave/TourCard";
import type { Tour } from "@/types/Tour";

interface Props {
  tours: Tour[];
  destino?: string;
  duracion?: string;
  precio?: string;
}

function parseDurationToDays(duration: string): number {
  const lower = duration.toLowerCase();
  if (lower.includes("full day") || lower.includes("1 day")) return 1;
  const match = lower.match(/(\d+)/);
  return match ? parseInt(match[1], 10) : 1;
}

function isInDurationRange(days: number, range: string): boolean {
  switch (range) {
    case "full-day":
      return days === 1;
    case "2-3":
      return days >= 2 && days <= 3;
    case "4-7":
      return days >= 4 && days <= 7;
    case "8+":
      return days >= 8;
    default:
      return true;
  }
}

function isInPriceRange(price: number, range: string): boolean {
  switch (range) {
    case "0-100":
      return price >= 0 && price <= 100;
    case "100-200":
      return price > 100 && price <= 200;
    case "200-300":
      return price > 200 && price <= 300;
    case "300+":
      return price > 300;
    default:
      return true;
  }
}

export default function ToursGrid({ tours, destino, duracion, precio }: Props) {
  const filteredTours = tours.filter((tour) => {
    if (destino && tour.destination.toLowerCase() !== destino.toLowerCase()) {
      return false;
    }
    if (duracion) {
      const tourDays = parseDurationToDays(tour.duration);
      if (!isInDurationRange(tourDays, duracion)) {
        return false;
      }
    }
    if (precio) {
      if (!isInPriceRange(tour.price, precio)) {
        return false;
      }
    }
    return true;
  });

  return (
    <section className="w-full overflow-hidden">
      <div className="uw-container uw-section pt-0">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredTours.map((tour) => (
            <TourCard key={tour.slug} data={tour} />
          ))}
        </div>
      </div>
    </section>
  );
}