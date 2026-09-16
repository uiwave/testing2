import { notFound } from "next/navigation";
import { TOURS, getTourBySlug } from "@/data/tours";
import PageHero from "@/components/uiwave/PageHero";
import TourInfoSection from "@/components/sections/tour-detail/TourInfoSection";
import TourGallerySection from "@/components/sections/tour-detail/TourGallerySection";
import TourItinerarySection from "@/components/sections/tour-detail/TourItinerarySection";
import TourIncludesSection from "@/components/sections/tour-detail/TourIncludesSection";
import TourCTASection from "@/components/sections/tour-detail/TourCTASection";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return TOURS.map((tour) => ({ slug: tour.slug }));
}

export default async function TourDetailPage({ params }: Props) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);

  if (!tour) {
    notFound();
  }

  return (
    <>
      <PageHero
        title={tour.title}
        image={tour.image}
      />
      <TourInfoSection tour={tour} />
      <TourGallerySection tour={tour} />
      <TourItinerarySection tour={tour} />
      <TourIncludesSection tour={tour} />
      <TourCTASection tour={tour} />
    </>
  );
}
