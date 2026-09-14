import { NAV_ITEMS } from "@/data/navItems";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function DesktopNavigation() {
  return (
    <>
      <nav className="hidden space-x-6 xl:flex">
        {NAV_ITEMS.map((item) => (
          <div
            key={item.label}
            className="group relative flex h-20 cursor-pointer items-center gap-2 text-white transition-colors hover:text-primary"
          >
            <Link
              href={item.href}
              className="font-heading leading-[0.95] tracking-normal text-[clamp(0.938rem,0.804rem+0.335vw,1.125rem)] flex items-center gap-2"
            >
              {item.label}
            </Link>
            {item.children && (
              <ChevronDown className="h-5 w-5 transition-transform duration-200 group-hover:rotate-180" />
            )}

            {item.children && (
              <div className="absolute left-0 top-20 z-50 hidden w-64 flex-col overflow-hidden bg-white shadow-xl group-hover:flex">
                {item.children.map((child) => (
                  <Link
                    key={child.label}
                    href={child.href}
                    className="px-5 py-3.5 text-[clamp(0.9375rem,calc(0.85rem+0.35vw),1.125rem)] font-heading leading-6.5 text-black tracking-wider transition-colors hover:bg-primary hover:text-white"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </>
  );
}
