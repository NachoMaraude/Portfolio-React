import { createT } from "@/lib/t";
import tiendanubeIcon from "../images/tiendanube.png";

const SKILLS = [
  {
    name: "HTML",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
  },
  {
    name: "Redux",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
  },
  {
    name: "Tailwind",
    icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  },
  {
    name: "Node.js",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
    invert: true,
  },
  {
    name: "PostgreSQL",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Git",
    icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
  },
  {
    name: "Next.js",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Tiendanube",
    icon: tiendanubeIcon.src,
  },
];

export default function Skills({ dict }) {
  const t = createT(dict);

  return (
    <section id="skills" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-[#90a0d9] text-xs font-mono tracking-widest mb-3 uppercase">
          {t("skills.label")}
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-12">
          {t("skills.h1")}
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {SKILLS.map((skill) => (
            <div
              key={skill.name}
              className="group flex flex-col items-center gap-3 p-4 bg-[#161b2e] border border-[#2d3555] rounded-xl hover:border-[#90a0d9]/50 hover:bg-[#1a2038] transition-all duration-300 cursor-default"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className={`w-9 h-9 object-contain group-hover:scale-110 transition-transform duration-300 ${
                  skill.invert ? "brightness-0 invert" : ""
                }`}
              />
              <span className="text-xs text-[#8892b0] group-hover:text-[#90a0d9] transition-colors duration-300 font-medium text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
