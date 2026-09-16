// lib/fonts.ts
import localFont from "next/font/local";

export const bebasNeue = localFont({
  src: "../../public/fonts/BebasNeue-Regular.woff2",
  variable: "--font-bebas-neue",
  weight: "400",
});

export const inter = localFont({
  src: [
    {
      path: "../../public/fonts/Inter-VariableFont_opsz,wght.woff2",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter-Italic-VariableFont_opsz,wght.woff2",
      style: "italic",
    },
  ],
  variable: "--font-inter",
  weight: "100 900",
});

export const satisfy = localFont({
  src: "../../public/fonts/Satisfy-Regular.woff2",
  variable: "--font-satisfy",
  weight: "400",
});
