import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/header";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import "./globals.css";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";

const bebasNeue = localFont({
  src: "../../../public/fonts/BebasNeue-Regular.woff2",
  variable: "--font-bebas-neue",
  weight: "400",
});

const inter = localFont({
  src: [
    {
      path: "../../../public/fonts/Inter-VariableFont_opsz,wght.woff2",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Inter-Italic-VariableFont_opsz,wght.woff2",
      style: "italic",
    },
  ],
  variable: "--font-inter",
  weight: "100 900",
});

const satisfy = localFont({
  src: "../../../public/fonts/Satisfy-Regular.woff2",
  variable: "--font-satisfy",
  weight: "400",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

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
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
