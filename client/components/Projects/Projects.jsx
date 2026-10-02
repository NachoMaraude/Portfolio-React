"use client";

import { useCallback, useState } from "react";
import dynamic from "next/dynamic";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { createT } from "@/lib/t";
import SnapCarousel from "../SnapCarousel";
import { PROJECTS } from "./projectsData";

const ProjectModal = dynamic(() => import("./ProjectModal"));

const GROUPS = ["client", "bootcamp"];

function Tag({ label }) {
  return (
    <span className="text-sm text-[#90a0d9] bg-[#90a0d9]/10 border border-[#90a0d9]/20 px-2.5 py-0.5 rounded-full">
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
      className="flex items-center gap-1.5 text-sm text-[#8892b0] hover-fine:text-[#90a0d9] transition-colors duration-160 ease-snappy"
    >
      {icon}
      {label}
    </a>
  );
}

function ProjectCard({ project, onOpen, t, eagerFirst }) {
  const key = `projects.items.${project.id}`;
  const name = t(`${key}.name`);

  return (
    <div className="flex flex-col bg-[#161b2e] border border-[#2d3555] rounded-2xl overflow-hidden hover-fine:border-[#90a0d9]/40 transition-colors duration-300">
      <SnapCarousel
        images={project.images}
        heightClass="h-48"
        fit={project.imageFit}
        eagerFirst={eagerFirst}
        sizes="(min-width: 1280px) 360px, (min-width: 768px) 50vw, 100vw"
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
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-white font-bold text-lg mb-2">{name}</h3>
        <p className="text-[#8892b0] text-base leading-relaxed mb-4 flex-1">
          {t(`${key}.summary`)}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {project.hasCase && (
            <button
              type="button"
              onClick={() => onOpen(project)}
              className="press text-sm font-semibold text-[#90a0d9] hover-fine:text-[#7b8fd4]"
            >
              {t("projects.viewCase")}
            </button>
          )}
          {project.links.github && (
            <ProjectLink
              href={project.links.github}
              icon={<FaGithub size={14} />}
              label="GitHub"
            />
          )}
          {project.links.site && (
            <ProjectLink
              href={project.links.site}
              icon={<FaExternalLinkAlt size={12} />}
              label={t("projects.visit")}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects({ dict }) {
  const t = createT(dict);
  const [selected, setSelected] = useState(null);
  const closeModal = useCallback(() => setSelected(null), []);

  return (
    <section id="projects" className="py-24">
      <div className="max-w-5xl xl:max-w-6xl mx-auto px-6">
        <p className="text-[#90a0d9] text-sm font-mono tracking-widest mb-3 uppercase">
          {t("projects.label")}
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-12">
          {t("projects.h1")}
        </h2>

        {GROUPS.map((group) => (
          <div key={group} className="mb-12 last:mb-0">
            <h3 className="text-base font-semibold text-[#c4cde8] mb-5">
              {t(`projects.groups.${group}`)}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {PROJECTS.filter((p) => p.type === group).map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpen={setSelected}
                  t={t}
                  eagerFirst={project.id === PROJECTS[0].id}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={closeModal} t={t} />
      )}
    </section>
  );
}
