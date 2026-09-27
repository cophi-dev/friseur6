import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-5 gap-y-2 px-5 py-5 text-sm text-ink-soft">
        <span>
          {site.name}, {site.street}, {site.postalCode} {site.city}
        </span>
        <a href={`tel:${site.phoneTel}`} className="underline decoration-line underline-offset-4 hover:text-ink">
          {site.phoneDisplay}
        </a>
        <a href={`mailto:${site.email}`} className="underline decoration-line underline-offset-4 hover:text-ink">
          {site.email}
        </a>
        <span>
          <Link href="/impressum" className="underline decoration-line underline-offset-4 hover:text-ink">
            Impressum
          </Link>
          {" | "}
          <Link href="/datenschutz" className="underline decoration-line underline-offset-4 hover:text-ink">
            Datenschutz
          </Link>
        </span>
      </div>
    </footer>
  );
}
