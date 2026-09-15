import { CONTACT_INFO } from "@/data/contact";
import { Heading } from "@/components/uiwave/Heading";
import { MapPin, Phone, Clock, Mail, Send } from "lucide-react";

export default function ContactInfoSection() {
  return (
    <section className="w-full overflow-hidden">
      <div className="uw-container uw-section">
        <Heading
          badge="Contáctanos"
          title="Estamos aquí para ayudarte"
          description="¿Tienes preguntas sobre nuestros tours o quieres planificar una aventura a tu medida? Escríbenos y te responderemos lo antes posible."
        />
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4 rounded-2xl bg-card border border-border p-5">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <MapPin className="size-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg tracking-wider text-white">
                    Dirección
                  </h3>
                  <p className="mt-1">{CONTACT_INFO.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-2xl bg-card border border-border p-5">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Phone className="size-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg tracking-wider text-white">
                    Teléfono
                  </h3>
                  <p className="mt-1">{CONTACT_INFO.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-2xl bg-card border border-border p-5">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Mail className="size-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg tracking-wider text-white">
                    Email
                  </h3>
                  <p className="mt-1">{CONTACT_INFO.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-2xl bg-card border border-border p-5">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Clock className="size-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg tracking-wider text-white">
                    Horario
                  </h3>
                  <p className="mt-1">{CONTACT_INFO.hours}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <form className="flex flex-col gap-5 rounded-2xl bg-card border border-border p-6 sm:p-8">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="font-heading text-sm tracking-wider text-white"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="Tu nombre"
                    className="rounded-lg bg-background border border-border px-4 py-3 text-sm text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="font-heading text-sm tracking-wider text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="Tu correo electrónico"
                    className="rounded-lg bg-background border border-border px-4 py-3 text-sm text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="phone"
                  className="font-heading text-sm tracking-wider text-white"
                >
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Tu teléfono"
                  className="rounded-lg bg-background border border-border px-4 py-3 text-sm text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="font-heading text-sm tracking-wider text-white"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="Cuéntanos sobre tu viaje ideal..."
                  className="resize-none rounded-lg bg-background border border-border px-4 py-3 text-sm text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-heading text-sm tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
              >
                Enviar mensaje
                <Send className="size-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
