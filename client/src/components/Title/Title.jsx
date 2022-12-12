import { useTranslation } from "react-i18next";

export default function Title() {
    const [t] = useTranslation("global");
    return (
        <div className="w-full h-full mt-[3%] pt-[7%] text-[#90a0d9]">
            <h1 className="font-bold text-8xl m-[1%] ml-[9%] text-left">
                {t("title.h1")}
            </h1>
            <h2 className="italic text-7xl w-[85%] m-[1.5%] ml-[9%] text-right">
                {t("title.h2")}
            </h2>
        </div>
    );
}
