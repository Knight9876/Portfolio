import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Hero from "./components/Hero";
import Header from "./components/Header";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
// import Internships from "./components/Internships";
import ContactMe from "./components/ContactMe";
import Experiences from "./components/Experiences";

function App() {
  return (
    <div className="App tracking-widest scrollbar-custom bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-200 transition-colors duration-500">
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <Experiences />
      <Projects />
      {/* <Internships /> */}
      <ContactMe />
    </div>
  );
}

export default App;
