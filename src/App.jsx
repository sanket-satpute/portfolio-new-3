import { useMemo } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { navItems } from "./data/siteData";
import { useScrollSpy } from "./hooks/useScrollSpy";
import { useStaggerReveal } from "./hooks/useScrollReveal";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function Portfolio() {
  const sectionIds = useMemo(() => navItems.map((i) => i.id), []);
  const activeSection = useScrollSpy(sectionIds);

  useStaggerReveal(".project-grid");
  useStaggerReveal(".skills-grid");
  useStaggerReveal(".approach-grid");

  return (
    <div className="page">
      <Navbar activeSection={activeSection} />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  );
}
