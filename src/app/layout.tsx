import { Footer } from "@/components/layout/Footer";
import "./globals.css";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import { Header } from "@/components/layout/header";

const bebasNeue = localFont({
  src: "../../public/fonts/BebasNeue-Regular.woff2",
  variable: "--font-bebas-neue",
  weight: "400",
});

const inter = localFont({
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

const satisfy = localFont({
  src: "../../public/fonts/Satisfy-Regular.woff2",
  variable: "--font-satisfy",
  weight: "400",
});

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html
      lang="es"
      className={cn(
        "antialiased",
        bebasNeue.variable,
        inter.variable,
        satisfy.variable,
      )}
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
