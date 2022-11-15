import image from "../images/descarga2.png";

export default function Home() {
    return (
        <div id="about" className="w-full h-full mt-20 pt-20 text-[#90a0d9]">
            <h1 className="font-bold text-8xl m-6 ml-40 text-left">
                Hi! I am Juan Ignacio
            </h1>
            <h2 className="italic text-7xl w-[80%] m-6 ml-40 text-right">
                Full Stack Web Developer & Web Designer
            </h2>
            <div className="flex gap-8  m-3 mt-20">
                <div className="flex-row ml-10">
                    <img
                        src={image}
                        className="h-80 w-72 rounded-full "
                        alt=""
                    />
                </div>
                <div className="flex-row w-[80%] ml-32">
                    <p className="text-4xl items-end justify-center mt-12 font-sans">
                        I'm curious, I enjoy fixing bugs and I'm always learning
                        new technologies to increase my knowledge. Recently, I
                        learned agile methodologies like scrum and I learned
                        tools like Redux Toolkit and Tailwind while working on
                        my final project in Soy Henry Bootcamp with 6 teammates.
                        I hope overpass new challenges and grow as Software
                        Developer.
                    </p>
                </div>
            </div>
        </div>
    );
}
