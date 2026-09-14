import { Heading } from "@/components/uiwave/Heading";
import { TestimonialCard } from "@/components/uiwave/TestimonialCard";
import { TESTIMONIALS } from "@/data/testimonials";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function TestimonialsSection() {
  return (
    <section className="w-full overflow-hidden">
      <div className="uw-container uw-section">
        <Heading
          badge="Lo que dicen"
          title="Testimonios de Nuestros Viajeros"
          description="Las experiencias de quienes ya viajaron con nosotros hablan por sí solas. Historias reales, momentos únicos y recuerdos que duran para siempre."
        />
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full relative"
        >
          <CarouselContent>
            {TESTIMONIALS.map((testimonial) => (
              <CarouselItem
                key={testimonial.name}
                className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <TestimonialCard data={testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
