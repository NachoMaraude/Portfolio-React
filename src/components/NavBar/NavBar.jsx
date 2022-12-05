import { Link } from "react-scroll";
import image from "../images/descarga2.png";
import { useTranslation } from "react-i18next";

export default function NavBar() {
    const [t, i18n] = useTranslation("global");
    return (
        <div className=" w-full fixed top-0 z-50  text-center font-mono font-bold justify-around h-20 bg-slate-600  items-center flex text-[#90a0d9]">
            <a href="/" className="m-8  hover:text-[#b7c0e2]">
                <img
                    src={image}
                    alt="image"
                    className="w-12 h-12 rounded-full"
                />
            </a>
            <Link
                to="about"
                className=" m-8  hover:cursor-pointer text-2xl w-36 hover:text-3xl hover:text-[#b7c0e2]"
                activeClass="active"
                spy
            >
                {t("navBar.about")}
            </Link>
            <Link
                to="skills"
                className="m-8  hover:cursor-pointer text-2xl w-48 hover:text-3xl hover:text-[#b7c0e2]"
                activeClass="active"
                spy
            >
                {t("navBar.skills")}
            </Link>
            <Link
                to="projects"
                className="m-8  hover:cursor-pointer text-2xl w-40 hover:text-3xl hover:text-[#b7c0e2]"
                activeClass="active"
                spy
            >
                {t("navBar.projects")}
            </Link>
            <Link
                to="contact"
                className="m-8 hover:cursor-pointer text-2xl w-48 hover:text-3xl hover:text-[#b7c0e2]"
                activeClass="active"
                spy
            >
                {t("navBar.contact")}
            </Link>
            <select
                onChange={(e) => i18n.changeLanguage(e.target.value)}
                className="text-2xl bg-slate-600 text-center m-8 w-40 "
            >
                <option value="en">English</option>
                <option value="es">Español</option>
            </select>
        </div>
    );
}
