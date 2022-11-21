import Home from "./components/Home/Home";
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
            <Home />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
