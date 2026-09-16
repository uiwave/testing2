import PageHero from "@/components/uiwave/PageHero";
import ToursGrid from "@/components/sections/tours/ToursGrid";
import { Heading } from "@/components/uiwave/Heading";
import { getTours, isLocale } from "@/i18n/tours";
import { notFound } from "next/navigation";
import { FilterSection } from "@/components/sections/tours/FilterSection";

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function ToursPage({ params }: Props) {
  const { locale: localeValue } = await params;

  if (!isLocale(localeValue)) {
    notFound();
  }

  const tours = await getTours(localeValue);

  return (
    <>
      <PageHero title="Nuestros Tours" image="/images/puno.webp" />
      <FilterSection />
      <ToursGrid tours={tours} />
    </>
  );
}
