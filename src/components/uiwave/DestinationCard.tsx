import { Link } from "@/i18n/navigation";
import { Destination } from "@/types/Destination";

interface Props {
  data: Destination;
}

export function DestinationCard({ data }: Props) {
  return (
    <Link
      href={`/tours?destino=${data.slug}`}
      className="group bg-card border-border flex w-full flex-col overflow-hidden rounded-2xl border"
    >
      <div className="relative aspect-4/4 w-full overflow-hidden">
        <img
          src={data.image}
          alt={data.title}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="p-5">
        <h3 className="font-heading text-[1.875rem] leading-[1.2] text-white">
          {data.title}
        </h3>
      </div>
    </Link>
  );
}
