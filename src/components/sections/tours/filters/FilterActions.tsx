import { Search } from "lucide-react";
import { useTranslations } from "next-intl";

interface FilterActionsProps {
  onApply: () => void;
  onClear: () => void;
}

export function FilterActions({ onApply, onClear }: FilterActionsProps) {
  const t = useTranslations("tours.filter.buttons");
  return (
    <div className="flex gap-2 px-5 py-4">
      <button
        onClick={onClear}
        className="border-border text-primary font-heading inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-xl border px-7 py-3 text-sm tracking-[2px] whitespace-nowrap uppercase transition-opacity hover:opacity-90"
      >
        {t("clear")}
      </button>
      <button
        onClick={onApply}
        className="bg-primary text-primary-foreground font-heading inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-xl px-7 py-3 text-sm tracking-[2px] whitespace-nowrap uppercase transition-opacity hover:opacity-90"
      >
        <Search className="size-4" />
        {t("search")}
      </button>
    </div>
  );
}
