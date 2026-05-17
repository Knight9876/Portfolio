import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeader from "../../components/ui/SectionHeader";
import experiences from "../../data/experiences";
import ExperienceCard from "./ExperienceCard";

const Experiences = () => {
  const cardsRef = useRef([]);
  cardsRef.current = [];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Unique 3D Tilt-Up reveal for Experience cards
    cardsRef.current.forEach((ref, index) => {
      gsap.fromTo(
        ref,
        { 
          opacity: 0, 
          y: 40,
          rotationX: -15, // Tilt back
          transformPerspective: 1000,
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0, // Settle to flat
          duration: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section id="experiences" className="py-20 text-start overflow-hidden">
      <SectionHeader title="Experience" />
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
              ref={addToRefs}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
