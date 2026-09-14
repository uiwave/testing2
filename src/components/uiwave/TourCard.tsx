import { Tour } from "@/types/Tour";
import { Clock } from "lucide-react";
import Link from "next/link";

interface Props {
  data: Tour;
}

export default function TourCard({ data }: Props) {
  return (
    <Link
      href={data.slug}
      className="group flex flex-col w-full overflow-hidden rounded-2xl bg-card border border-border p-5 gap-3 h-full"
    >
      <span className="text-center font-heading text-[3.125rem] leading-none tracking-widest text-primary mb-3.75">
        {data.destination}
      </span>

      <div className="relative aspect-video w-full overflow-hidden rounded-xl">
        <img
          src={data.image}
          alt={data.title}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <h3 className="font-heading text-[1.875rem] leading-[1.2] text-white">
        {data.title}
      </h3>

      <p className="text-base mt-auto">
        <span className="font-heading text-white text-2xl">{data.price}</span>{" "}
        Persona
      </p>

      <div className="border-t border-border" />

      <span className="font-heading text-white inline-flex items-center gap-2">
        <Clock className="size-4 text-primary" />
        {data.duration}
      </span>
    </Link>
  );
}
