import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeader from "../../components/ui/SectionHeader";
import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projectRefs = useRef([]);
  projectRefs.current = [];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // projects animation - slide from sides
    projectRefs.current.forEach((ref, index) => {
      const isEven = index % 2 === 0;
      gsap.fromTo(
        ref,
        { opacity: 0, x: isEven ? -100 : 100 },
        {
          opacity: 1,
          x: 0,
          duration: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !projectRefs.current.includes(el)) {
      projectRefs.current.push(el);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <section id="projects" className="projects-section py-20 transition-colors duration-500">
      <SectionHeader title="Projects" />
      <div className="container mx-auto px-4">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            index={index}
            ref={addToRefs}
            settings={settings}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
