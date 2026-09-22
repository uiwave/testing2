"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Minus, Plus, Users, Clock3, MapPin } from "lucide-react";
import type { Tour } from "@/types/Tour";

interface Props {
  tour: Tour;
}

const WHATSAPP_NUMBER = "51926086982";
const MAX_QUANTITY = 10;

export default function TourInfoSection({ tour }: Props) {
  const t = useTranslations("booking");
  const [quantity, setQuantity] = useState(1);

  const unitPrice = tour.price;
  const total = unitPrice * quantity;

  const buildWhatsAppMessage = () => {
    const lines = [
      t("whatsapp.header"),
      "",
      t("whatsapp.tour", { tour: tour.title }),
      t("whatsapp.destination", { destination: tour.destination }),
      t("whatsapp.duration", { duration: tour.duration }),
      t("whatsapp.quantity", { quantity }),
      t("whatsapp.unitPrice", { price: unitPrice }),
      t("whatsapp.total", { total }),
    ];
    return encodeURIComponent(lines.join("\n"));
  };

  const handleBook = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${buildWhatsAppMessage()}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-card border-border rounded-2xl border p-6 sm:p-8">
      <h2 className="font-heading text-2xl leading-[0.95] text-white sm:text-3xl">
        {tour.title}
      </h2>
      <div className="text-muted-foreground mt-2 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm">
        <span className="inline-flex items-center gap-1.5">
          <MapPin className="text-primary size-3.5" />
          {tour.destination}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Clock3 className="text-primary size-3.5" />
          {tour.duration}
        </span>
      </div>

      <div className="bg-background border-border mt-5 flex items-center justify-between rounded-xl border px-4 py-3.5">
        <span className="text-muted-foreground flex items-center gap-2 text-sm">
          <Users className="size-4" />
          {t("persons")}
        </span>
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label={t("decrease")}
            disabled={quantity <= 1}
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="border-border bg-card hover:border-primary focus:ring-primary/20 group text-foreground flex size-9 items-center justify-center rounded-lg border transition-colors focus:ring-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Minus className="size-4" />
          </button>
          <span className="font-heading min-w-8 text-center text-2xl leading-none text-white">
            {quantity}
          </span>
          <button
            type="button"
            aria-label={t("increase")}
            disabled={quantity >= MAX_QUANTITY}
            onClick={() => setQuantity((q) => Math.min(MAX_QUANTITY, q + 1))}
            className="border-border bg-card hover:border-primary focus:ring-primary/20 group text-foreground flex size-9 items-center justify-center rounded-lg border transition-colors focus:ring-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Plus className="size-4" />
          </button>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between text-sm">
        <span className="text-muted-foreground">{t("unitPrice")}</span>
        <span className="text-foreground font-medium">
          S/ {unitPrice} {t("perPerson")}
        </span>
      </div>

      <div className="border-border mt-5 border-t" />

      <div className="flex items-center justify-between">
        <span className="font-heading text-lg tracking-wider text-white sm:text-xl">
          {t("total")}
        </span>
        <span className="font-heading text-primary text-2xl leading-none sm:text-3xl">
          S/ {total}
        </span>
      </div>

      <button
        type="button"
        onClick={handleBook}
        className="bg-primary text-primary-foreground font-heading hover:bg-primary/90 mt-5 w-full cursor-pointer rounded-xl px-4 py-4 text-base leading-none tracking-wider transition-colors"
      >
        {t("bookNow")}
      </button>

      <p className="text-muted-foreground mt-3 text-center text-xs leading-relaxed">
        {t("whatsappHint")}
      </p>
    </div>
  );
}
