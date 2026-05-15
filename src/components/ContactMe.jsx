import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import socialLinks from "../data/socialLinks";

import Resume from "./Resume";

const Contact = () => {
  const headerRef = useRef(null);
  const emailRef = useRef(null);
  const socialRefs = useRef([]);
  const paragraphRef = useRef(null);
  const connectHeadingRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Header animation
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

    // Content fade in
    gsap.fromTo(
      [paragraphRef.current, emailRef.current, connectHeadingRef.current],
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Social Media Links
    socialRefs.current.forEach((ref, index) => {
      gsap.fromTo(
        ref,
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          delay: index * 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ref,
            start: "top 95%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section
      id="contact"
      className="py-24 text-center"
    >
      <div className="flex flex-row items-center mb-12">
        <div className="w-2 h-10 bg-primary-light dark:bg-primary-dark rounded-full">
        </div>
        <h1
          ref={headerRef}
          className="text-4xl font-extrabold text-start pl-6 tracking-tight"
        >
          Contact Me
        </h1>
      </div>
      <div className="container mx-auto px-4 max-w-2xl">
        <p
          ref={paragraphRef}
          className="text-xl text-slate-600 dark:text-slate-400 mb-8"
        >
          Have a project in mind or just want to say hi? I'd love to hear from you!
        </p>

        <div ref={emailRef} className="mb-12">
          <a
            href="mailto:yashkamble824@gmail.com"
            className="text-3xl md:text-4xl font-bold text-primary-light dark:text-primary-dark hover:underline transition-all break-words"
          >
            yashkamble824@gmail.com
          </a>
        </div>

        <h4
          ref={connectHeadingRef}
          className="text-lg font-semibold text-slate-500 dark:text-slate-500 uppercase tracking-widest mb-8"
        >
          Let's Connect
        </h4>
        <div className="flex flex-col items-center gap-10">
          <div className="flex gap-10 justify-center">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`${link.color} hover:scale-110 transition-transform duration-300`}
                target="_blank"
                rel="noopener noreferrer"
                ref={(el) => (socialRefs.current[index] = el)}
              >
                {link.icon ? (
                  <FontAwesomeIcon icon={link.icon} size="2x" />
                ) : (
                  <img src={link.imgSrc} alt={link.alt} className="w-8 h-8" />
                )}
              </a>
            ))}
          </div>
          <Resume />
        </div>
      </div>
    </section>
  );
};

export default Contact;
