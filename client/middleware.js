import { NextResponse } from "next/server";

const LOCALES = ["en", "es"];
const DEFAULT_LOCALE = "en";

function pickLocale(acceptLanguage) {
  const preferred = acceptLanguage
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { tag: tag.toLowerCase(), q: q ? Number(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { tag } of preferred) {
    const match = LOCALES.find((l) => tag === l || tag.startsWith(`${l}-`));
    if (match) return match;
  }
  return DEFAULT_LOCALE;
}

export function middleware(request) {
  const lang = pickLocale(request.headers.get("accept-language") ?? "");
  const url = request.nextUrl.clone();
  url.pathname = `/${lang}`;
  return NextResponse.redirect(url);
}

export const config = { matcher: ["/"] };
