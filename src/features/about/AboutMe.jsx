import React, { useRef } from "react";
import SectionHeader from "../../components/ui/SectionHeader";
import useScrollReveal from "../../hooks/useScrollReveal";

const AboutMe = () => {
  const aboutRef = useRef(null);

  // Animate paragraphs
  const animateParagraphs = (el) => {
    if (!el) return;
    const paragraphs = el.querySelectorAll("p");
    paragraphs.forEach((para) => {
      // We can't use the hook easily inside a loop without creating a sub-component, 
      // but for simplicity here we'll just use a direct GSAP call or multiple hooks if we had a fixed number.
      // Better: useScrollReveal can be adapted or we use it on the container.
    });
  };

  // Simplified: Reveal the whole container or handle paragraphs individually in useEffect if needed.
  // To stick to the "one after another" or "professional fade", let's use the container for now.
  useScrollReveal(aboutRef, {
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0, duration: 1, ease: "power2.out", stagger: 0.2 }
  });

  return (
    <div id="about" className="about-me-div py-20 transition-colors duration-500">
      <SectionHeader title="About Me" />
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
