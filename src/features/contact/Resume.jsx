import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import resume from "../../assets/resume.pdf";
import config from "../../config";

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = `${config.profile.name}.pdf`;
    link.click();
  };

  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 95%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section id="resume">
      <button
        ref={buttonRef}
        onClick={handleDownload}
        className="px-8 py-3 bg-primary-light text-white dark:bg-primary-dark dark:text-slate-900 transition-all duration-300 rounded-full font-bold text-lg cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-1 active:scale-95 flex items-center gap-3"
      >
        Download Resume <FontAwesomeIcon icon={faDownload} />
      </button>
    </section>
  );
};

export default Resume;
