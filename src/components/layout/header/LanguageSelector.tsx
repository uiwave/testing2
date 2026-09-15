import { LANGUAGE_OPTIONS } from "@/data/language";
import { ChevronDown } from "lucide-react";

const LANG_NAMES: Record<string, string> = {
  es: "Español",
  en: "English",
  pt: "Português",
};

const DEFAULT_LOCALE = "es";

export default function LanguageSelector({
  langOpen,
  setLangOpen,
  onSwitchLocale,
}: {
  langOpen: boolean;
  setLangOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSwitchLocale: (code: string) => void;
}) {
  const locale = DEFAULT_LOCALE;
  const currentLang = LANGUAGE_OPTIONS.find((l) => l.code === locale);

  return (
    <div
      className="relative flex h-20 items-center"
      onMouseLeave={() => setLangOpen(false)}
    >
      <button
        onClick={() => setLangOpen((v) => !v)}
        className="bg-primary font-heading text-primary-foreground inline-flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-lg px-3 text-sm tracking-wider transition-all hover:opacity-90 sm:h-11 sm:gap-2 sm:px-5 sm:text-[clamp(0.9375rem,calc(0.85rem+0.35vw),1.125rem)]"
      >
        <span className="text-base sm:text-lg">{currentLang?.flag}</span>
        <span className="pt-0.5">{locale.toUpperCase()}</span>
        <ChevronDown
          className={`h-3.5 w-3.5 shrink-0 transition-transform duration-200 sm:h-4 sm:w-4 ${
            langOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {langOpen && (
        <div className="border-primary absolute top-20 right-0 z-50 flex w-44 flex-col overflow-hidden border-t-2 bg-white shadow-xl sm:w-48">
          {LANGUAGE_OPTIONS.map((lang) => (
            <button
              key={lang.code}
              onClick={() => onSwitchLocale(lang.code)}
              className={`font-heading flex items-center justify-between px-4 py-3 tracking-wider transition-colors sm:px-5 sm:py-3.5 ${
                lang.code === locale
                  ? "bg-primary text-white"
                  : "hover:bg-primary/10 hover:text-primary text-black"
              }`}
            >
              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="text-sm sm:text-base">{lang.flag}</span>
                <span className="text-xs sm:text-[clamp(0.875rem,calc(0.8rem+0.25vw),1rem)]">
                  {lang.codeUpper}
                </span>
              </div>
              <span className="text-[10px] font-normal opacity-75 sm:text-xs">
                {LANG_NAMES[lang.code]}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
