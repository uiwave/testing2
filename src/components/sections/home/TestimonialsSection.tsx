import { Heading } from "@/components/uiwave/Heading";
import { TestimonialCard } from "@/components/uiwave/TestimonialCard";
import { TESTIMONIALS } from "@/data/testimonials";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useTranslations } from "next-intl";

export default function TestimonialsSection() {
  const t = useTranslations("home.testimonial");
  return (
    <section className="w-full overflow-hidden">
      <div className="uw-container uw-section">
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
            {TESTIMONIALS.map((testimonial) => (
              <CarouselItem
                key={testimonial.name}
                className="basis-full pl-4 sm:basis-1/2 lg:basis-1/3"
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
