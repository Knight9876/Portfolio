import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeader from "../../components/ui/SectionHeader";
import skills from "../../data/skills";

const Skills = () => {
  const skillsContainerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const badges = skillsContainerRef.current.querySelectorAll(".skill-badge");
    
    gsap.fromTo(
      badges,
      { 
        opacity: 0, 
        y: 20 
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "back.out(1.7)", // Subtle "pop" effect
        stagger: 0.05,
        scrollTrigger: {
          trigger: skillsContainerRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section className="skills-section py-20">
      <SectionHeader title="Skills" />
      <div className="container mx-auto px-4">
        <div ref={skillsContainerRef} className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`skill-badge flex items-center gap-2 ${skill.color} ${skill.darkBgColor} ${skill.textColor} ${skill.darkTextColor} px-5 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 font-medium`}
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
