import { Testimonials } from "@/types/Testimonial";
import { Quote, Star } from "lucide-react";

interface Props {
  data: Testimonials;
}

export function TestimonialCard({ data }: Props) {
  return (
    <figure className="bg-card border-border relative flex h-full w-full flex-col gap-4 overflow-hidden rounded-2xl border p-6">
      <Quote className="text-primary size-8" />
      <p className="text-foreground">&ldquo;{data.comment}&rdquo;</p>
      <div className="border-border mt-auto flex items-center gap-4 border-t pt-4">
        <img
          src={data.image}
          alt={data.name}
          className="border-primary size-12 rounded-full border-2 object-cover object-center"
        />
        <div className="flex flex-col">
          <figcaption className="font-heading tracking-wider text-white">
            {data.name}
          </figcaption>
          <span className="text-muted text-sm"></span>
        </div>
        <div className="ml-auto flex items-center gap-0.5">
          {Array.from({ length: data.rating }).map((_, i) => (
            <Star key={i} className="text-primary fill-primary size-4" />
          ))}
        </div>
      </div>
    </figure>
  );
}
