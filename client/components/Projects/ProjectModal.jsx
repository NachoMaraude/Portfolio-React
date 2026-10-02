"use client";

import { useCallback, useEffect, useRef } from "react";
import { FiX } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";
import SnapCarousel from "../SnapCarousel";
import { prefersReducedMotion } from "@/lib/motion";

const CASE_FIELDS = ["role", "problem", "solution", "result"];
const EXIT_MS = 150;

export default function ProjectModal({ project, onClose, t }) {
  const dialogRef = useRef(null);
  const closingRef = useRef(false);
  const key = `projects.items.${project.id}`;
  const name = t(`${key}.name`);

  const requestClose = useCallback(
    (after) => {
      const dialog = dialogRef.current;
      if (!dialog || closingRef.current) return;
      closingRef.current = true;
      dialog.setAttribute("data-closing", "");
      setTimeout(() => {
        dialog.close();
        onClose();
        after?.();
      }, EXIT_MS);
    },
    [onClose],
  );

  useEffect(() => {
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    // showModal aporta focus trap, capa superior, fondo inerte y devolución del foco al cerrar.
    dialog.showModal();
    document.body.style.overflow = "hidden";
    const onCancel = (e) => {
      e.preventDefault();
      requestClose();
    };
    dialog.addEventListener("cancel", onCancel);
    return () => {
      dialog.removeEventListener("cancel", onCancel);
      document.body.style.overflow = previousOverflow;
      if (dialog.open) dialog.close();
    };
  }, [requestClose]);

  const goToContact = () =>
    requestClose(() =>
      document.getElementById("contact")?.scrollIntoView({
        behavior: prefersReducedMotion() ? "auto" : "smooth",
      }),
    );

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="project-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) requestClose();
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          e.preventDefault();
          requestClose();
        }
      }}
      className="case-dialog m-auto w-[calc(100%-2rem)] max-w-2xl max-h-[90vh] overflow-y-auto p-0 bg-[#161b2e] text-[#c4cde8] border border-[#2d3555] rounded-2xl"
    >
      <button
        type="button"
        onClick={() => requestClose()}
        aria-label={t("projects.close")}
        className="press absolute top-3 right-3 z-20 p-2 rounded-full bg-[#0d1117]/80 text-[#c4cde8] hover-fine:text-[#90a0d9]"
      >
        <FiX size={18} />
      </button>

      <SnapCarousel
        images={project.images}
        heightClass="h-56 md:h-72"
        fit={project.imageFit}
        sizes="(min-width: 672px) 672px, 100vw"
        getAlt={(i) =>
          t("projects.screenshotAlt", {
            n: i + 1,
            total: project.images.length,
            name,
          })
        }
        labels={{
          group: t("projects.carouselLabel", { name }),
          prev: t("projects.prevSlide"),
          next: t("projects.nextSlide"),
          dot: (n) => t("projects.dotLabel", { n }),
        }}
      />

      <div className="p-6 flex flex-col gap-5">
        <div>
          <h3
            id="project-modal-title"
            className="text-white font-bold text-xl mb-3"
          >
            {name}
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm text-[#90a0d9] bg-[#90a0d9]/10 border border-[#90a0d9]/20 px-2.5 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {CASE_FIELDS.map((field) => (
          <div key={field}>
            <p className="text-[#90a0d9] text-sm font-mono tracking-widest mb-1.5 uppercase">
              {t(`projects.caseLabels.${field}`)}
            </p>
            <p className="text-[#8892b0] text-base leading-relaxed">
              {t(`${key}.${field}`)}
            </p>
          </div>
        ))}

        {project.links.site && (
          <a
            href={project.links.site}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start flex items-center gap-1.5 text-sm text-[#90a0d9] hover-fine:text-[#7b8fd4] transition-colors duration-160 ease-snappy"
          >
            <FaExternalLinkAlt size={12} />
            {t("projects.visit")}
          </a>
        )}

        <div className="flex flex-wrap items-center justify-between gap-3 pt-5 border-t border-[#2d3555]">
          <p className="text-base text-[#c4cde8]">{t("projects.ctaText")}</p>
          <button
            type="button"
            onClick={goToContact}
            className="press px-5 py-2.5 bg-[#90a0d9] text-[#0d1117] font-semibold rounded-lg hover-fine:bg-[#7b8fd4] text-sm"
          >
            {t("projects.ctaButton")}
          </button>
        </div>
      </div>
    </dialog>
  );
}
