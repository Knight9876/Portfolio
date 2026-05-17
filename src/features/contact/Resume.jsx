import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Resume = () => {
  const handlePreview = () => {
    window.open("/Yash_Kamble_Resume.pdf", "_blank");
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
        duration: 0.3,
        stagger: 0.1,
        ease: "power1.out",
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
        onClick={handlePreview}
        className="group px-8 py-3 bg-primary-light text-white dark:bg-primary-dark dark:text-slate-900 transition-all duration-300 rounded-full font-bold text-lg cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-1 active:scale-95 flex items-center gap-3"
      >
        Resume{" "}
        <FontAwesomeIcon
          icon={faArrowRight}
          className="transition-transform duration-300 group-hover:-rotate-45"
        />
      </button>
    </section>
  );
};

export default Resume;
