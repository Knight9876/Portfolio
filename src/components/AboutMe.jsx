import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutMe = () => {
  const headerRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // header
    gsap.fromTo(
      headerRef.current,
      {
        x: -230,
        willChange: "transform", // Hint for optimization // Start from offscreen (left)
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

    // about
    const paragraphs = aboutRef.current.querySelectorAll("p");

    paragraphs.forEach((para, index) => {
      const delay = index * 0.2; // Adding a delay between paragraphs

      gsap.fromTo(
        para,
        {
          opacity: 0,
          scale: 0.8,
          willChange: "transform, opacity", // Hint for optimization
        },
        {
          opacity: 1,
          scale: window.innerWidth >= 768 ? 1.1 : 1, // Scale only for larger screens
          duration: 2.5, // Slower animation for a more dramatic effect
          ease: "elastic.out(1, 0.5)", // Adds a bouncy, elastic easing
          delay, // Staggering each paragraph with a delay
          scrollTrigger: {
            trigger: para, // Trigger each paragraph individually
            start: "top 95%",
            end: "top 75%", // Adjusting to trigger the end sooner
            toggleActions: "play reverse play reverse",
            scrub: 1, // Smooth scrolling effect
          },
          onComplete: () => {
            gsap.to(para, {
              scale: 1, // Bounce back to normal
              rotation: 0,
              skewX: 0, // Reset skew
              duration: 0.5, // Slower bounce-back duration
              ease: "elastic.out(1, 0.3)", // Smooth elastic effect for bounce back
            });
          },
        }
      );
    });
  }, []);

  return (
    <div
      id="about"
      className="about-me-div pb-20 transition-colors duration-500 dark:drop-shadow-customPurpleDropShadow"
    >
      <div className="flex flex-row items-center pb-8 -ml-1.5">
        <div className="border-r-8 border-customPurple bg-white dark:bg-black rounded-lg pb-8 z-10">
          &nbsp;
        </div>
        <h1
          ref={headerRef}
          className="text-4xl font-bold text-start pl-8 z-0 font-black dark:drop-shadow-customPurpleDropShadow"
        >
          About Me
        </h1>
      </div>
      <div ref={aboutRef} className="container mx-auto px-4 text-justify">
        <p className="text-lg mb-6 md:mb-4 ">
          I'm a frontend developer passionate about crafting clean, interactive,
          and user-friendly web experiences. I thrive on transforming complex
          ideas into intuitive interfaces, leveraging modern technologies like
          React, TypeScript, Next.js, and Electron to build responsive web and
          cross-platform desktop applications.
        </p>
        <p className="text-lg mb-6 md:mb-4 ">
          I enjoy bringing designs to life with maintainable, reusable code,
          implementing smooth animations, optimizing performance, and creating
          seamless user experiences. Through personal projects and contract
          work, I've gained hands-on experience building dynamic web pages,
          reusable components, and mobile apps with React Native and Expo.
        </p>
        <p className="text-lg ">
          Always eager to learn and grow, I'm looking for opportunities to
          contribute to innovative projects, collaborate with experienced teams,
          and expand my skill set in the fast-paced world of frontend
          development.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
