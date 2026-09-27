import { site } from "@/lib/site";

export function CallBar() {
  return (
    <a
      href={`tel:${site.phoneTel}`}
      className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-center bg-cognac px-4 py-3.5 text-base font-medium text-foam hover:bg-cognac-deep sm:hidden"
    >
      Anrufen · {site.phoneDisplay}
    </a>
  );
}
