import resume from "../resume.pdf";

export default function Contact() {
    return (
        <div
            id="contact"
            className="pt-20 gap-10 mt-40 w-full items-center justify-center"
        >
            <h1 className="text-8xl font-bold text-center text-[#90a0d9]">
                Contact Me
            </h1>
            <div className="flex gap-10 mt-20 w-full items-center justify-center">
                <a
                    href="https://www.linkedin.com/in/juan-ignacio-maraude-8a0694210/"
                    target="_blank"
                >
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                        alt="linkedin"
                        className="w-20 h-20 hover:w-24 hover:h-24"
                    />
                </a>
                <a href="https://github.com/NachoMaraude" target="_blank">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                        alt="github"
                        className="w-20 h-20 hover:w-24 hover:h-24"
                    />
                </a>
                <a
                    href={resume}
                    download="Juan Ignacio Maraude - Resume"
                    target="_blank"
                    className="text-[#90a0d9] text-2xl bg-[#475569] text-center rounded-full w-52"
                >
                    Download resume
                </a>
            </div>
        </div>
    );
}
