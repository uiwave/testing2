import { DestinationCard } from "@/components/uiwave/DestinationCard";
import { Heading } from "@/components/uiwave/Heading";
import { Destination } from "@/types/Destination";
import { useTranslations } from "next-intl";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export const DESTINATIONS: Destination[] = [
  {
    id: 1,
    slug: "ica",
    image: "/images/Tour-Huacachina-Buggy-Sandboarding-02.webp",
    title: "Ica",
  },
  {
    id: 2,
    slug: "puno",
    image: "/images/puno.webp",
    title: "Puno",
  },
  {
    id: 3,
    slug: "cusco",
    image: "/images/Tour-a-Machu-Picchu-03.webp",
    title: "Cusco",
  },
  {
    id: 4,
    slug: "arequipa",
    image: "/images/Canon-del-Colca-y-Aguas-Termales-de-La-Calera-03.webp",
    title: "Arequipa",
  },
];

export default function DestinationsSection() {
  const t = useTranslations("home.destination");

  return (
    <section className="w-full overflow-hidden">
      <div className="uw-container uw-section pb-0">
        <Heading
          badge={t("badge")}
          title={t("title")}
          description={t("description")}
        />
        <Carousel
          opts={{
            align: "start",
          }}
          className="relative w-full"
        >
          <CarouselContent>
            {DESTINATIONS.map((destination) => (
              <CarouselItem
                key={destination.id}
                className="basis-full pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
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
