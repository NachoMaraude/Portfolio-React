import image from "../images/descarga2.png";

export default function About() {
    return (
        <div
            id="about"
            className="w-full h-full mt-[2%] pt-[3%] flex gap-[4%]  text-[#90a0d9]"
        >
            <div className="flex-row ml-[3%]">
                <img src={image} className="w-72 rounded-full " alt="" />
            </div>
            <div className="flex-row w-[80%] ml-[5.5%] m-[1%]">
                <p className="text-4xl items-end justify-center mt-[2.5%] font-sans">
                    I'm curious, I enjoy fixing bugs and I'm always learning new
                    technologies to increase my knowledge. Recently, I learned
                    agile methodologies like scrum and I learned tools like
                    Redux Toolkit and Tailwind while working on my final project
                    in Soy Henry Bootcamp with 6 teammates. I hope overpass new
                    challenges and grow as Software Developer.
                </p>
            </div>
        </div>
    );
}
