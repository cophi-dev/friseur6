import type { Metadata } from "next";
import { site } from "@/lib/site";

const title = "Datenschutz";
const description = `Datenschutzerklärung von ${site.name} in ${site.city}: Hosting über Vercel, Kontaktformular über Resend.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/datenschutz" },
  openGraph: { title, description, url: "/datenschutz" },
};

export default function DatenschutzPage() {
  return (
    <main id="inhalt" className="mx-auto max-w-3xl px-5 py-14 sm:py-20">
      <h1 className="text-4xl font-medium tracking-tight">Datenschutz</h1>
      <p className="mt-6 leading-relaxed text-ink-soft">
        Hier steht, welche Daten beim Besuch dieser Website und beim Absenden des Kontaktformulars verarbeitet werden.
      </p>

      <h2 className="mt-10 text-2xl font-medium">Verantwortliche</h2>
      <p className="mt-4 leading-relaxed text-ink-soft">
        {site.owner}
        <br />
        {site.name}
        <br />
        {site.street}
        <br />
        {site.postalCode} {site.city}
        <br />
        Telefon:{" "}
        <a href={`tel:${site.phoneTel}`} className="text-ink underline decoration-line underline-offset-4">
          {site.phoneDisplay}
        </a>
        <br />
        E-Mail:{" "}
        <a href={`mailto:${site.email}`} className="text-ink underline decoration-line underline-offset-4">
          {site.email}
        </a>
      </p>

      <h2 className="mt-10 text-2xl font-medium">Hosting</h2>
      <p className="mt-4 leading-relaxed text-ink-soft">
        Diese Website wird bei Vercel gehostet. Beim Aufruf einer Seite können dabei Verbindungsdaten verarbeitet
        werden, etwa IP-Adresse, Datum und Uhrzeit, aufgerufene Adresse und Angaben zum Browser. Das ist nötig, um die
        Seite auszuliefern und abzusichern. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Anbieter ist Vercel Inc.
        Hinweise des Anbieters:{" "}
        <a
          href="https://vercel.com/legal/privacy-policy"
          className="text-ink underline decoration-line underline-offset-4"
          rel="noopener noreferrer"
        >
          Datenschutzerklärung von Vercel
        </a>
        . Eine Übermittlung in die USA ist dabei möglich.
      </p>

      <h2 className="mt-10 text-2xl font-medium">Kontaktformular</h2>
      <p className="mt-4 leading-relaxed text-ink-soft">
        Wenn Sie das Formular senden, verarbeite ich Name, E-Mail, Nachricht und, falls angegeben, Salon oder Firma
        sowie Telefonnummer. Die Angaben nutze ich, um Ihre Anfrage zu beantworten. Rechtsgrundlage ist Art. 6 Abs. 1
        lit. b DSGVO, soweit es um eine Anfrage zu Einrichtung, Reparatur oder Lieferung geht, und Ihre Einwilligung
        über die Checkbox, Art. 6 Abs. 1 lit. a DSGVO.
      </p>
      <p className="mt-4 leading-relaxed text-ink-soft">
        Der Versand läuft über den Dienst Resend. Dabei werden die Formulardaten an Resend übermittelt, damit die
        Nachricht bei mir ankommt. Hinweise des Anbieters:{" "}
        <a
          href="https://resend.com/legal/privacy-policy"
          className="text-ink underline decoration-line underline-offset-4"
          rel="noopener noreferrer"
        >
          Datenschutzerklärung von Resend
        </a>
        . Eine Übermittlung in die USA ist dabei möglich. Die Nachricht lösche ich, sobald die Anfrage erledigt ist,
        sofern keine gesetzliche Aufbewahrung entgegensteht. Es gibt keinen Newsletter.
      </p>

      <h2 className="mt-10 text-2xl font-medium">Cookies</h2>
      <p className="mt-4 leading-relaxed text-ink-soft">
        Diese Website setzt keine Analyse- und keine Marketing-Cookies ein.
      </p>

      <h2 className="mt-10 text-2xl font-medium">Ihre Rechte</h2>
      <p className="mt-4 leading-relaxed text-ink-soft">
        Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit
        und Widerspruch, soweit die Voraussetzungen dafür vorliegen. Eine Einwilligung können Sie mit Wirkung für die
        Zukunft widerrufen. Außerdem können Sie sich bei der Landesbeauftragten für Datenschutz und Informationsfreiheit
        Nordrhein-Westfalen beschweren, Kavalleriestraße 2–4, 40213 Düsseldorf.
      </p>
    </main>
  );
}
