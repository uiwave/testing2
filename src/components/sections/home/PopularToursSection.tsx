import { Heading } from "@/components/uiwave/Heading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import TourCard from "@/components/uiwave/TourCard";
import { TOURS } from "@/data/tours";

export default function PopularToursSection() {
  return (
    <section className="w-full overflow-hidden">
      <div className="uw-container uw-section pb-0">
        <Heading
          centered
          badge="No te pierdas"
          title="Nuestros Tours Destacados en Perú"
        />
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full relative"
        >
          <CarouselContent>
            {TOURS.map((tour) => (
              <CarouselItem
                key={tour.slug}
                className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <TourCard data={tour} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
