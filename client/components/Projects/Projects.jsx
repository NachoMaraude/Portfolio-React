"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { createT } from "@/lib/t";
import { PROJECTS } from "./projectsData";
import ProjectModal from "./ProjectModal";

const GROUPS = ["client", "bootcamp"];

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

function ProjectCard({ project, onOpen, t }) {
  const key = `projects.items.${project.id}`;
  const name = t(`${key}.name`);

  return (
    <div className="flex flex-col bg-[#161b2e] border border-[#2d3555] rounded-2xl overflow-hidden hover:border-[#90a0d9]/40 transition-all duration-300">
      <div className="h-48 overflow-hidden">
        <Carousel
          showArrows
          showThumbs={false}
          transitionTime={400}
          infiniteLoop
          showStatus={false}
        >
          {project.images.map((img, i) => (
            <div key={i}>
              <Image
                src={img}
                alt={`${name}-${i + 1}`}
                sizes="(min-width: 1024px) 512px, (min-width: 768px) 50vw, 100vw"
                className="h-48 w-full object-cover"
              />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-white font-bold text-lg mb-2">{name}</h3>
        <p className="text-[#8892b0] text-sm leading-relaxed mb-4 flex-1">
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
              className="text-sm font-semibold text-[#90a0d9] hover:text-[#7b8fd4] transition-colors duration-200"
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
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-[#90a0d9] text-xs font-mono tracking-widest mb-3 uppercase">
          {t("projects.label")}
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-12">
          {t("projects.h1")}
        </h2>

        {GROUPS.map((group) => (
          <div key={group} className="mb-12 last:mb-0">
            <h3 className="text-sm font-semibold text-[#c4cde8] mb-5">
              {t(`projects.groups.${group}`)}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PROJECTS.filter((p) => p.type === group).map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpen={setSelected}
                  t={t}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {selected && <ProjectModal project={selected} onClose={closeModal} t={t} />}
    </section>
  );
}
