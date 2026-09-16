"use client";

import { cn } from "cn";
import { Menu } from "lucide-react";
import Link from "next/link";
import TopBar from "./TopBar";
import { useEffect, useState } from "react";
import DesktopNavigation from "./DesktopNavigation";
import LanguageSelector from "./LanguageSelector";
import MobileDrawer from "./MobileDrawer";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 right-0 left-0 z-50 border-b border-white/10 transition-all duration-300",
          scrolled ? "bg-background shadow-lg" : "bg-black/20 backdrop-blur-md",
        )}
      >
        <TopBar scrolled={scrolled} />

        <div className="uw-container">
          <div className="grid h-20 w-full grid-cols-3 items-center">
            <div className="flex items-center justify-start">
              <button
                onClick={() => setDrawerOpen(true)}
                className="text-primary inline-flex h-11 cursor-pointer items-center justify-center transition-colors hover:text-white xl:hidden"
              >
                <Menu className="h-7 w-7 shrink-0" />
              </button>
              <DesktopNavigation />
            </div>
            <div className="flex items-center justify-center">
              <Link href="#">
                <img
                  src="/logo-white.webp"
                  alt=""
                  className="h-10 w-auto object-contain transition-all sm:h-12 xl:h-14"
                />
              </Link>
            </div>
            <div className="flex items-center justify-end">
              <LanguageSelector />
            </div>
          </div>
        </div>
      </header>

      <MobileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
