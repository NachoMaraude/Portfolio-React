import one from "../images/foodify/one.png";
import two from "../images/foodify/two.png";
import three from "../images/foodify/three.png";
import four from "../images/foodify/four.png";
import onePi from "../images/pi/one.png";
import twoPi from "../images/pi/two.png";
import threePi from "../images/pi/three.png";
import fourPi from "../images/pi/four.png";
import fivePi from "../images/pi/five.png";
import oneMod from "../images/mod/one.png";
import twoMod from "../images/mod/two.png";
import threeMod from "../images/mod/three.png";
import fourMod from "../images/mod/four.png";
import fiveMod from "../images/mod/five.png";
import oneVesta from "../images/vesta/one.png";
import twoVesta from "../images/vesta/two.png";
import threeVesta from "../images/vesta/three.png";
import fourVesta from "../images/vesta/four.png";
import fiveVesta from "../images/vesta/five.png";
import sixVesta from "../images/vesta/six.png";
import sevenVesta from "../images/vesta/seven.png";
import oneMacasa from "../images/macasa/one.png";
import twoMacasa from "../images/macasa/two.png";
import threeMacasa from "../images/macasa/three.png";
import fourMacasa from "../images/macasa/four.png";
import fiveMacasa from "../images/macasa/five.png";
import sixMacasa from "../images/macasa/six.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useTranslation } from "react-i18next";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const TAGS = {
  pi: ["React", "Redux", "PostgreSQL", "Node.js", "Express"],
  foodify: ["React", "Redux", "Node.js", "PostgreSQL"],
  market: ["E-commerce", "Tiendanube", "JavaScript"],
  vesta: ["E-commerce", "Tiendanube", "JavaScript"],
  macasa: ["Next.js", "React", "Tailwind CSS"],
};

function Tag({ label }) {
  return (
    <span className="text-xs text-[#90a0d9] bg-[#90a0d9]/10 border border-[#90a0d9]/20 px-2 py-0.5 rounded-full">
      {label}
    </span>
  );
}

function ProjectLink({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1.5 text-sm text-[#8892b0] hover:text-[#90a0d9] transition-colors duration-200"
    >
      {icon}
      {label}
    </a>
  );
}

export default function Projects() {
  const [t] = useTranslation("global");

  return (
    <section id="projects" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-[#90a0d9] text-xs font-mono tracking-widest mb-3 uppercase">
          {t("projects.label")}
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-12">
          {t("projects.h1")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* PI Videogames */}
          <div className="flex flex-col bg-[#161b2e] border border-[#2d3555] rounded-2xl overflow-hidden hover:border-[#90a0d9]/40 transition-all duration-300">
            <div className="h-48 overflow-hidden">
              <Carousel
                showArrows
                showThumbs={false}
                transitionTime={400}
                infiniteLoop
                showStatus={false}
              >
                {[onePi, twoPi, threePi, fourPi, fivePi].map((img, i) => (
                  <div key={i}>
                    <img
                      src={img}
                      alt={`PI-${i}`}
                      className="h-48 w-full object-cover"
                    />
                  </div>
                ))}
              </Carousel>
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-white font-bold text-lg mb-2">
                Videogames APP
              </h3>
              <p className="text-[#8892b0] text-sm leading-relaxed mb-4 flex-1">
                {t("projects.piDescription")}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {TAGS.pi.map((tag) => (
                  <Tag key={tag} label={tag} />
                ))}
              </div>
              <div className="flex gap-4">
                <ProjectLink
                  href="https://github.com/NachoMaraude/PI-Videogames"
                  icon={<FaGithub size={14} />}
                  label="GitHub"
                />
                <ProjectLink
                  href="https://pi-videogames-front-weld.vercel.app/"
                  icon={<FaExternalLinkAlt size={12} />}
                  label={t("projects.visit")}
                />
              </div>
            </div>
          </div>

          {/* Foodify */}
          <div className="flex flex-col bg-[#161b2e] border border-[#2d3555] rounded-2xl overflow-hidden hover:border-[#90a0d9]/40 transition-all duration-300">
            <div className="h-48 overflow-hidden">
              <Carousel
                showArrows
                showThumbs={false}
                transitionTime={400}
                infiniteLoop
                showStatus={false}
              >
                {[one, two, three, four].map((img, i) => (
                  <div key={i}>
                    <img
                      src={img}
                      alt={`Foodify-${i}`}
                      className="h-48 w-full object-cover"
                    />
                  </div>
                ))}
              </Carousel>
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-white font-bold text-lg mb-2">Foodify</h3>
              <p className="text-[#8892b0] text-sm leading-relaxed mb-4 flex-1">
                {t("projects.foodifyDescription")}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {TAGS.foodify.map((tag) => (
                  <Tag key={tag} label={tag} />
                ))}
              </div>
              <div className="flex gap-4">
                <ProjectLink
                  href="https://github.com/NachoMaraude/Foodify"
                  icon={<FaGithub size={14} />}
                  label="GitHub"
                />
                <ProjectLink
                  href="https://foodify-ten.vercel.app/"
                  icon={<FaExternalLinkAlt size={12} />}
                  label={t("projects.visit")}
                />
              </div>
            </div>
          </div>

          {/* Market on Demand */}
          <div className="flex flex-col bg-[#161b2e] border border-[#2d3555] rounded-2xl overflow-hidden hover:border-[#90a0d9]/40 transition-all duration-300">
            <div className="h-48 overflow-hidden">
              <Carousel
                showArrows
                showThumbs={false}
                transitionTime={400}
                infiniteLoop
                showStatus={false}
              >
                {[oneMod, twoMod, threeMod, fourMod, fiveMod].map((img, i) => (
                  <div key={i}>
                    <img
                      src={img}
                      alt={`Market-${i}`}
                      className="h-48 w-full object-cover"
                    />
                  </div>
                ))}
              </Carousel>
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-white font-bold text-lg mb-2">
                Market on Demand
              </h3>
              <p className="text-[#8892b0] text-sm leading-relaxed mb-4 flex-1">
                {t("projects.marketDescription")}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {TAGS.market.map((tag) => (
                  <Tag key={tag} label={tag} />
                ))}
              </div>
              <div className="flex gap-4">
                <ProjectLink
                  href="https://marketondemand.com.ar/"
                  icon={<FaExternalLinkAlt size={12} />}
                  label={t("projects.visit")}
                />
              </div>
            </div>
          </div>

          {/* Vesta Elemento */}
          <div className="flex flex-col bg-[#161b2e] border border-[#2d3555] rounded-2xl overflow-hidden hover:border-[#90a0d9]/40 transition-all duration-300">
            <div className="h-48 overflow-hidden">
              <Carousel
                showArrows
                showThumbs={false}
                transitionTime={400}
                infiniteLoop
                showStatus={false}
              >
                {[
                  oneVesta,
                  twoVesta,
                  threeVesta,
                  fourVesta,
                  fiveVesta,
                  sixVesta,
                  sevenVesta,
                ].map((img, i) => (
                  <div key={i}>
                    <img
                      src={img}
                      alt={`Vesta-${i}`}
                      className="h-48 w-full object-cover"
                    />
                  </div>
                ))}
              </Carousel>
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-white font-bold text-lg mb-2">
                Vesta Elemento
              </h3>
              <p className="text-[#8892b0] text-sm leading-relaxed mb-4 flex-1">
                {t("projects.vestaDescription")}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {TAGS.vesta.map((tag) => (
                  <Tag key={tag} label={tag} />
                ))}
              </div>
              <div className="flex gap-4">
                <ProjectLink
                  href="https://vestaelemento.com/"
                  icon={<FaExternalLinkAlt size={12} />}
                  label={t("projects.visit")}
                />
              </div>
            </div>
          </div>
          {/* MACASA Desarrollos */}
          <div className="flex flex-col bg-[#161b2e] border border-[#2d3555] rounded-2xl overflow-hidden hover:border-[#90a0d9]/40 transition-all duration-300">
            <div className="h-48 overflow-hidden">
              <Carousel
                showArrows
                showThumbs={false}
                transitionTime={400}
                infiniteLoop
                showStatus={false}
              >
                {[
                  oneMacasa,
                  twoMacasa,
                  threeMacasa,
                  fourMacasa,
                  fiveMacasa,
                  sixMacasa,
                ].map((img, i) => (
                  <div key={i}>
                    <img
                      src={img}
                      alt={`MACASA-${i}`}
                      className="h-48 w-full object-cover"
                    />
                  </div>
                ))}
              </Carousel>
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-white font-bold text-lg mb-2">
                MACASA Desarrollos
              </h3>
              <p className="text-[#8892b0] text-sm leading-relaxed mb-4 flex-1">
                {t("projects.macasaDescription")}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {TAGS.macasa.map((tag) => (
                  <Tag key={tag} label={tag} />
                ))}
              </div>
              <div className="flex gap-4">
                <ProjectLink
                  href="https://macasa-desarrollos.vercel.app/"
                  icon={<FaExternalLinkAlt size={12} />}
                  label={t("projects.visit")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
