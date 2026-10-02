import "../globals.css";
import { notFound } from "next/navigation";
import { LOCALES, getDictionary, hasLocale } from "@/dictionaries";
import { getSiteUrl } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export const viewport = { themeColor: "#0d1117" };

export async function generateMetadata({ params }) {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { title, description } = getDictionary(lang).meta;

  return {
    metadataBase: new URL(getSiteUrl()),
    title,
    description,
    manifest: "/manifest.json",
    icons: { icon: "/descarga2.png", apple: "/logo192.png" },
    alternates: {
      canonical: `/${lang}`,
      languages: { en: "/en", es: "/es", "x-default": "/en" },
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `/${lang}`,
      locale: lang === "es" ? "es_AR" : "en_US",
    },
  };
}

export default async function RootLayout({ children, params }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html lang={lang}>
      <body>{children}</body>
    </html>
  );
}
