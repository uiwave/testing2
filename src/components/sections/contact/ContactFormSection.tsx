import { Send } from "lucide-react";
import { CONTACT_INFO } from "@/data/contact";
import { Heading } from "@/components/uiwave/Heading";

export default function ContactFormSection() {
  const mapQuery = encodeURIComponent(CONTACT_INFO.address);

  return (
    <section className="w-full overflow-hidden">
      <div className="uw-container uw-section">
        <Heading centered badge="Escríbenos" title="Envíanos un mensaje" />
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="bg-card border-border overflow-hidden rounded-2xl border">
            <iframe
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación en el mapa"
            />
          </div>
          <form className="bg-card border-border flex flex-col gap-5 rounded-2xl border p-6">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="font-heading text-sm tracking-wider uppercase"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Tu nombre completo"
                className="bg-background border-border focus:border-primary focus:ring-primary/20 w-full rounded-lg border px-4 py-3 text-sm text-white focus:ring-2 focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="font-heading text-sm tracking-wider uppercase"
              >
                Correo
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Tu correo electrónico"
                className="bg-background border-border focus:border-primary focus:ring-primary/20 w-full rounded-lg border px-4 py-3 text-sm text-white focus:ring-2 focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="subject"
                className="font-heading text-sm tracking-wider uppercase"
              >
                Asunto
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder="Asunto del mensaje"
                className="bg-background border-border focus:border-primary focus:ring-primary/20 w-full rounded-lg border px-4 py-3 text-sm text-white focus:ring-2 focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="font-heading text-sm tracking-wider uppercase"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Escribe tu mensaje aquí..."
                className="bg-background border-border focus:border-primary focus:ring-primary/20 w-full resize-none rounded-lg border px-4 py-3 text-sm text-white focus:ring-2 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="bg-primary text-primary-foreground font-heading mt-2 inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm tracking-wider transition-opacity hover:opacity-90"
            >
              Enviar mensaje
              <Send className="size-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
