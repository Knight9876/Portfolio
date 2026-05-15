import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import InternshipCard from "./InternshipCard";
import internships from "../data/internships";

const Internships = () => {
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

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

    // internship cards - staggered appearance
    if (cardsRef.current.length > 0) {
      gsap.fromTo(
        cardsRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.1,
          ease: "power2.out",
          stagger: 0.2, // This makes cards appear one after another
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
    <section
      id="internships"
      className="py-20 text-start"
    >
      <div className="flex flex-row items-center mb-12">
        <div className="w-2 h-10 bg-primary-light dark:bg-primary-dark rounded-full">
        </div>
        <h1
          ref={headerRef}
          className="text-4xl font-extrabold text-start pl-6 tracking-tight"
        >
          Internships
        </h1>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {internships.map((internship, index) => (
            <InternshipCard
              key={index}
              internship={internship}
              addToRefs={addToRefs}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;
