import Link from "next/link";
import { PumpMark } from "@/components/mark";
import { site } from "@/lib/site";

const links = [
  { href: "/#reparatur", label: "Reparatur" },
  { href: "/#verkauf", label: "Verkauf" },
  { href: "/#lieferung", label: "Lieferung" },
  { href: "/#kontakt", label: "Kontakt" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3">
        <Link href="/" className="flex items-center gap-2.5 text-ink" aria-label="Friseur6, Startseite">
          <PumpMark className="h-8 w-8 shrink-0 text-cognac" />
          <span>
            <span className="block font-serif text-xl leading-none tracking-tight">Friseur6</span>
            <span className="mt-1 block text-xs text-ink-soft">Bergkamen</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-ink-soft sm:flex" aria-label="Seitenabschnitte">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-ink">
              {link.label}
            </Link>
          ))}
        </nav>
        <a
          href={`tel:${site.phoneTel}`}
          className="hidden bg-cognac px-4 py-2.5 text-sm font-medium text-foam hover:bg-cognac-deep sm:inline-flex"
        >
          Anrufen
        </a>
      </div>
    </header>
  );
}
