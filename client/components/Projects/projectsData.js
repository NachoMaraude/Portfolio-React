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
import oneMundo from "../images/mundoliterario/one.png";
import twoMundo from "../images/mundoliterario/two.png";
import threeMundo from "../images/mundoliterario/three.png";
import fourMundo from "../images/mundoliterario/four.png";
import fiveMundo from "../images/mundoliterario/five.png";
import sixMundo from "../images/mundoliterario/six.png";

// El orden del array es el orden en pantalla; los textos viven en global.json (projects.items.<id>).
// imageFit "contain" es para capturas verticales (mobile) que no deben recortarse.
export const PROJECTS = [
  {
    id: "mundoliterario",
    type: "client",
    hasCase: true,
    imageFit: "contain",
    images: [oneMundo, twoMundo, threeMundo, fourMundo, fiveMundo, sixMundo],
    tags: ["E-commerce", "Tiendanube", "Meta Ads"],
    links: { site: "https://mundoliterarioml.com.ar/" },
  },
  {
    id: "market",
    type: "client",
    hasCase: true,
    images: [oneMod, twoMod, threeMod, fourMod, fiveMod],
    tags: ["E-commerce", "Tiendanube", "JavaScript"],
    links: { site: "https://marketondemand.com.ar/" },
  },
  {
    id: "vesta",
    type: "client",
    hasCase: true,
    images: [
      oneVesta,
      twoVesta,
      threeVesta,
      fourVesta,
      fiveVesta,
      sixVesta,
      sevenVesta,
    ],
    tags: ["E-commerce", "Tiendanube", "JavaScript"],
    links: { site: "https://vestaelemento.com/" },
  },
  {
    id: "macasa",
    type: "client",
    hasCase: true,
    images: [
      oneMacasa,
      twoMacasa,
      threeMacasa,
      fourMacasa,
      fiveMacasa,
      sixMacasa,
    ],
    tags: ["Next.js", "React", "Tailwind CSS"],
    links: { site: "https://macasa-desarrollos.vercel.app/" },
  },
  {
    id: "pi",
    type: "bootcamp",
    hasCase: false,
    images: [onePi, twoPi, threePi, fourPi, fivePi],
    tags: ["React", "Redux", "PostgreSQL", "Node.js", "Express"],
    links: {
      site: "https://pi-videogames-front-weld.vercel.app/",
      github: "https://github.com/NachoMaraude/PI-Videogames",
    },
  },
  {
    id: "foodify",
    type: "bootcamp",
    hasCase: false,
    images: [one, two, three, four],
    tags: ["React", "Redux", "Node.js", "PostgreSQL"],
    links: {
      site: "https://foodify-ten.vercel.app/",
      github: "https://github.com/NachoMaraude/Foodify",
    },
  },
];
