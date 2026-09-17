import { Tour } from "@/types/Tour";
import { Clock, Signal, MapPin, DollarSign } from "lucide-react";

interface Props {
  tour: Tour;
}

export default function TourInfoSection({ tour }: Props) {
  return (
    // <section className="w-full overflow-hidden">
    //   <div >
    //     <div >
    //       <div className="bg-card border-border flex flex-col gap-4 rounded-2xl border p-6">
    //         <h3 className="font-heading text-xl tracking-wider text-white">
    //           Resumen del tour
    //         </h3>
    //         <div className="border-border flex items-center gap-3 border-b pb-4">
    //           <DollarSign className="text-primary size-5 shrink-0" />
    //           <div>
    //             <span className="text-muted-foreground text-xs">Precio</span>
    //             <p className="font-heading text-2xl text-white">
    //               ${tour.price} <span className="text-sm">Persona</span>
    //             </p>
    //           </div>
    //         </div>
    //         <div className="border-border flex items-center gap-3 border-b pb-4">
    //           <Clock className="text-primary size-5 shrink-0" />
    //           <div>
    //             <span className="text-muted-foreground text-xs">Duración</span>
    //             <p className="font-heading text-lg text-white">
    //               {tour.duration}
    //             </p>
    //           </div>
    //         </div>
    //         <div className="border-border flex items-center gap-3 border-b pb-4">
    //           <Signal className="text-primary size-5 shrink-0" />
    //           <div>
    //             <span className="text-muted-foreground text-xs">
    //               Dificultad
    //             </span>
    //             <p className="font-heading text-lg text-white">
    //               {tour.difficulty}
    //             </p>
    //           </div>
    //         </div>
    //         <div className="flex items-center gap-3">
    //           <MapPin className="text-primary size-5 shrink-0" />
    //           <div>
    //             <span className="text-muted-foreground text-xs">Destino</span>
    //             <p className="font-heading text-lg text-white">
    //               {tour.destination}
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <div className="bg-card border-border w-full rounded-2xl border p-6 text-white sm:p-8">
      <h2 className="font-heading mb-6 text-xl tracking-wider text-white">
        TOUR BOOKING
      </h2>
      <form className="space-y-6">
        <div className="border-border flex items-center justify-between border-b pb-6">
          <label
            htmlFor="from-date"
            className="font-heading text-base tracking-wider text-white"
          >
            From Date:
          </label>
          <input
            id="from-date"
            type="date"
            className="border-border rounded-sm border px-3 py-3 text-sm text-white"
          />
        </div>

        <div className="border-border flex items-center justify-between border-b pb-6">
          <span className="font-heading text-base tracking-wider text-white">
            Time:
          </span>
          <div className="flex items-center gap-6">
            <label className="flex cursor-pointer items-center gap-2 text-sm">
              <input
                type="radio"
                name="tour-time"
                value="12:00"
                className="border-border h-4 w-4 cursor-pointer appearance-none rounded-none border"
              />
              <span className="text-white">12:00</span>
            </label>
            <label className="flex cursor-pointer items-center gap-2 text-sm">
              <input
                type="radio"
                name="tour-time"
                value="10:00"
                className="border-border h-4 w-4 cursor-pointer appearance-none rounded-none border"
              />
              <span className="text-white">10:00</span>
            </label>
          </div>
        </div>

        <div className="border-border border-b pb-6">
          <label
            htmlFor="tickets-select"
            className="font-heading mb-2 block text-base tracking-wider text-white"
          >
            Tickets
          </label>
          <select
            id="tickets-select"
            className="bg-card border-border focus:ring-primary/20 w-full rounded-lg border px-4 py-2.5 text-sm text-white focus:ring-2 focus:outline-none"
          >
            <option value="" disabled>
              Select Quantity
            </option>
            <option value="1">1 Ticket</option>
            <option value="2">2 Tickets</option>
            <option value="3">3 Tickets</option>
            <option value="4">4 Tickets</option>
          </select>
        </div>

        <div className="border-border border-b pb-6">
          <span className="font-heading mb-3 block text-base tracking-wider">
            Add Extra:
          </span>
          <div className="space-y-3">
            <label className="flex cursor-pointer items-center justify-between text-sm">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="border-border text-primary h-4 w-4 rounded focus:ring-0"
                />
                <span className="text-white">Add service per booking</span>
              </div>
              <span className="font-medium text-white">$45</span>
            </label>

            <label className="flex cursor-pointer items-center justify-between text-sm">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="border-border text-primary h-4 w-4 rounded focus:ring-0"
                />
                <span className="text-white">Add service per personal</span>
              </div>
              <span className="font-medium text-white">$35</span>
            </label>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <span className="font-heading text-xl tracking-wider text-white">
            Total:
          </span>
          <span className="font-heading text-2xl text-white">150</span>
        </div>

        <button
          type="submit"
          className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading w-full rounded-xl px-4 py-3.5 text-sm tracking-wider transition duration-200"
        >
          Book Now
        </button>

        <div className="pt-2 text-center">
          <a
            href="#help"
            className="text-muted-foreground hover:text-foreground text-xs underline-offset-2 transition duration-150 hover:underline"
          >
            Need Some Help?
          </a>
        </div>
      </form>
    </div>
  );
}
