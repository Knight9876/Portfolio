import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import InternshipCard from "./InternshipCard";
import experiences from "../data/experiences";
import ExperienceCard from "./ExperienceCard";

const Experiences = () => {
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // header
    gsap.fromTo(
      headerRef.current,
      {
        x: -270, // Start from offscreen (left)
        willChange: "transform", // Hint for optimization
      },
      {
        x: 0, // End at original position
        duration: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: headerRef.current, // Trigger animation when the header enters the viewport
          start: "top 90%", // Adjust this value to control when the animation starts
          toggleActions: "play reverse play reverse", // Repeat on scroll
        },
      }
    );

      // Experience cards animation
  // Experience cards animation
  cardsRef.current.forEach((card, index) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play reverse play reverse",
      },
    });

    tl.fromTo(
      card,
      {
        opacity: 0,
        scale: 0.7,
        rotationY: 180, // Start with a twist
        y: 100, // Start from below
        z: 200, // Start further out for 3D effect
        ease: "power4.out",
        willChange: "transform, opacity", // Optimization hint
      },
      {
        opacity: 1,
        scale: 1,
        rotationY: 0, // End at normal rotation
        y: 0, // End at normal position
        z: 0, // End at normal position
        duration: 1.5,
        ease: "power4.out",
        delay: index * 0.3, // Stagger with a delay for sequential entrance
      }
    )
      .to(
        card,
        {
          scale: 1.05, // Slight overscale
          rotationX: 15, // Add some X-axis rotation
          duration: 0.3,
          ease: "back.out(2.0)", // Bounce-like easing
        },
        "-=0.5" // Overlap with previous animation for smoother flow
      )
      .to(
        card,
        {
          scale: 1, // Settle back to normal size
          rotationX: 0, // Reset rotation
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.2" // Sync with the earlier animation
      );
  });
}, []);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section id="experiences" className="pb-20 text-start dark:drop-shadow-customPurpleDropShadow">
      <div className="flex flex-row items-center pb-8 -ml-1.5">
        <div className="border-r-8 border-customPurple bg-white dark:bg-black rounded-lg pb-8 z-10">
          &nbsp;
        </div>
        <h1 ref={headerRef} className="text-4xl font-bold text-start pl-8 z-0 transition-colors duration-500 dark:drop-shadow-customPurpleDropShadow">
          Experiences
        </h1>
      </div>
      <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center gap-8">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
              addToRefs={addToRefs} // Pass ref to track the card
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
