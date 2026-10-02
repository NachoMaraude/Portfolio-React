import { LOCALES } from "@/dictionaries";
import { getSiteUrl } from "@/lib/site";

export default function sitemap() {
  const base = getSiteUrl();
  return LOCALES.map((lang) => ({
    url: `${base}/${lang}`,
    alternates: {
      languages: Object.fromEntries(LOCALES.map((l) => [l, `${base}/${l}`])),
    },
  }));
}
