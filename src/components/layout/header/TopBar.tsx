import { Clock, Headset, MapPin } from "lucide-react";

export default function TopBar({ scrolled }: { scrolled: boolean }) {
  return (
    <div
      className={`border-b border-white/10 bg-black/60 overflow-hidden transition-all duration-300 ease-in-out text-primary ${
        scrolled ? "max-h-0 py-0 opacity-0" : "max-h-16 opacity-100"
      }`}
    >
      <div className="uw-container py-2.5">
        <div className="flex items-center justify-between text-xs font-heading font-medium tracking-wider sm:text-sm">
          <div className="hidden items-center space-x-6 sm:flex">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-primary" />
              <span>Cusco, Perú</span>
            </div>
            <span className="text-white/30">|</span>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 shrink-0 text-primary" />
              <span>Lun – Dom: 8:00 – 19:00</span>
            </div>
          </div>

          <div className="flex w-full items-center justify-between space-x-6 sm:w-auto sm:justify-end">
            <div className="flex items-center gap-2">
              <Headset className="h-4 w-4 shrink-0 text-primary" />
              <span>Reservas: +51 123 456 789</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
