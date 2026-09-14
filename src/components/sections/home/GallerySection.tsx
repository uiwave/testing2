"use client";

import { Heading } from "@/components/uiwave/Heading";
import { useState } from "react";

const galleryImages = [
  "/images/Tour-a-Machu-Picchu-03.webp",
  "/images/Montana-de-colores-06.webp",
  "/images/Canon-del-Colca-y-Aguas-Termales-de-La-Calera-03.webp",
  "/images/Tour-Huacachina-Buggy-Sandboarding-02.webp",
  "/images/City-Tour-Cusco-03.webp",
  "/images/Ascenso-volcan-Misti-–-Ruta-norte-02.webp",
  "/images/Tour-en-Bote-a-Islas-Ballestas-y-Candelabro-02.webp",
  "/images/puno.webp",
];

export default function GallerySection() {
  const [stopScroll, setStopScroll] = useState(false);

  return (
    <section className="w-full overflow-hidden">
      <div className="uw-container uw-section pb-0">
        <Heading
          badge="Momentos"
          title="Galería de Experiencias"
          description="Descubre los destinos más impresionantes de Perú. Desde paisajes majestuosos hasta sitios históricos, vive experiencias auténticas y memorables en cada rincón del país."
        />
      </div>

      <div className="relative group w-full overflow-hidden">
        <img
          src="/images/bg/gelary-sp1.png"
          alt=""
          className="absolute top-0 left-0 z-10 w-full h-14 object-cover object-bottom pointer-events-none"
        />
        <img
          src="/images/bg/gelary-sp2.png"
          alt=""
          className="absolute bottom-0 left-0 z-10 w-full h-14 object-cover object-top pointer-events-none"
        />

        <div
          className="flex w-max h-[40vh] sm:h-[45vh] gap-5 marquee-track"
          style={{
            animationPlayState: stopScroll ? "paused" : "running",
            animationDuration: `${galleryImages.length * 3000}ms`,
          }}
        >
          {[...galleryImages, ...galleryImages].map((image, index) => (
            <figure
              key={`${image}-${index}`}
              className="relative shrink-0 w-70 sm:w-[320px] md:w-90 h-full overflow-hidden rounded-2xl bg-card border border-border"
            >
              <img
                src={image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
