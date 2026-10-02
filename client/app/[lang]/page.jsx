import About from "@/components/About/About";
import NavBar from "@/components/NavBar/NavBar";
import Skills from "@/components/Skills/Skills";
import Contact from "@/components/Contact/Contact";
import Projects from "@/components/Projects/Projects";
import Title from "@/components/Title/Title";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { getDictionary } from "@/dictionaries";

export default async function Home({ params }) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  return (
    <div className="bg-[#0d1117] min-h-screen text-[#c4cde8]">
      <ScrollToTopButton />
      <NavBar lang={lang} dict={{ navBar: dict.navBar }} />
      <Title dict={dict} />
      <About dict={dict} />
      <Skills dict={dict} />
      <Projects dict={{ projects: dict.projects }} />
      <Contact lang={lang} dict={{ contact: dict.contact }} />
    </div>
  );
}
