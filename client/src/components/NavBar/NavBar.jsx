import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

export default function NavBar() {
  const [t, i18n] = useTranslation("global");
  const lang = i18n.language?.startsWith("es") ? "es" : "en";

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0d1117]/80 backdrop-blur-sm border-b border-[#2d3555]/50">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <div className="w-9 h-9 rounded-full bg-[#90a0d9]/10 border border-[#90a0d9]/30 flex items-center justify-center text-[#90a0d9] font-bold text-sm">
            JI
          </div>
        </a>

        <div className="hidden sm:flex items-center gap-8">
          {["about", "skills", "projects", "contact"].map((section) => (
            <Link
              key={section}
              to={section}
              spy
              smooth
              offset={-64}
              activeClass="nav-active"
              className="text-[#8892b0] hover:text-[#90a0d9] transition-colors duration-200 text-sm font-medium cursor-pointer tracking-wide"
            >
              {t(`navBar.${section}`)}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-1 bg-[#161b2e] border border-[#2d3555] rounded-full p-1">
          <button
            onClick={() => i18n.changeLanguage("en")}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
              lang === "en"
                ? "bg-[#90a0d9] text-[#0d1117]"
                : "text-[#8892b0] hover:text-[#c4cde8]"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => i18n.changeLanguage("es")}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
              lang === "es"
                ? "bg-[#90a0d9] text-[#0d1117]"
                : "text-[#8892b0] hover:text-[#c4cde8]"
            }`}
          >
            ES
          </button>
        </div>
      </div>
    </nav>
  );
}
