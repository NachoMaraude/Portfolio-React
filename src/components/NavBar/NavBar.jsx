import { Link } from "react-scroll";
import jm from "../images/jm.jpg";
import image from "../images/descarga2.png";

export default function NavBar() {
    return (
        <div className=" w-full fixed top-0 z-50  text-center font-mono font-bold justify-around h-20 bg-slate-600  items-center flex text-[#90a0d9]">
            <a href="/" className="m-8  hover:text-[#b7c0e2]">
                {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 hover:w-10 hover:h-10"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                    />
                </svg> */}
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
            {/* <button>Refresh</button> */}

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
