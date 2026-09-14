import React from "react";

export default function MobileDrawer() {
  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-50 bg-black/70 transition-opacity duration-300 xl:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        className={`fixed bottom-0 left-0 top-0 z-50 flex w-[85%] max-w-sm flex-col justify-between border-r border-white/10 bg-black transition-transform duration-300 ease-in-out xl:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          <div className="flex items-center justify-between border-b border-white/10 p-6">
            <span className="font-heading text-lg font-semibold text-white tracking-wider">
              {tCommon("menu")}
            </span>
            <button
              onClick={onClose}
              className="cursor-pointer text-white/70 transition-colors hover:text-primary"
              aria-label={tCommon("close_menu")}
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-col space-y-4 p-6">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.labelKey}
                className="border-b border-white/10 pb-4"
              >
                {item.children ? (
                  <div>
                    <button
                      onClick={() => setAccordionOpen((v) => !v)}
                      className="flex w-full cursor-pointer items-center justify-between font-heading text-base text-white tracking-wider transition-colors hover:text-primary"
                    >
                      <span>{t(item.labelKey)}</span>
                      <ChevronDown
                        className={`h-5 w-5 transition-transform duration-200 ${
                          accordionOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`mt-3 flex-col space-y-3 pl-4 ${
                        accordionOpen ? "flex" : "hidden"
                      }`}
                    >
                      {item.children.map((child) => (
                        <a
                          key={child.labelKey}
                          href={`/${locale}${child.href}`}
                          className="block font-heading text-sm text-white/70 tracking-wider transition-colors hover:text-primary"
                        >
                          {t(child.labelKey)}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    href={`/${locale}${item.href}`}
                    className="block font-heading text-base text-white tracking-wider transition-colors hover:text-primary"
                  >
                    {t(item.labelKey)}
                  </a>
                )}
              </div>
            ))}
          </nav>
        </div>

        <div className="space-y-3 border-t border-white/10 bg-black/40 p-6 font-heading text-xs text-white tracking-wider sm:text-sm">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 shrink-0 text-primary" />
            <span>{tCommon("location")}</span>
          </div>
          <div className="flex items-center gap-2">
            <Headset className="h-4 w-4 shrink-0 text-primary" />
            <span className="font-semibold">
              {tTopbar("reservations")} {tCommon("phone")}
            </span>
          </div>
        </div>
      </aside>
    </>
  );
}
