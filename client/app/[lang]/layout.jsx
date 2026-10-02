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
  const { title, description, ogImageAlt } = getDictionary(lang).meta;
  const ogImage = {
    url: "/og-image.png",
    width: 1200,
    height: 630,
    alt: ogImageAlt,
  };

  return {
    metadataBase: new URL(getSiteUrl()),
    title,
    description,
    manifest: "/manifest.json",
    alternates: {
      canonical: `/${lang}`,
      languages: { en: "/en", es: "/es", "x-default": "/en" },
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `/${lang}`,
      siteName: "Juan Ignacio Maraude",
      locale: lang === "es" ? "es_AR" : "en_US",
      alternateLocale: lang === "es" ? ["en_US"] : ["es_AR"],
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: ogImage.url, alt: ogImageAlt }],
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
