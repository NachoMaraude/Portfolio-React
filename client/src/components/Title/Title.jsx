import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const STACK = ["React", "Next.js", "Tiendanube", "Meta Ads"];

export default function Title() {
  const [t] = useTranslation("global");
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center pt-28 pb-16 relative">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#90a0d9]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <p className="text-[#90a0d9] text-xs font-mono tracking-widest mb-5 uppercase">
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
              className="text-xs text-[#90a0d9] bg-[#90a0d9]/10 border border-[#90a0d9]/20 px-3 py-1 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 flex-wrap mb-6">
          <Link
            to="projects"
            smooth
            offset={-64}
            className="cursor-pointer px-6 py-3 bg-[#90a0d9] text-[#0d1117] font-semibold rounded-lg hover:bg-[#7b8fd4] transition-colors duration-200 text-sm"
          >
            {t("title.cta")}
          </Link>
          <Link
            to="contact"
            smooth
            offset={-64}
            className="cursor-pointer px-6 py-3 border border-[#2d3555] text-[#c4cde8] font-semibold rounded-lg hover:border-[#90a0d9] hover:text-[#90a0d9] transition-all duration-200 text-sm"
          >
            {t("title.contactBtn")}
          </Link>
        </div>

        <p className="flex items-center justify-center gap-2 text-xs text-[#8892b0] mb-6">
          <span className="w-2 h-2 rounded-full bg-[#90a0d9] animate-pulse" />
          {t("title.availability")}
        </p>

        <div className="flex items-center justify-center gap-5">
          <a
            href="https://github.com/NachoMaraude"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8892b0] hover:text-[#90a0d9] transition-colors duration-200"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/juan-ignacio-maraude-8a0694210/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8892b0] hover:text-[#90a0d9] transition-colors duration-200"
          >
            <FaLinkedin size={22} />
          </a>
        </div>
      </div>
    </section>
  );
}
