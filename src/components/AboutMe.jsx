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

    // about paragraphs
    const paragraphs = aboutRef.current.querySelectorAll("p");

    paragraphs.forEach((para, index) => {
      gsap.fromTo(
        para,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: para,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div
      id="about"
      className="about-me-div py-20 transition-colors duration-500"
    >
      <div className="flex flex-row items-center mb-12">
        <div className="w-2 h-10 bg-primary-light dark:bg-primary-dark rounded-full">
        </div>
        <h1
          ref={headerRef}
          className="text-4xl font-extrabold text-start pl-6 tracking-tight"
        >
          About Me
        </h1>
      </div>
      <div ref={aboutRef} className="container mx-auto px-4 max-w-4xl">
        <p className="text-lg mb-6 leading-relaxed text-slate-700 dark:text-slate-300">
          I'm a frontend developer passionate about crafting clean, interactive,
          and user-friendly web experiences. I thrive on transforming complex
          ideas into intuitive interfaces, leveraging modern technologies like
          React, TypeScript, Next.js, and Electron to build responsive web and
          cross-platform desktop applications.
        </p>
        <p className="text-lg mb-6 leading-relaxed text-slate-700 dark:text-slate-300">
          I enjoy bringing designs to life with maintainable, reusable code,
          implementing smooth animations, optimizing performance, and creating
          seamless user experiences. Through personal projects and contract
          work, I've gained hands-on experience building dynamic web pages,
          reusable components, and mobile apps with React Native and Expo.
        </p>
        <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
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
