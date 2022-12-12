import image from "../images/descarga2.png";
import { useTranslation } from "react-i18next";

export default function About() {
    const [t] = useTranslation("global");
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
                    {t("about.p")}
                </p>
            </div>
        </div>
    );
}
