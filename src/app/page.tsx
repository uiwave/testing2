import TestimonialsSection from "@/components/sections/home/TestimonialsSection";
import DestinationsSection from "@/components/sections/home/DestinationsSection";
import PopularToursSection from "@/components/sections/home/PopularToursSection";
import GallerySection from "@/components/sections/home/GallerySection";
import AboutSection from "@/components/sections/home/AboutSection";
import HeroSection from "@/components/sections/home/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <DestinationsSection />
      <AboutSection />
      <PopularToursSection />
      <GallerySection />
      <TestimonialsSection />
    </>
  );
}
