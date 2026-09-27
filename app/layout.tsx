import type { Metadata, Viewport } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { CallBar } from "@/components/call-bar";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { getSiteUrl, site } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Friseur6 Bergkamen — Einrichtung, Reparatur und Polstern",
    template: "%s | Friseur6",
  },
  description:
    "Alla Baraniak, Friseur6 in Bergkamen: neue und gebrauchte Friseureinrichtung, Reparatur von Waschsesseln und Stuhlpumpen, Polstern. Sieben Tage erreichbar.",
  applicationName: site.name,
  authors: [{ name: site.owner }],
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: site.name,
    title: "Friseur6 Bergkamen — Einrichtung, Reparatur und Polstern",
    description:
      "Neue und gebrauchte Friseureinrichtung aus Bergkamen. Reparatur, Polstern und Lieferung in Deutschland. Inhaberin Alla Baraniak.",
    url: siteUrl,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f4efe4",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${fraunces.variable} ${outfit.variable}`}>
      <body className="antialiased">
        <a
          href="#inhalt"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-foam focus:px-3 focus:py-2"
        >
          Zum Inhalt
        </a>
        <Header />
        {children}
        <Footer />
        <CallBar />
      </body>
    </html>
  );
}
