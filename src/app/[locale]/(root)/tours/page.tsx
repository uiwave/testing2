import PageHero from "@/components/uiwave/PageHero";
import ToursGrid from "@/components/sections/tours/ToursGrid";
import { Heading } from "@/components/uiwave/Heading";

export default function ToursPage() {
  return (
    <>
      <PageHero
        title="Nuestros Tours"
        image="/images/puno.webp"
      />
      <section className="w-full overflow-hidden">
        <div className="uw-container uw-section pb-0">
          <Heading
            centered
            badge="Explora Perú"
            title="Encuentra tu aventura perfecta"
            description="Desde ruinas incas hasta oasis en el desierto. Elige el destino que más te inspire y vive una experiencia única."
          />
        </div>
      </section>
      <ToursGrid />
    </>
  );
}
