import React, { useRef } from "react";
import SectionHeader from "../../components/ui/SectionHeader";
import useScrollReveal from "../../hooks/useScrollReveal";

const AboutMe = () => {
  const aboutRef = useRef(null);

  // Use the hook to animate paragraphs within the container with a stagger effect
  useScrollReveal(aboutRef, {
    from: { opacity: 0, y: 30 },
    to: { 
      opacity: 1, 
      y: 0, 
      duration: 1, 
      ease: "power2.out", 
      stagger: 0.3 // This will animate children one by one
    }
  });

  return (
    <div id="about" className="about-me-div py-20 transition-colors duration-500">
      <SectionHeader title="About Me" />
      <div ref={aboutRef} className="container mx-auto px-4 max-w-4xl">
        <p className="text-lg mb-6 leading-relaxed text-slate-700 dark:text-slate-300 opacity-0">
          I'm a frontend developer passionate about crafting clean, interactive,
          and user-friendly web experiences. I thrive on transforming complex
          ideas into intuitive interfaces, leveraging modern technologies like
          React, TypeScript, Next.js, and Electron to build responsive web and
          cross-platform desktop applications.
        </p>
        <p className="text-lg mb-6 leading-relaxed text-slate-700 dark:text-slate-300 opacity-0">
          I enjoy bringing designs to life with maintainable, reusable code,
          implementing smooth animations, optimizing performance, and creating
          seamless user experiences. Through personal projects and contract
          work, I've gained hands-on experience building dynamic web pages,
          reusable components, and mobile apps with React Native and Expo.
        </p>
        <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 opacity-0">
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
