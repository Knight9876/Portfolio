import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "./ProjectCard";

import projects from "../data/projects";

const Projects = () => {
  const projectRefs = useRef([]);
  const headerRef = useRef(null);
  projectRefs.current = [];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // header
    gsap.fromTo(
      headerRef.current,
      {
        opacity: 0,
        x: -50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // projects animation - slide from sides
    projectRefs.current.forEach((ref, index) => {
      const isEven = index % 2 === 0;
      gsap.fromTo(
        ref,
        {
          opacity: 0,
          x: isEven ? -100 : 100,
        },
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
    <section
      id="projects"
      className="projects-section py-20 transition-colors duration-500"
    >
      <div className="flex flex-row items-center mb-12">
        <div className="w-2 h-10 bg-primary-light dark:bg-primary-dark rounded-full">
        </div>
        <h1
          ref={headerRef}
          className="text-4xl font-extrabold text-start pl-6 tracking-tight"
        >
          Projects
        </h1>
      </div>
      <div className="container mx-auto px-4">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            index={index}
            addToRefs={addToRefs}
            settings={settings}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
