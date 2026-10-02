import HeroContent from "./HeroContent";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { createT } from "@/lib/t";

const STACK = ["React", "Next.js", "Tiendanube", "Meta Ads"];

export default function Title({ dict }) {
  const t = createT(dict);
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center pt-28 pb-16 relative overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(144,160,217,0.08)_0%,rgba(144,160,217,0)_70%)] pointer-events-none" />

      <HeroContent>
        <p className="text-[#90a0d9] text-sm font-mono tracking-widest mb-5 uppercase">
          {t("title.label")}
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-5 leading-tight">
          {t("title.h1")}
        </h1>
        <p className="text-base md:text-lg text-[#8892b0] mb-6 leading-relaxed">
          {t("title.h2")}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {STACK.map((item) => (
            <span
              key={item}
              className="text-sm text-[#90a0d9] bg-[#90a0d9]/10 border border-[#90a0d9]/20 px-3 py-1 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 flex-wrap mb-6">
          <a
            href="#projects"
            className="press px-6 py-3 bg-[#90a0d9] text-[#0d1117] font-semibold rounded-lg hover-fine:bg-[#7b8fd4] text-sm"
          >
            {t("title.cta")}
          </a>
          <a
            href="#contact"
            className="press px-6 py-3 border border-[#2d3555] text-[#c4cde8] font-semibold rounded-lg hover-fine:border-[#90a0d9] hover-fine:text-[#90a0d9] text-sm"
          >
            {t("title.contactBtn")}
          </a>
        </div>

        <p className="flex items-center justify-center gap-2 text-sm text-[#8892b0] mb-6">
          <span className="w-2 h-2 rounded-full bg-[#90a0d9] animate-pulse" />
          {t("title.availability")}
        </p>

        <div className="flex items-center justify-center gap-5">
          <a
            href="https://github.com/NachoMaraude"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="press text-[#8892b0] hover-fine:text-[#90a0d9]"
          >
            <FaGithub size={22} aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/juan-ignacio-maraude-8a0694210/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="press text-[#8892b0] hover-fine:text-[#90a0d9]"
          >
            <FaLinkedin size={22} aria-hidden="true" />
          </a>
        </div>
      </HeroContent>
    </section>
  );
}
