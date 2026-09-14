import { Testimonials } from "@/types/Testimonial";
import { Quote, Star } from "lucide-react";

interface Props {
  data: Testimonials;
}

export function TestimonialCard({ data }: Props) {
  return (
    <figure className="relative w-full overflow-hidden rounded-2xl bg-card border border-border p-6 flex flex-col gap-4 h-full">
      <Quote className="size-8 text-primary" />
      <p className="text-foreground">&ldquo;{data.comment}&rdquo;</p>
      <div className="border-t border-border pt-4 mt-auto flex items-center gap-4">
        <img
          src={data.image}
          alt={data.name}
          className="size-12 rounded-full object-cover object-center border-2 border-primary"
        />
        <div className="flex flex-col">
          <figcaption className="font-heading text-white tracking-wider">
            {data.name}
          </figcaption>
          <span className="text-muted text-sm"></span>
        </div>
        <div className="ml-auto flex items-center gap-0.5">
          {Array.from({ length: data.rating }).map((_, i) => (
            <Star key={i} className="size-4 text-primary fill-primary" />
          ))}
        </div>
      </div>
    </figure>
  );
}
