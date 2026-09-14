import { DestinationCard } from "@/components/uiwave/DestinationCard";
import { Heading } from "@/components/uiwave/Heading";
import { Destination } from "@/types/Destination";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export const DESTINATIONS: Destination[] = [
  {
    slug: "/ica",
    image: "/images/Tour-Huacachina-Buggy-Sandboarding-02.webp",
    title: "Ica",
  },
  {
    slug: "/puno",
    image: "/images/puno.webp",
    title: "Puno",
  },
  {
    slug: "/cusco",
    image: "/images/Tour-a-Machu-Picchu-03.webp",
    title: "Cusco",
  },
  {
    slug: "/arequipa",
    image: "/images/Canon-del-Colca-y-Aguas-Termales-de-La-Calera-03.webp",
    title: "Arequipa",
  },
];

export default function DestinationsSection() {
  return (
    <section className="w-full overflow-hidden">
      <div className="uw-container uw-section pb-0">
        <Heading
          badge="Lo mejor de Perú"
          title="Explora nuestros destinos"
          description="Descubre los destinos más impresionantes de Perú. Desde paisajes
              majestuosos hasta sitios históricos, vive experiencias auténticas
              y memorables en cada rincón del país."
        />
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full relative"
        >
          <CarouselContent>
            {DESTINATIONS.map((destination) => (
              <CarouselItem
                key={destination.slug}
                className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <DestinationCard data={destination} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
