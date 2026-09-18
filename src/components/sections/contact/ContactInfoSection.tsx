import { CONTACT_INFO } from "@/data/contact";
import { Heading } from "@/components/uiwave/Heading";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactInfoSection() {
  return (
    <section className="w-full overflow-hidden">
      <div className="uw-container uw-section">
        <Heading
          centered
          badge="Contáctanos"
          title="Estamos aquí para ayudarte"
        />
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-16">
          <div className="bg-card border-border flex flex-col items-center rounded-2xl border p-6 text-center">
            <MapPin className="text-primary mb-4 size-6" />
            <h3 className="font-heading mb-2 text-2xl uppercase">Ubicación</h3>
            <p className="text-muted-foreground text-lg">
              {CONTACT_INFO.address}
            </p>
          </div>
          <div className="bg-card border-border flex flex-col items-center rounded-2xl border p-6 text-center">
            <Phone className="text-primary mb-4 size-6" />
            <h3 className="font-heading mb-2 text-2xl uppercase">Teléfono</h3>
            <p className="text-muted-foreground text-lg">
              {CONTACT_INFO.phone}
            </p>
          </div>
          <div className="bg-card border-border flex flex-col items-center rounded-2xl border p-6 text-center">
            <Mail className="text-primary mb-4 size-6" />
            <h3 className="font-heading mb-2 text-2xl uppercase">Correo</h3>
            <p className="text-muted-foreground text-lg">
              {CONTACT_INFO.email}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
