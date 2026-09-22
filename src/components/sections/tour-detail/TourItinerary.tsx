import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { TourItinerary } from "@/types/Tour";
import { Clock } from "lucide-react";

interface Props {
  itinerary: TourItinerary[];
}
export default function TourItinerary({ itinerary }: Props) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {itinerary.map((day) => (
        <AccordionItem
          key={day.day}
          value={`day-${day.day}`}
          className="border-none py-2"
        >
          <AccordionTrigger className="font-heading group py-4 text-left hover:no-underline">
            <div className="flex items-center gap-4">
              <span className="bg-primary/20 text-primary group-hover:bg-primary flex size-10 shrink-0 items-center justify-center rounded-lg text-sm font-bold transition-colors group-hover:text-white">
                D{day.day}
              </span>
              <span className="group-hover:text-primary text-lg font-semibold text-white transition-colors sm:text-xl">
                {day.title}
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="space-y-6 pt-2 pb-6 pl-14 text-base">
            {day.description && (
              <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
                {day.description}
              </p>
            )}

            {day.activities && day.activities.length > 0 && (
              <div className="border-primary/30 space-y-5 border-l-2 pl-4 sm:pl-6">
                {day.activities.map((activity, index) => (
                  <div key={index} className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2.5">
                      {activity.time && (
                        <span className="bg-primary/15 text-primary inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-semibold tracking-wide">
                          <Clock className="size-3" />
                          {activity.time}
                        </span>
                      )}
                      <h4 className="text-base font-bold text-white sm:text-lg">
                        {activity.title}
                      </h4>
                    </div>
                    {activity.description && (
                      <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
                        {activity.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
