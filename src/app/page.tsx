import AboutSection from "@/components/sections/home/AboutSection";
import DestinationsSection from "@/components/sections/home/DestinationsSection";
import GallerySection from "@/components/sections/home/GallerySection";
import HeroSection from "@/components/sections/home/HeroSection";
import PopularToursSection from "@/components/sections/home/PopularToursSection";
import TestimonialsSection from "@/components/sections/home/TestimonialsSection";

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
