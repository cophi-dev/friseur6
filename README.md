# Friseur6

Website für Friseur6 in Bergkamen.

## Start

```bash
pnpm install
pnpm dev
```

Produktion:

```bash
pnpm build
pnpm start
```

## Umgebungsvariablen

Namen siehe `.env.example`. Werte lokal in `.env.local` hinterlegen, nicht ins Repository committen.

- `RESEND_API_KEY` — Schlüssel für den Versand des Kontaktformulars
- `CONTACT_TO` — Empfängeradresse
- `CONTACT_FROM` — Absenderadresse (bei Resend verifiziert)
- `CONTACT_REPLY_TO` — Antwortadresse, falls die E-Mail der Anfrage fehlt
- `NEXT_PUBLIC_SITE_URL` — kanonische Adresse der Website, zum Beispiel `https://example.com`
