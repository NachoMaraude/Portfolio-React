import { Link } from "react-scroll";
import jm from "../images/jm.jpg";
import image from "../images/descarga2.png";

export default function NavBar() {
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
                spy={true}
            >
                About Me
            </Link>
            <Link
                to="skills"
                className="m-8  hover:cursor-pointer text-2xl w-32 hover:text-3xl hover:text-[#b7c0e2]"
                activeClass="active"
                spy={true}
            >
                Skills
            </Link>
            <Link
                to="projects"
                className="m-8  hover:cursor-pointer text-2xl w-40 hover:text-3xl hover:text-[#b7c0e2]"
                activeClass="active"
                spy={true}
            >
                Projects
            </Link>
            <Link
                to="contact"
                className="m-8 hover:cursor-pointer text-2xl w-48 hover:text-3xl hover:text-[#b7c0e2]"
                activeClass="active"
                spy={true}
            >
                Contact Me
            </Link>
        </div>
    );
}
