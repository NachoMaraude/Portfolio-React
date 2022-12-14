import one from "../images/foodify/one.png";
import two from "../images/foodify/two.png";
import three from "../images/foodify/three.png";
import four from "../images/foodify/four.png";
import onePi from "../images/pi/one.png";
import twoPi from "../images/pi/two.png";
import threePi from "../images/pi/three.png";
import fourPi from "../images/pi/four.png";
import fivePi from "../images/pi/five.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useTranslation } from "react-i18next";

export default function Projects() {
    const [t] = useTranslation("global");
    return (
        <div
            id="projects"
            className="w-full h-full  text-[#90a0d9] pt-[5%] mt-[9%]"
        >
            <h1 className="font-bold text-8xl m-6  text-center">
                {t("projects.h1")}
            </h1>
            <div className="flex gap-8 justify-center text-4xl mt-20">
                <div className="card w-[40vw] bg-slate-600  shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-3xl justify-center">
                            Videogames APP
                        </h2>
                        <p className="text-2xl mt-[2%]">
                            {t("projects.piDescription")}
                        </p>
                    </div>

                    <figure className="m-5 rounded-2xl">
                        <Carousel
                            showArrows={true}
                            showThumbs={false}
                            transitionTime="400"
                            infiniteLoop={true}
                        >
                            <div>
                                <img src={onePi} />
                            </div>
                            <div>
                                <img src={twoPi} />
                            </div>
                            <div>
                                <img src={threePi} />
                            </div>
                            <div>
                                <img src={fourPi} />
                            </div>
                            <div>
                                <img src={fivePi} />
                            </div>
                        </Carousel>
                        {/* <img src={one} alt="one" className="rounded-xl" /> */}
                    </figure>
                    <div className="flex justify-around ">
                        <div>
                            <a
                                href="https://pi-videogames-front-weld.vercel.app/"
                                target="_blank"
                            >
                                <img
                                    src="https://github.com/NachoMaraude/PI-Videogames/blob/main/client/src/Images/EQUIS.jpg?raw=true"
                                    alt="PI-Videogames"
                                    className="h-24 w-24  rounded-full bg-slate-800 mb-5"
                                />
                            </a>
                        </div>
                        <div>
                            <a
                                href="https://github.com/NachoMaraude/PI-Videogames"
                                target="_blank"
                            >
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                                    alt="github"
                                    className="w-24 h-24 mb-5"
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card w-[40vw] bg-slate-600 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-3xl justify-center">
                            Foodify
                        </h2>
                        <p className="text-2xl mt-[2%]">
                            {t("projects.foodifyDescription")}
                        </p>
                    </div>

                    <figure className="m-5 rounded-2xl">
                        <Carousel
                            showArrows={true}
                            showThumbs={false}
                            transitionTime="400"
                            infiniteLoop={true}
                        >
                            <div>
                                <img src={one} />
                            </div>
                            <div>
                                <img src={two} />
                            </div>
                            <div>
                                <img src={three} />
                            </div>
                            <div>
                                <img src={four} />
                            </div>
                        </Carousel>
                        {/* <img src={one} alt="one" className="rounded-xl" /> */}
                    </figure>
                    <div className="flex justify-around ">
                        <div>
                            <a
                                href="https://foodify-ten.vercel.app/"
                                target="_blank"
                            >
                                <img
                                    src="https://foodify-ten.vercel.app/static/media/LogoMain.11bfbccadf5b1918e001.png"
                                    alt="foodify"
                                    className="h-24 w-24  rounded-full bg-slate-50 mb-5"
                                />
                            </a>
                        </div>
                        <div>
                            <a
                                href="https://github.com/NachoMaraude/Foodify"
                                target="_blank"
                            >
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                                    alt="github"
                                    className="w-24 h-24 mb-5"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
