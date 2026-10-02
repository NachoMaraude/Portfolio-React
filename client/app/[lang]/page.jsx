import About from "@/components/About/About";
import NavBar from "@/components/NavBar/NavBar";
import Skills from "@/components/Skills/Skills";
import Contact from "@/components/Contact/Contact";
import Projects from "@/components/Projects/Projects";
import Title from "@/components/Title/Title";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { getDictionary } from "@/dictionaries";
import { getSiteUrl } from "@/lib/site";

function personJsonLd(lang, dict) {
  const base = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Juan Ignacio Maraude",
    jobTitle: dict.meta.jobTitle,
    description: dict.meta.description,
    url: `${base}/${lang}`,
    image: `${base}/descarga2.png`,
    email: "mailto:maraudenacho@gmail.com",
    knowsAbout: ["React", "Next.js", "Tiendanube", "E-commerce", "Meta Ads"],
    sameAs: [
      "https://github.com/NachoMaraude",
      "https://www.linkedin.com/in/juan-ignacio-maraude-8a0694210/",
    ],
  };
}

export default async function Home({ params }) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  return (
    <div className="bg-[#0d1117] min-h-screen text-[#c4cde8]">
      <script
        type="application/ld+json"
        // Escapa "<" para que el JSON no pueda cerrar la etiqueta script.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd(lang, dict)).replace(/</g, "\\u003c"),
        }}
      />
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
