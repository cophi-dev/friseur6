import Link from "next/link";
import { site } from "@/lib/site";

const links = [
  { href: "/#reparatur", label: "Reparatur" },
  { href: "/#verkauf", label: "Verkauf" },
  { href: "/#kontakt", label: "Kontakt" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-paper/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <Link href="/" className="text-ink" aria-label="Friseur6, Startseite">
          <span className="block text-lg leading-none font-semibold tracking-tight">Friseur6</span>
          <span className="mt-1 block text-[11px] tracking-[0.14em] text-ink-soft uppercase">Bergkamen</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-ink-soft sm:flex" aria-label="Seitenabschnitte">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-ink">
              {link.label}
            </Link>
          ))}
        </nav>
        <a
          href={`tel:${site.phoneTel}`}
          className="hidden bg-cognac px-4 py-2.5 text-sm font-medium text-white hover:bg-cognac-deep sm:inline-flex"
        >
          Anrufen
        </a>
      </div>
    </header>
  );
}
