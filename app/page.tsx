import type { Metadata } from "next";
import { ChairCutaway } from "@/components/chair-cutaway";
import { ContactForm } from "@/components/contact-form";
import { Photo } from "@/components/photo";
import { getSiteUrl, site } from "@/lib/site";

const title = "Friseur6 Bergkamen — Einrichtung, Reparatur und Polstern";
const description =
  "Alla Baraniak in Bergkamen: Friseurstühle, Waschsessel, Climazon und Trockenhauben, neu und gebraucht. Tägliche Reparatur, Polstern, Inzahlungnahme, Lieferung ab 1.000 € netto.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    images: [{ url: "/fotos/waschsessel.jpg", alt: "Waschsessel aus dem Angebot von Friseur6 in Bergkamen" }],
  },
};

export default function HomePage() {
  const siteUrl = getSiteUrl();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    description,
    url: siteUrl,
    image: `${siteUrl}/fotos/waschsessel.jpg`,
    telephone: site.phoneTel,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.street,
      addressLocality: site.city,
      postalCode: site.postalCode,
      addressRegion: site.region,
      addressCountry: "DE",
    },
    areaServed: "DE",
    founder: {
      "@type": "Person",
      name: site.owner,
    },
  };

  return (
    <main id="inhalt">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="mx-auto grid max-w-6xl items-end gap-10 px-5 pt-12 pb-16 sm:px-8 sm:pt-20 sm:pb-24 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <p className="text-[11px] tracking-[0.16em] text-ink-soft uppercase">Friseur6 · Bergkamen</p>
          <h1 className="mt-5 max-w-xl text-5xl leading-[0.92] font-semibold tracking-[-0.045em] sm:text-7xl">
            Ich repariere Friseureinrichtung.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-snug text-ink-soft">
            Alla Baraniak, Bergkamen. Seit 15 Jahren in der Branche. Sieben Tage erreichbar. Täglich Waschsessel,
            Climazon und Stuhlpumpen.
          </p>
          <a
            href={`tel:${site.phoneTel}`}
            className="mt-8 inline-flex bg-cognac px-5 py-3 text-sm font-medium text-white hover:bg-cognac-deep"
          >
            Anrufen
          </a>
        </div>
        <Photo
          className="lg:col-span-6"
          src="/fotos/waschsessel.jpg"
          alt="Waschsessel aus dem Angebot von Friseur6 in Bergkamen"
          priority
          caption="Waschsessel aus dem Lager."
        />
      </section>

      <section id="reparatur" className="border-t border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <ChairCutaway />
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <h2 className="text-3xl leading-none font-semibold tracking-[-0.04em] sm:text-5xl">Reparatur und Polstern</h2>
            <p className="mt-6 text-base leading-relaxed text-ink-soft">
              Die Stuhlpumpe sackt ab, der Waschsessel ist defekt, das Polster ist eingerissen. Ich repariere täglich
              Waschsessel, Climazon und Friseurstuhlpumpen.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              Polstern in Kunstleder, Farbe und Form nach Wunsch, für Ihre Möbel und für Stücke aus dem Lager. Das
              Angebot ist kostenlos.
            </p>
          </div>
        </div>
      </section>

      <section id="verkauf" className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <h2 className="max-w-3xl text-3xl leading-none font-semibold tracking-[-0.04em] sm:text-5xl">
            Verkauf und Lieferung
          </h2>
          <div className="mt-12 grid gap-10 lg:grid-cols-3 lg:gap-16">
            <div>
              <h3 className="text-sm font-medium tracking-[0.12em] uppercase">Bestand</h3>
              <p className="mt-3 text-base leading-relaxed text-ink-soft">
                500 qm in Bergkamen, neu und gebraucht. Welonda, Olymp, Takara Belmont. Stühle, Waschsessel,
                Waschanlagen, Climazon, Trockenhauben, Hairmaster, Standsäulen, Parallelogramme, Vorwärtswaschbecken,
                Rollhocker, Friseurboys, Bedienplätze. Das Angebot wechselt. Anzahl und Preise auf Anfrage.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium tracking-[0.12em] uppercase">Modelle</h3>
              <p className="mt-3 text-base leading-relaxed text-ink-soft">
                Den Herrenstuhl Big Boss stellen wir in Bergkamen zusammen: Kunstleder, Pumpe mechanisch oder
                elektrisch. Wartestühle mit Stahlfederkern, ohne Schaumstoff, Armlehnen aus Hartholz. Ware beziehe ich
                bundesweit und bereite gebrauchte Möbel auf.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium tracking-[0.12em] uppercase">Lieferung</h3>
              <p className="mt-3 text-base leading-relaxed text-ink-soft">
                Ab 1.000 € netto kostenlos in ganz Deutschland. Sie rufen an oder schreiben. Ich schaue, was der Salon
                braucht, dann Lieferung oder ein Termin vor Ort.
              </p>
            </div>
          </div>
          <p className="mt-10 max-w-3xl text-base leading-relaxed text-ink-soft">
            Beim Kauf nehme ich alte Einrichtung in Zahlung. Für eine Neueröffnung mit knappem Budget schaue ich,
            welche Möbel passen. Rechnung mit ausgewiesener Mehrwertsteuer. Gebrauchte Möbel auf Wunsch innerhalb von
            24 Monaten abschreiben, neue Ware mindestens zehn Jahre.
          </p>
          <Photo
            className="mt-14"
            src="/fotos/lager-4.jpg"
            alt="Friseureinrichtung aus dem Angebot von Friseur6 in Bergkamen"
            aspect="wide"
            caption="Aus dem Lager in Bergkamen."
          />
        </div>
      </section>

      <section id="kontakt" className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-3xl leading-none font-semibold tracking-[-0.04em] sm:text-5xl">Kontakt</h2>
            <p className="mt-6 text-base leading-relaxed text-ink-soft">Sieben Tage die Woche erreichbar.</p>
            <address className="mt-8 space-y-2 text-base not-italic leading-relaxed">
              <p>
                {site.name}
                <br />
                {site.owner}
                <br />
                {site.street}
                <br />
                {site.postalCode} {site.city}
              </p>
              <p>
                <a href={`tel:${site.phoneTel}`} className="underline decoration-line underline-offset-4">
                  {site.phoneDisplay}
                </a>
              </p>
              <p>
                <a href={`tel:${site.mobileTel}`} className="underline decoration-line underline-offset-4">
                  {site.mobileDisplay}
                </a>
              </p>
              <p>
                <a href={`mailto:${site.email}`} className="underline decoration-line underline-offset-4">
                  {site.email}
                </a>
              </p>
            </address>
          </div>
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
