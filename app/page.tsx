import type { Metadata } from "next";
import Image from "next/image";
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

      <section className="mx-auto grid max-w-6xl items-center gap-y-6 px-5 pt-10 pb-8 sm:px-8 sm:pt-16 sm:pb-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-x-8 lg:gap-y-8">
        <div className="relative z-10 min-w-0 lg:col-start-1 lg:row-start-1">
          <p className="text-[11px] tracking-[0.16em] text-ink-soft uppercase">Friseur6 · Bergkamen</p>
          <h1 className="mt-5 text-[2.5rem] leading-[0.92] font-semibold tracking-[-0.045em] sm:text-6xl lg:text-[4rem] xl:text-7xl">
            Ich repariere
            <br />
            <span className="whitespace-nowrap">Friseureinrichtung.</span>
          </h1>
        </div>
        <div className="relative z-0 min-w-0 overflow-hidden lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <Image
            src="/hero-illustration.png"
            alt="Illustration: Waschsessel und Friseurstuhl"
            width={1280}
            height={720}
            preload
            quality={95}
            sizes="(min-width: 1280px) 42vw, (min-width: 1024px) 40vw, 100vw"
            className="block h-auto w-full"
          />
        </div>
        <div className="relative z-10 min-w-0 lg:col-start-1 lg:row-start-2">
          <p className="max-w-md text-lg leading-snug text-ink-soft">
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
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <blockquote className="max-w-4xl border-l-2 border-cognac pl-6 text-3xl leading-[1.15] font-medium tracking-[-0.04em] sm:text-5xl">
            Was mich unterscheidet? Ganz einfach: Nachhaltigkeit.
          </blockquote>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-ink-soft">
            Anstatt Ware zu vertreiben, die tausende Kilometer weit weg, unter unmenschlichen Bedingungen gefertigt
            wird, beziehe ich meine Ware bundesweit. Mein Beitrag zum Umweltschutz ist die qualitative Aufbereitung von
            hochwertigen und gebrauchten Friseurmöbeln. Von Welonda, Olymp bis hin zu Takara Belmont.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink">
            Machen Sie einen Termin, rufen Sie mich an, schreiben Sie, wenn auch Sie es leid sind, auf Qualität zu
            verzichten.
          </p>
        </div>
      </section>

      <section id="reparatur" className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <h2 className="text-3xl leading-none font-semibold tracking-[-0.04em] sm:text-5xl">Reparatur und Polstern</h2>
          <p className="mt-8 max-w-xl text-2xl leading-snug font-medium tracking-[-0.03em]">
            Ich biete einen Reparaturservice an.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
            Die Stuhlpumpe sackt ab, der Waschsessel ist defekt, das Polster ist eingerissen. Ich repariere täglich
            Waschsessel, Climazon und Friseurstuhlpumpen.
          </p>
          <p className="mt-10 max-w-xl text-2xl leading-snug font-medium tracking-[-0.03em]">
            Schluss mit schnöden Einheitsbezügen.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
            Sie erhalten eine vielseitige Auswahl an Kunstlederfarben und Formen. Ich lasse sowohl Ihre Friseurmöbel
            als auch jene, die Sie bei mir finden, nach Ihrem Wunsch neu beziehen. Günstiges Polstern von
            Friseurmöbeln ist einmalig in Deutschland. Dafür erstelle ich ein kostenloses Angebot.
          </p>
          <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-12 sm:gap-4">
            <Photo
              className="col-span-2 sm:col-span-7"
              src="/fotos/lager-4.jpg"
              alt="Friseureinrichtung aus dem Lager von Friseur6 in Bergkamen"
              aspect="wide"
              caption="Lager, 500 qm."
            />
            <Photo
              className="col-span-1 sm:col-span-5"
              src="/fotos/damenstuhl.jpg"
              alt="Damenstuhl aus dem Angebot von Friseur6"
              aspect="wide"
              caption="Damenstuhl."
            />
            <Photo
              className="col-span-1 sm:col-span-4"
              src="/fotos/herrenstuhl.jpg"
              alt="Herrenstuhl aus dem Angebot von Friseur6"
              aspect="wide"
              caption="Herrenstuhl."
            />
            <Photo
              className="col-span-1 sm:col-span-4"
              src="/fotos/waschsessel.jpg"
              alt="Waschsessel aus dem Angebot von Friseur6 in Bergkamen"
              aspect="wide"
              caption="Waschsessel aus dem Lager."
            />
            <Photo
              className="col-span-2 sm:col-span-4"
              src="/fotos/waschsessel-2.jpg"
              alt="Weiterer Waschsessel aus dem Angebot von Friseur6"
              aspect="wide"
              caption="Waschsessel."
            />
            <Photo
              className="col-span-1 sm:col-span-4"
              src="/fotos/climazon.jpg"
              alt="Climazon aus dem Angebot von Friseur6"
              aspect="wide"
              caption="Climazon."
            />
            <Photo
              className="col-span-1 sm:col-span-4"
              src="/fotos/trockenhaube.jpg"
              alt="Trockenhaube aus dem Angebot von Friseur6"
              aspect="wide"
              caption="Trockenhaube."
            />
            <Photo
              className="col-span-2 sm:col-span-4"
              src="/fotos/bedienplatz.jpg"
              alt="Bedienplatz aus dem Angebot von Friseur6"
              aspect="wide"
              caption="Bedienplatz."
            />
          </div>
        </div>
      </section>

      <section id="verkauf" className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <h2 className="max-w-3xl text-3xl leading-none font-semibold tracking-[-0.04em] sm:text-5xl">
            Hunderte Artikel, kein Besuch wie der erste.
          </h2>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-ink-soft">
            Auf 500 qm finden Sie qualitativ hochwertige Damenstühle, Herrenstühle, Elektrogeräte (Climazon,
            Trockenhauben, Hairmaster), Waschsessel, Standwaschsäulen, Parallelogramme, Bedienhocker, Bedienplätze und
            mehr. Das Angebot wechselt ständig. Anzahl und Preise sind jeweils zu erfragen.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
            Da ich mein Konzept stetig weiterentwickle, entwerfe ich eigene Stühle. Anders als moderne Stühle von
            Markenherstellern sind meine Modelle gedacht, andere an Haltbarkeit, Komfort und bequemer Arbeitsweise zu
            übertreffen.
          </p>

          <div className="mt-16 grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <Photo
              className="lg:col-span-7"
              src="/fotos/big-boss.jpg"
              alt="Herrenstuhl Big Boss von Friseur6"
              aspect="wide"
              caption="Herrenstuhl Big Boss."
            />
            <div className="lg:col-span-5">
              <p className="text-2xl leading-snug font-medium tracking-[-0.03em]">
                Sie entscheiden, wie Sie Ihren Friseur6 Big Boss haben möchten.
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                Kunstleder beliebig, Pumpe mechanisch oder elektrisch. Dies ist keine Massenfertigung. Kommen Sie
                vorbei und erschaffen Sie mit mir ein Unikat.
              </p>
            </div>
          </div>

          <div className="mt-16 grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5 lg:col-start-1">
              <p className="text-2xl leading-snug font-medium tracking-[-0.03em]">
                Eine Couch ist Ihnen zu sperrig?
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                Wartestühle im Retrostyle, bequem durch einen Stahlfederkern ohne Schaumstoff, federleicht zu
                platzieren, Armlehnen aus Hartholz. Europäische Fertigung.
              </p>
            </div>
            <Photo
              className="lg:col-span-7"
              src="/fotos/wartestuhl.jpg"
              alt="Wartestuhl mit Federkern aus dem Angebot von Friseur6"
              aspect="wide"
              caption="Wartestuhl mit Federkern."
            />
          </div>

          <p className="mt-16 max-w-3xl text-2xl leading-snug font-medium tracking-[-0.03em]">
            Ab 1.000 € netto liefere ich kostenlos nach ganz Deutschland.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
            Sie wollen einen Friseursalon eröffnen und wissen nicht, welche Möbel zum Budget passen? Ich nehme mir Zeit
            und berate Sie. Können Sie Ihre alte Einrichtung nicht mehr sehen? Wenn Sie bei mir kaufen, nehme ich sie
            in Zahlung. Sie rufen an oder schreiben. Ich schaue, was der Salon braucht, dann Lieferung oder ein Termin
            vor Ort.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
            Anders als bei neuer Ware lassen sich meine Möbel, wenn erwünscht, innerhalb von 24 Monaten gegenüber dem
            Finanzamt abschreiben. Neue Ware muss mindestens zehn Jahre abgeschrieben werden. Die Rechnung stelle ich
            mit ausgewiesener Mehrwertsteuer aus.
          </p>
        </div>
      </section>

      <section id="kontakt" className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-3xl leading-none font-semibold tracking-[-0.04em] sm:text-5xl">
              Schreiben Sie mir oder rufen Sie mich an.
            </h2>
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
