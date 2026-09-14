import { Destination } from "@/types/Destination";
import Link from "next/link";

interface Props {
  data: Destination;
}

export function DestinationCard({ data }: Props) {
  return (
    <Link
      href={data.slug}
      className="group flex flex-col w-full overflow-hidden rounded-2xl bg-card border border-border"
    >
      <div className="relative aspect-4/4 w-full overflow-hidden">
        <img
          src={data.image}
          alt={data.title}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="flex flex-col p-5">
        <h3 className="font-heading text-[1.875rem] leading-[1.2] text-white">
          {data.title}
        </h3>
      </div>
    </Link>
  );
}
