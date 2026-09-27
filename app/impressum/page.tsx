import type { Metadata } from "next";
import { site } from "@/lib/site";

const title = "Impressum";
const description = `Impressum von ${site.name}, ${site.owner}, ${site.street}, ${site.postalCode} ${site.city}.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/impressum" },
  openGraph: { title, description, url: "/impressum" },
};

export default function ImpressumPage() {
  return (
    <main id="inhalt" className="mx-auto max-w-3xl px-5 py-14 sm:py-20">
      <h1 className="font-serif text-4xl font-medium tracking-tight">Impressum</h1>
      <h2 className="mt-10 font-serif text-2xl font-medium">Angaben gemäß § 5 DDG</h2>
      <p className="mt-4 leading-relaxed text-ink-soft">
        {site.name}
        <br />
        {site.owner}
        <br />
        {site.street}
        <br />
        {site.postalCode} {site.city}
      </p>
      <h2 className="mt-10 font-serif text-2xl font-medium">Kontakt</h2>
      <p className="mt-4 leading-relaxed text-ink-soft">
        Telefon:{" "}
        <a href={`tel:${site.phoneTel}`} className="text-ink underline decoration-line underline-offset-4">
          {site.phoneDisplay}
        </a>
        <br />
        Mobil:{" "}
        <a href={`tel:${site.mobileTel}`} className="text-ink underline decoration-line underline-offset-4">
          {site.mobileDisplay}
        </a>
        <br />
        E-Mail:{" "}
        <a href={`mailto:${site.email}`} className="text-ink underline decoration-line underline-offset-4">
          {site.email}
        </a>
      </p>
      <h2 className="mt-10 font-serif text-2xl font-medium">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
      <p className="mt-4 leading-relaxed text-ink-soft">
        {site.owner}
        <br />
        {site.street}
        <br />
        {site.postalCode} {site.city}
      </p>
    </main>
  );
}
