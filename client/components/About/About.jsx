import Image from "next/image";
import image from "../images/descarga2.png";
import { createT } from "@/lib/t";

export default function About({ dict }) {
  const t = createT(dict);
  return (
    <section id="about" className="py-28">
      <div className="max-w-5xl xl:max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-14 items-center">
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute -inset-2 rounded-full bg-[#90a0d9]/10 blur-lg" />
              <Image
                src={image}
                alt={t("about.photoAlt")}
                priority
                sizes="176px"
                className="relative w-44 h-44 rounded-full object-cover border-2 border-[#2d3555]"
              />
            </div>
          </div>
          <div>
            <p className="text-[#90a0d9] text-sm font-mono tracking-widest mb-3 uppercase">
              {t("about.label")}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
              {t("about.heading")}
            </h2>
            <div className="flex flex-col gap-4 text-[#8892b0] text-base leading-relaxed">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
              <p>{t("about.p3")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
