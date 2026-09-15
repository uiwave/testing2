import { Tour } from "@/types/Tour";
import { Heading } from "@/components/uiwave/Heading";

interface Props {
  tour: Tour;
}

export default function TourGallerySection({ tour }: Props) {
  if (!tour.images || tour.images.length === 0) return null;

  return (
    <section className="w-full overflow-hidden">
      <div className="uw-container uw-section pt-0">
        <Heading
          centered
          badge="Galería"
          title="Momentos de la aventura"
        />
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {tour.images.map((img, i) => (
            <div
              key={i}
              className="group relative aspect-video overflow-hidden rounded-2xl"
            >
              <img
                src={img}
                alt={`${tour.title} - ${i + 1}`}
                className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
