import { Tooltip } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";

export default function Skills() {
    const [t] = useTranslation("global");
    return (
        <div id="skills" className=" w-full h-full pt-[5%] mt-[7%] ">
            <h1 className="text-8xl text-center font-bold text-[#90a0d9]">
                {t("skills.h1")}
            </h1>
            <div className="flex items-center justify-around gap-8 m-10 mt-20 ">
                <Tooltip
                    content="CSS"
                    className="text-[#90a0d9] bg-[#202438] border-2 border-[#202438] rounded-full text-xl"
                >
                    <div className="rounded-full flex w-[6%] h-24 justify-center bg-[#90a0d9] ">
                        <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                            alt="css3"
                            width="80%"
                            height="80%"
                        />
                    </div>
                </Tooltip>
                <Tooltip
                    content="Express"
                    className="text-[#90a0d9] bg-[#202438] border-2 border-[#202438] rounded-full text-xl"
                >
                    <div className="rounded-full flex w-[6%] h-24 justify-center bg-[#90a0d9] ">
                        <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                            alt="express"
                            width="80%"
                            height="80%"
                        />
                    </div>
                </Tooltip>
                <Tooltip
                    content="Git"
                    className="text-[#90a0d9] bg-[#202438] border-2 border-[#202438] rounded-full text-xl"
                >
                    <div className="rounded-full flex w-[6%] h-24 justify-center bg-[#90a0d9] ">
                        <img
                            src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                            alt="git"
                            width="80%"
                            height="80%"
                        />
                    </div>
                </Tooltip>
                <Tooltip
                    content="HTML"
                    className="text-[#90a0d9] bg-[#202438] border-2 border-[#202438] rounded-full text-xl"
                >
                    <div className="rounded-full flex w-[6%] h-24 justify-center bg-[#90a0d9] ">
                        <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                            alt="html5"
                            width="80%"
                            height="80%"
                        />
                    </div>
                </Tooltip>
                <Tooltip
                    content="JavaScript"
                    className="text-[#90a0d9] bg-[#202438] border-2 border-[#202438] rounded-full text-xl"
                >
                    <div className="rounded-full flex w-[6%] h-24 justify-center bg-[#90a0d9] ">
                        <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                            alt="javascript"
                            width="60%"
                            height="60%"
                        />
                    </div>
                </Tooltip>
                <Tooltip
                    content="NodeJS "
                    className="text-[#90a0d9] bg-[#202438] border-2 border-[#202438] rounded-full text-xl"
                >
                    <div className="rounded-full flex w-[6%] h-24 justify-center bg-[#90a0d9] ">
                        <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                            alt="nodejs"
                            width="80"
                            height="80"
                        />
                    </div>
                </Tooltip>
                <Tooltip
                    content="PostgreSQL"
                    className="text-[#90a0d9] bg-[#202438] border-2 border-[#202438] rounded-full text-xl"
                >
                    <div className="rounded-full flex w-[6%] h-24 justify-center bg-[#90a0d9] ">
                        <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
                            alt="postgresql"
                            width="75%"
                            height="75%"
                        />
                    </div>
                </Tooltip>
                <Tooltip
                    content="React"
                    className="text-[#90a0d9] bg-[#202438] border-2 border-[#202438] rounded-full text-xl"
                >
                    <div className="rounded-full flex w-[6%] h-24 justify-center bg-[#90a0d9] ">
                        <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                            alt="react"
                            width="80%"
                            height="80%"
                        />
                    </div>
                </Tooltip>
                <Tooltip
                    content="Redux"
                    className="text-[#90a0d9] bg-[#202438] border-2 border-[#202438] rounded-full text-xl"
                >
                    <div className="rounded-full flex w-[6%] h-24 justify-center bg-[#90a0d9] ">
                        <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                            alt="redux"
                            width="80%"
                            height="80%"
                        />
                    </div>
                </Tooltip>
                <Tooltip
                    content="Tailwind"
                    className="text-[#90a0d9] bg-[#202438] border-2 border-[#202438] rounded-full text-xl"
                >
                    <div className="rounded-full flex w-[6%] h-24 justify-center bg-[#90a0d9] ">
                        <img
                            src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                            alt="tailwind"
                            width="80%"
                            height="80%"
                        />
                    </div>
                </Tooltip>
                <Tooltip
                    content="MongoDB"
                    className="text-[#90a0d9] bg-[#202438] border-2 border-[#202438] rounded-full text-xl"
                >
                    <div className="rounded-full flex w-[6%] h-24 justify-center bg-[#90a0d9] ">
                        <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                            alt="mongodb"
                            width="80%"
                            height="80%"
                        />
                    </div>
                </Tooltip>
            </div>
        </div>
    );
}
