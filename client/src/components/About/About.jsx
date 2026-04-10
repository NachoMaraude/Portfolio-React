import image from "../images/descarga2.png";
import { useTranslation } from "react-i18next";

export default function About() {
  const [t] = useTranslation("global");
  return (
    <section id="about" className="py-28">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-14 items-center">
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute -inset-2 rounded-full bg-[#90a0d9]/10 blur-lg" />
              <img
                src={image}
                alt="Juan Ignacio Maraude"
                className="relative w-44 h-44 rounded-full object-cover border-2 border-[#2d3555]"
              />
            </div>
          </div>
          <div>
            <p className="text-[#90a0d9] text-xs font-mono tracking-widest mb-3 uppercase">
              {t("about.label")}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
              {t("about.heading")}
            </h2>
            <p className="text-[#8892b0] text-base leading-relaxed">
              {t("about.p")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
