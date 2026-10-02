import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Carousel } from "react-responsive-carousel";
import { FiX } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";
import { scroller } from "react-scroll";

const CASE_FIELDS = ["role", "problem", "solution", "result"];

export default function ProjectModal({ project, onClose }) {
  const [t] = useTranslation("global");
  const closeRef = useRef(null);
  const key = `projects.items.${project.id}`;

  const goToContact = () => {
    onClose();
    // Espera a que el modal desmonte y libere el scroll del body.
    setTimeout(
      () => scroller.scrollTo("contact", { smooth: true, offset: -64 }),
      0,
    );
  };

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#161b2e] border border-[#2d3555] rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label={t("projects.close")}
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-[#0d1117]/80 text-[#c4cde8] hover:text-[#90a0d9] transition-colors duration-200"
        >
          <FiX size={18} />
        </button>

        <Carousel
          showArrows
          showThumbs={false}
          transitionTime={400}
          infiniteLoop
          showStatus={false}
        >
          {project.images.map((img, i) => (
            <div key={i}>
              <img
                src={img}
                alt={`${t(`${key}.name`)}-${i + 1}`}
                className="h-56 md:h-72 w-full object-cover"
              />
            </div>
          ))}
        </Carousel>

        <div className="p-6 flex flex-col gap-5">
          <div>
            <h3
              id="project-modal-title"
              className="text-white font-bold text-xl mb-3"
            >
              {t(`${key}.name`)}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-[#90a0d9] bg-[#90a0d9]/10 border border-[#90a0d9]/20 px-2 py-0.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {CASE_FIELDS.map((field) => (
            <div key={field}>
              <p className="text-[#90a0d9] text-xs font-mono tracking-widest mb-1.5 uppercase">
                {t(`projects.caseLabels.${field}`)}
              </p>
              <p className="text-[#8892b0] text-sm leading-relaxed">
                {t(`${key}.${field}`)}
              </p>
            </div>
          ))}

          {project.links.site && (
            <a
              href={project.links.site}
              target="_blank"
              rel="noopener noreferrer"
              className="self-start flex items-center gap-1.5 text-sm text-[#90a0d9] hover:text-[#7b8fd4] transition-colors duration-200"
            >
              <FaExternalLinkAlt size={12} />
              {t("projects.visit")}
            </a>
          )}

          <div className="flex flex-wrap items-center justify-between gap-3 pt-5 border-t border-[#2d3555]">
            <p className="text-sm text-[#c4cde8]">{t("projects.ctaText")}</p>
            <button
              type="button"
              onClick={goToContact}
              className="px-5 py-2.5 bg-[#90a0d9] text-[#0d1117] font-semibold rounded-lg hover:bg-[#7b8fd4] transition-colors duration-200 text-sm"
            >
              {t("projects.ctaButton")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
