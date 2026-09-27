import Link from "next/link";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <main id="inhalt" className="mx-auto max-w-3xl px-5 py-20">
      <h1 className="font-serif text-4xl font-medium tracking-tight">Diese Seite gibt es nicht.</h1>
      <p className="mt-5 text-lg leading-relaxed text-ink-soft">
        Zurück zur Startseite, oder rufen Sie mich an:{" "}
        <a href={`tel:${site.phoneTel}`} className="text-ink underline decoration-line underline-offset-4">
          {site.phoneDisplay}
        </a>
        .
      </p>
      <Link href="/" className="mt-8 inline-block text-ink underline decoration-cognac underline-offset-4">
        Zur Startseite
      </Link>
    </main>
  );
}
