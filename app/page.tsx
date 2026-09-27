import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { Stitch } from "@/components/mark";
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
    images: [{ url: "/fotos/lager-4.jpg", alt: "Friseureinrichtung aus dem Angebot von Friseur6 in Bergkamen" }],
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
    image: `${siteUrl}/fotos/lager-4.jpg`,
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

      <section className="mx-auto grid max-w-5xl items-start gap-10 px-5 pb-16 pt-10 sm:pb-24 sm:pt-16 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-6">
          <p className="text-sm font-medium tracking-wide text-cognac">Friseur6 · Bergkamen, Kreis Unna</p>
          <h1 className="mt-4 font-serif text-[2.35rem] leading-[1.05] font-medium tracking-tight text-ink sm:text-5xl">
            Ich verkaufe Friseureinrichtung — und repariere sie auch.
          </h1>
          <p className="mt-6 font-serif text-xl leading-snug text-ink sm:text-2xl">
            Sieben Tage erreichbar. Täglich Reparatur. Seit 15 Jahren die Technik dazu.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            Ich bin Alla Baraniak. In Bergkamen liegen Stühle, Waschsessel, Waschanlagen, Climazon und Trockenhauben
            auf 500 Quadratmetern. Ich verkaufe nicht nur: Waschsessel, Climazon und Friseurstuhlpumpen repariere ich
            täglich selbst.
          </p>
          <div className="mt-8 flex flex-col items-start gap-4">
            <a
              href={`tel:${site.phoneTel}`}
              className="inline-flex bg-cognac px-5 py-3 text-base font-medium text-foam hover:bg-cognac-deep"
            >
              Anrufen
            </a>
            <Link href="/#kontakt" className="text-base text-ink underline decoration-cognac underline-offset-4">
              Anfrage schreiben
            </Link>
          </div>
        </div>
        <Photo
          className="lg:col-span-6"
          src="/fotos/lager-4.jpg"
          alt="Friseureinrichtung aus dem Angebot von Friseur6 in Bergkamen"
          width={800}
          height={600}
          priority
          frame
          caption="Aus dem Angebot in Bergkamen."
        />
      </section>

      <section id="reparatur" className="border-t border-line">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:py-24">
          <Stitch />
          <h2 className="mt-5 max-w-3xl font-serif text-3xl leading-tight font-medium tracking-tight sm:text-4xl">
            Was im Salonalltag nachgibt
          </h2>
          <div className="mt-10 grid items-start gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="text-lg leading-relaxed text-ink-soft">
                Die Stuhlpumpe sackt ab, der Waschsessel ist defekt, das Polster ist eingerissen. Das sind die Anrufe,
                die bei mir ankommen. Ich repariere täglich Waschsessel, Climazon und Friseurstuhlpumpen — in
                Bergkamen, nicht irgendwann aus einem Katalog.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                Sie rufen an oder schreiben, welches Gerät ausfällt. Ich schaue, was der Salon braucht, und sage Ihnen,
                ob Reparatur, Austausch oder ein Stück aus dem Lager der kürzere Weg ist.
              </p>
              <Photo
                className="mt-8 max-w-sm"
                src="/fotos/climazon.jpg"
                alt="Climazon aus dem Angebot von Friseur6"
                width={600}
                height={800}
                caption="Climazon aus dem Lager."
              />
            </div>
            <Photo
              className="lg:col-span-6"
              src="/fotos/waschsessel.jpg"
              alt="Waschsessel aus dem Angebot von Friseur6 in Bergkamen"
              width={600}
              height={800}
              caption="Waschsessel aus dem Lager in Bergkamen."
            />
          </div>

          <div className="mt-16 grid items-start gap-10 lg:grid-cols-12">
            <Photo
              className="lg:col-span-5"
              src="/fotos/damenstuhl.jpg"
              alt="Friseurstuhl aus dem Angebot von Friseur6, neu zu beziehen"
              width={600}
              height={800}
              caption="Friseurstuhl aus dem Bestand, auf Wunsch neu bezogen."
            />
            <div className="lg:col-span-7">
              <h3 className="font-serif text-2xl font-medium tracking-tight sm:text-3xl">Polstern</h3>
              <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                Schluss mit dem einen Einheitsbezug. Sie wählen Kunstleder in Farbe und Form. Ich beziehe Ihre eigenen
                Friseurmöbel neu und auch die Stühle, die Sie bei mir finden. Dafür erstelle ich ein kostenloses
                Angebot.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                Günstiges Polstern von Friseurmöbeln gehört zu meiner Arbeit, nicht als Beilage zum Verkauf.
              </p>
              <Link
                href="/#kontakt"
                className="mt-6 inline-block text-base text-ink underline decoration-cognac underline-offset-4"
              >
                Angebot fürs Neubeziehen anfragen
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="verkauf" className="border-t border-line bg-foam">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:py-24">
          <Stitch />
          <h2 className="mt-5 max-w-3xl font-serif text-3xl leading-tight font-medium tracking-tight sm:text-4xl">
            Neu und gebraucht, aus Bergkamen
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-soft">
            Auf 500 Quadratmetern liegt eine Auswahl von hunderten Artikeln, und das Angebot wechselt. Damen- und
            Herrenstühle, Waschsessel und Waschanlagen, Climazon, Trockenhauben, Hairmaster, Standsäulen,
            Parallelogramme, Vorwärtswaschbecken, Rollhocker, Friseurboys, Bedienhocker und Bedienplätze. Neu und
            gebraucht. Marken, mit denen ich arbeite: Welonda, Olymp und Takara Belmont.
          </p>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink-soft">
            Ich beziehe Ware bundesweit und bereite hochwertige gebrauchte Friseurmöbel auf. Eigene Stühle entwerfe ich
            dazu, auf Haltbarkeit, Komfort und eine bequeme Arbeitsweise hin.
          </p>

          <div className="mt-12 grid items-start gap-10 lg:grid-cols-12">
            <Photo
              className="lg:col-span-7"
              src="/fotos/big-boss.jpg"
              alt="Herrenstuhl Big Boss, eigenes Modell von Friseur6"
              width={800}
              height={600}
              caption="Herrenstuhl Big Boss, eigenes Modell."
            />
            <div className="lg:col-span-5">
              <p className="text-lg leading-relaxed text-ink-soft">
                Den Herrenstuhl Big Boss baue ich nicht in Masse. Sie wählen das Kunstleder und entscheiden, ob die
                Pumpe mechanisch oder elektrisch arbeitet. Wenn Sie nach Bergkamen kommen, stellen wir das Stück mit
                Ihnen zusammen.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                Für den Wartebereich habe ich Wartestühle mit Stahlfederkern, ohne Schaumstoff, Armlehnen aus Hartholz,
                aus europäischer Fertigung.
              </p>
            </div>
          </div>

          <Photo
            className="mt-10 max-w-xl"
            src="/fotos/wartestuhl.jpg"
            alt="Wartestuhl mit Federkern aus dem Angebot von Friseur6"
            width={800}
            height={600}
            caption="Wartestuhl mit Federkern."
          />

          <h3 className="mt-16 font-serif text-2xl font-medium tracking-tight sm:text-3xl">
            Neueröffnung und Inzahlungnahme
          </h3>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink-soft">
            Sie eröffnen einen Salon und das Budget ist knapp? Ich nehme mir Zeit und schaue mit Ihnen, welche Möbel
            passen und worauf es beim Kauf ankommt.
          </p>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink-soft">
            Können Sie Ihre alte Einrichtung nicht mehr sehen? Wenn Sie bei mir kaufen, nehme ich sie in Zahlung.
          </p>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink-soft">
            Anzahl und Preise sind jeweils zu erfragen. Die Rechnung stelle ich mit ausgewiesener Mehrwertsteuer aus.
            Gebrauchte Möbel lassen sich, wenn Sie das möchten, innerhalb von 24 Monaten abschreiben. Neue Ware muss
            mindestens zehn Jahre abgeschrieben werden.
          </p>
          <Link
            href="/#kontakt"
            className="mt-6 inline-block text-base text-ink underline decoration-cognac underline-offset-4"
          >
            Nach Bestand und Preis fragen
          </Link>
        </div>
      </section>

      <section id="lieferung" className="border-t border-line">
        <div className="mx-auto grid max-w-5xl items-start gap-10 px-5 py-16 sm:py-24 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Stitch />
            <h2 className="mt-5 font-serif text-3xl leading-tight font-medium tracking-tight sm:text-4xl">
              Lieferung und das Lager
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              Ab 1.000 € netto liefere ich kostenlos nach ganz Deutschland.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              So läuft die Arbeit: Sie rufen an oder schreiben eine Mail. Ich höre zu, was der Salon braucht — Pumpe,
              Waschsessel, neue Bezüge oder die Einrichtung für die Eröffnung. Dann schaue ich im Lager in Bergkamen,
              was dazu passt. Danach klären wir die Lieferung oder einen Termin vor Ort.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              Das Lager hat 500 Quadratmeter. Kein Besuch ist wie der vorige, weil das Angebot wechselt.
            </p>
          </div>
          <Photo
            className="lg:col-span-6"
            src="/fotos/lager-2.jpg"
            alt="Weitere Friseureinrichtung aus dem Lager von Friseur6 in Bergkamen"
            width={800}
            height={600}
            caption="Einrichtung aus dem Lager in Bergkamen."
          />
        </div>
      </section>

      <section id="kontakt" className="border-t border-line bg-foam">
        <div className="mx-auto grid max-w-5xl gap-12 px-5 py-16 sm:py-24 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Stitch />
            <h2 className="mt-5 font-serif text-3xl leading-tight font-medium tracking-tight sm:text-4xl">
              Direkt zu mir
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              Sieben Tage die Woche erreichbar. Anrufen oder eine Mail, das reicht.
            </p>
            <address className="mt-8 space-y-2 text-lg not-italic leading-relaxed text-ink">
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
