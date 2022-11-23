import resume from "../resume.pdf";

export default function Contact() {
    return (
        <div
            id="contact"
            className="pt-20 gap-10 mt-40 w-full items-center justify-center h-[100vh]"
        >
            <h1 className="text-8xl font-bold text-center text-[#90a0d9]">
                Contact Me
            </h1>
            <div className="flex gap-10 mt-20 w-[60%] ml-[20%] items-center h-20  justify-around">
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
                <a
                    href={resume}
                    download="Juan Ignacio Maraude - Resume"
                    target="_blank"
                    className="text-[#90a0d9] bg-[#23283e] font-bold text-2xl border-4 border-[#475569] hover:text-[#23283e]  hover:bg-[#90a0d9] hover:transition-all rounded-full justify-center text-center pt-[1.7%] w-[30%] h-20 hover:h-24 hover:pt-[2.4%]"
                >
                    Download resume
                </a>
                <a href="https://github.com/NachoMaraude" target="_blank">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                        alt="github"
                        className="w-20 h-20 hover:w-24 hover:h-24 "
                    />
                </a>
            </div>
        </div>
    );
}
