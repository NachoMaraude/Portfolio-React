import { Tooltip } from "@material-tailwind/react";

export default function Skills() {
    return (
        <div id="skills" className=" w-full h-full mt-40">
            <h1 className="text-8xl text-center font-bold text-[#90a0d9]">
                Skills
            </h1>
            <div className="flex items-center justify-center gap-8  m-10 mt-20">
                <Tooltip
                    content="Material Tailwind"
                    className="text-[#90a0d9] "
                >
                    <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                        alt="css3"
                        width="80"
                        height="80"
                    />
                </Tooltip>
                <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                    alt="express"
                    width="80"
                    height="80"
                />

                <img
                    src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                    alt="git"
                    width="80"
                    height="80"
                />

                <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                    alt="html5"
                    width="80"
                    height="80"
                />

                <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                    alt="javascript"
                    width="80"
                    height="80"
                />
                <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                    alt="nodejs"
                    width="80"
                    height="80"
                />
                <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
                    alt="postgresql"
                    width="80"
                    height="80"
                />
                <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                    alt="react"
                    width="80"
                    height="80"
                />
                <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                    alt="redux"
                    width="80"
                    height="80"
                />
                <img
                    src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                    alt="tailwind"
                    width="80"
                    height="80"
                />
            </div>
        </div>
    );
}
