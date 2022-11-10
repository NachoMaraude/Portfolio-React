import Home from "./components/Home/Home";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";

function App() {
    return (
        <div>
            <NavBar />
            <Home />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
