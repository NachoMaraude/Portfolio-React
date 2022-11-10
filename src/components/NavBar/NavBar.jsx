import { Link } from "react-scroll";

export default function NavBar() {
    return (
        <div className="text-center font-mono font-bold h-20 items-center justify-center flex text-[#90a0d9]">
            <Link
                to="about"
                className="m-8 hover:cursor-pointer text-2xl hover:text-3xl hover:text-[#b7c0e2]"
            >
                About Me
            </Link>
            <Link
                to="skills"
                className="m-8 hover:cursor-pointer text-2xl hover:text-3xl hover:text-[#b7c0e2]"
            >
                Skills
            </Link>
            {/* <button>Refresh</button> */}
            <a href="/" className="m-8  hover:text-[#b7c0e2]">
                <svg
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
                </svg>
            </a>

            <Link
                to="projects"
                className="m-8 hover:cursor-pointer text-2xl hover:text-3xl hover:text-[#b7c0e2]"
            >
                Projects
            </Link>
            <Link
                to="contact"
                className="m-8 hover:cursor-pointer text-2xl hover:text-3xl hover:text-[#b7c0e2]"
            >
                Contact Me
            </Link>
        </div>
    );
}
