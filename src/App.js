import React, { Suspense, lazy } from "react";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Header } from "./components";
import { Hero, AboutMe, Skills } from "./features";

// Lazy load lower-page sections for performance optimization
const Experiences = lazy(() => import("./features/experience/Experiences"));
const Projects = lazy(() => import("./features/projects/Projects"));
// const Internships = lazy(() => import("./features/internships/Internships"));
const ContactMe = lazy(() => import("./features/contact/ContactMe"));

// Loading fallback component
const SectionLoader = () => (
  <div className="py-20 flex justify-center items-center">
    <div className="animate-pulse text-primary-light font-medium">Loading section...</div>
  </div>
);

function App() {
  return (
    <div className="App tracking-widest scrollbar-custom bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-200 transition-colors duration-500">
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      
      {/* Dynamic sections loaded on demand */}
      <Suspense fallback={<SectionLoader />}>
        <Experiences />
        <Projects />
        {/* <Internships /> */}
        <ContactMe />
      </Suspense>
    </div>
  );
}

export default App;
