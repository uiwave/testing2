import PageHero from "@/components/uiwave/PageHero";
import MissionSection from "@/components/sections/about/MissionSection";
import TeamSection from "@/components/sections/about/TeamSection";

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Sobre Nosotros"
        image="/images/Tour-Huacachina-Buggy-Sandboarding-02.webp"
        breadcrumbs={[
          { label: "Nosotros", href: "/sobre-nosotros" },
        ]}
      />
      <MissionSection />
      <TeamSection />
    </>
  );
}
