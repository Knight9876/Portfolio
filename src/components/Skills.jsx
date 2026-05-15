import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import skills from "../data/skills";

const Skills = () => {
  const skillRef = useRef([]);
  const headerRef = useRef(null);

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

    // skill badges
    gsap.fromTo(
      skillRef.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.05,
        scrollTrigger: {
          trigger: skillRef.current[0],
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section className="skills-section py-20">
      <div className="flex flex-row items-center mb-12">
        <div className="w-2 h-10 bg-primary-light dark:bg-primary-dark rounded-full">
        </div>
        <h1
          ref={headerRef}
          className="text-4xl font-extrabold text-start pl-6 tracking-tight"
        >
          Skills
        </h1>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              ref={(el) => (skillRef.current[index] = el)}
              className={`flex items-center gap-2 ${skill.color} ${skill.darkBgColor} ${skill.textColor} ${skill.darkTextColor} px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300 font-medium`}
            >
              <img src={skill.logo} alt={skill.name} className="w-5 h-5" />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
