import { CONTACT_INFO } from "@/data/contact";
import { Heading } from "@/components/uiwave/Heading";
import { MapPin, Phone, Clock, Mail, Send } from "lucide-react";

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
          <div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
