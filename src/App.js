import "./App.css";
import About from "./components/About/About";
import NavBar from "./components/NavBar/NavBar";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import ScrollToTop from "react-scroll-to-top";
import Title from "./components/Title/Title";

function App() {
    return (
        <div>
            <ScrollToTop
                color="#90a0d9"
                width="40px"
                style={{ backgroundColor: "#475569" }}
            />
            <NavBar />
            <Title />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
