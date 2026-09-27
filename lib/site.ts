export const site = {
  name: "Friseur6",
  owner: "Alla Baraniak",
  street: "Nördliche Lippestraße 25",
  postalCode: "59192",
  city: "Bergkamen",
  region: "Nordrhein-Westfalen",
  phoneDisplay: "02389 3419",
  phoneTel: "+4923893419",
  mobileDisplay: "0151 52095748",
  mobileTel: "+4915152095748",
  email: "friseur6@web.de",
} as const;

export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) {
    return explicit.replace(/\/$/, "");
  }
  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (production) {
    return `https://${production}`;
  }
  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    return `https://${vercel}`;
  }
  return "http://localhost:3000";
}
