interface Props {
  data: string[];
}

export default function TourGallery({ data }: Props) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {data.map((img, i) => (
        <div
          key={i}
          className="group relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-800"
        >
          <img
            src={img}
            alt=""
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
}
