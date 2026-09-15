import PageHero from "@/components/uiwave/PageHero";
import ContactInfoSection from "@/components/sections/contact/ContactInfoSection";

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contacto"
        image="/images/Tour-a-Machu-Picchu-03.webp"
        breadcrumbs={[{ label: "Contacto", href: "/contacto" }]}
      />
      <ContactInfoSection />
    </>
  );
}
