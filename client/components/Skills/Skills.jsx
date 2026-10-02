import Image from "next/image";
import { createT } from "@/lib/t";
import tiendanubeIcon from "../images/tiendanube.png";

const SKILLS = [
  { name: "HTML", icon: "/skills/html5.svg" },
  { name: "CSS", icon: "/skills/css3.svg" },
  { name: "JavaScript", icon: "/skills/javascript.svg" },
  { name: "React", icon: "/skills/react.svg" },
  { name: "Redux", icon: "/skills/redux.svg" },
  { name: "Tailwind", icon: "/skills/tailwind.svg" },
  { name: "Node.js", icon: "/skills/nodejs.svg" },
  { name: "Express", icon: "/skills/express.svg", invert: true },
  { name: "PostgreSQL", icon: "/skills/postgresql.svg" },
  { name: "MongoDB", icon: "/skills/mongodb.svg" },
  { name: "Git", icon: "/skills/git.svg" },
  { name: "Next.js", icon: "/skills/nextjs.svg" },
  { name: "Tiendanube", icon: tiendanubeIcon },
];

export default function Skills({ dict }) {
  const t = createT(dict);

  return (
    <section id="skills" className="py-24">
      <div className="max-w-5xl xl:max-w-6xl mx-auto px-6">
        <p className="text-[#90a0d9] text-sm font-mono tracking-widest mb-3 uppercase">
          {t("skills.label")}
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-12">
          {t("skills.h1")}
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {SKILLS.map((skill) => (
            <div
              key={skill.name}
              className="group flex flex-col items-center gap-3 p-4 bg-[#161b2e] border border-[#2d3555] rounded-xl hover-fine:border-[#90a0d9]/50 hover-fine:bg-[#1a2038] transition-colors duration-300 cursor-default"
            >
              <Image
                src={skill.icon}
                alt=""
                width={36}
                height={36}
                className={`w-9 h-9 object-contain motion-safe:group-hover-fine:scale-110 transition-transform duration-160 ease-snappy ${
                  skill.invert ? "brightness-0 invert" : ""
                }`}
              />
              <span className="text-sm text-[#8892b0] group-hover-fine:text-[#90a0d9] transition-colors duration-300 font-medium text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
