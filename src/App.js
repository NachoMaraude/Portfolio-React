import About from "./components/About/About";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import ScrollToTop from "react-scroll-to-top";

function App() {
    return (
        <div>
            <ScrollToTop
                color="#90a0d9"
                width="40px"
                style={{ backgroundColor: "#475569" }}
            />
            <NavBar />
            <div className="w-full h-full mt-[3%] pt-[7%] text-[#90a0d9]">
                <h1 className="font-bold text-8xl m-[1%] ml-[9%] text-left">
                    Hi! I am Juan Ignacio
                </h1>
                <h2 className="italic text-7xl w-[80%] m-[1.5%] ml-[9%] text-right">
                    Full Stack Web Developer & Web Designer
                </h2>
            </div>
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
