"use client";

import { useEffect, useState } from "react";
import NextLink from "next/link";
import { createT } from "@/lib/t";

const SECTIONS = ["about", "skills", "projects", "contact"];

export default function NavBar({ lang, dict }) {
  const t = createT(dict);
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = SECTIONS.map((id) => document.getElementById(id)).filter(
      Boolean,
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) setActive(id);
          else setActive((current) => (current === id ? "" : current));
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label={t("navBar.label")}
      className="fixed top-0 w-full z-50 bg-[#0d1117]/80 backdrop-blur-sm border-b border-[#2d3555]/50"
    >
      <div className="max-w-5xl xl:max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <NextLink
          href={`/${lang}`}
          aria-label="JI - Juan Ignacio Maraude"
          className="flex items-center"
        >
          <div className="w-9 h-9 rounded-full bg-[#90a0d9]/10 border border-[#90a0d9]/30 flex items-center justify-center text-[#90a0d9] font-bold text-sm">
            JI
          </div>
        </NextLink>

        <div className="hidden sm:flex items-center gap-8">
          {SECTIONS.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              aria-current={active === section ? "location" : undefined}
              className={`text-sm font-medium tracking-wide transition-colors duration-160 ease-snappy hover-fine:text-[#90a0d9] ${
                active === section ? "text-[#90a0d9]" : "text-[#8892b0]"
              }`}
            >
              {t(`navBar.${section}`)}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1 bg-[#161b2e] border border-[#2d3555] rounded-full p-1">
          {["en", "es"].map((code) => (
            <NextLink
              key={code}
              href={`/${code}`}
              scroll={false}
              hrefLang={code}
              lang={code}
              aria-label={code === "en" ? "English (EN)" : "Español (ES)"}
              aria-current={lang === code ? "true" : undefined}
              className={`press px-3 py-1 rounded-full text-sm font-semibold ${
                lang === code
                  ? "bg-[#90a0d9] text-[#0d1117]"
                  : "text-[#8892b0] hover-fine:text-[#c4cde8]"
              }`}
            >
              {code.toUpperCase()}
            </NextLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
