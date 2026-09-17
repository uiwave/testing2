interface Props {
  images?: string[];
}

export default function TourGalleryList({ images }: Props) {
  return (
    <section className="w-full overflow-hidden">
      <h2 className="font-heading text-lg tracking-wider text-white mb-2">
        Galería
      </h2>
      <div className="w-12 h-0.5 bg-primary mb-6" />
      <div className="grid grid-cols-2 gap-4">
        {images?.map((img, i) => (
          <div
            key={i}
            className="group relative aspect-video overflow-hidden rounded-2xl"
          >
            <img
              src={img}
              alt={`Galería ${i + 1}`}
              className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
