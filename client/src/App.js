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
    <div className="bg-[#0d1117] min-h-screen text-[#c4cde8]">
      <ScrollToTop
        color="#90a0d9"
        width="14px"
        height="14px"
        style={{
          backgroundColor: "#161b2e",
          border: "1px solid #2d3555",
          borderRadius: "8px",
          padding: "12px",
          bottom: "24px",
          right: "24px",
        }}
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
