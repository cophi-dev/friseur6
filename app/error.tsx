"use client";

import { site } from "@/lib/site";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main id="inhalt" className="mx-auto max-w-3xl px-5 py-20">
      <h1 className="text-4xl font-medium tracking-tight">Die Seite lässt sich gerade nicht laden.</h1>
      <p className="mt-5 text-lg leading-relaxed text-ink-soft">
        Bitte versuchen Sie es erneut oder rufen Sie mich an:{" "}
        <a href={`tel:${site.phoneTel}`} className="text-ink underline decoration-line underline-offset-4">
          {site.phoneDisplay}
        </a>
        .
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-8 bg-cognac px-5 py-3 text-base font-medium text-foam hover:bg-cognac-deep"
      >
        Erneut versuchen
      </button>
    </main>
  );
}
