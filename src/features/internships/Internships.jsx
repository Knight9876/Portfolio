import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeader from "../../components/ui/SectionHeader";
import InternshipCard from "./InternshipCard";
import internships from "../../data/internships";

const Internships = () => {
  const cardsRef = useRef([]);
  cardsRef.current = [];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (cardsRef.current.length > 0) {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power1.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: cardsRef.current[0],
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section id="internships" className="py-20 text-start">
      <SectionHeader title="Internships" />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {internships.map((internship, index) => (
            <InternshipCard
              key={index}
              internship={internship}
              ref={addToRefs}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;
