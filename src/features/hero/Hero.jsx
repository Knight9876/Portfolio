import React, { useRef, useEffect } from "react";
import { Link } from "react-scroll";
import { gsap } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faDownload } from "@fortawesome/free-solid-svg-icons";
import config from "../../config";

const Hero = () => {
  const photoRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Profile photo animation - subtle fade and scale
    tl.fromTo(
      photoRef.current,
      { opacity: 0, scale: 0.9, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 1, ease: "power1.out" }
    );

    // Text animation - simple fade and slide up
    tl.fromTo(
      textRef.current.children,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power1.out", stagger: 0.1 },
      "-=0.6"
    );
  }, []);

  return (
    <div id="hero" className="hero min-h-screen flex items-center justify-center">
      <div className="text-center flex flex-col md:flex-row items-center gap-8 md:gap-20 lg:gap-32 px-4">
        {/* Profile Photo */}
        <div
          ref={photoRef}
          className="profile_photo rounded-full border-4 border-primary-light dark:border-primary-dark mx-auto shadow-professional"
        >
          <img
            className="rounded-full object-cover aspect-[1/1] w-full max-w-[15rem] sm:max-w-[16rem] md:max-w-[16rem] lg:max-w-[20rem]"
            src={config.profile.profilePic}
            alt={`${config.profile.name} - Profile`}
            loading="lazy"
          />
        </div>

        {/* About Text */}
        <div ref={textRef} className="flex flex-col gap-4 text-left md:text-left">
          <h1 className="text-5xl text-center md:text-6xl lg:text-7xl font-extrabold tracking-tight transition-colors duration-500">
            {config.profile.name}
          </h1>
          <p className="text-xl text-center sm:text-2xl text-slate-600 dark:text-slate-400 font-medium transition-colors duration-500">
            {config.profile.role}
          </p>

          {/* Buttons */}
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <Link
              to="experiences"
              smooth={true}
              duration={500}
              className="px-8 py-3.5 bg-primary-light text-white hover:bg-indigo-700 dark:bg-primary-dark dark:text-slate-900 dark:hover:bg-indigo-300 transition-all duration-300 rounded-full font-bold text-lg cursor-pointer shadow-md hover:shadow-lg"
            >
              Experience &nbsp; <FontAwesomeIcon icon={faArrowRight} />
            </Link>
            <Link
              to="resume"
              smooth={true}
              duration={500}
              className="px-8 py-3 border-2 border-primary-light text-primary-light hover:bg-primary-light hover:text-white dark:border-primary-dark dark:text-primary-dark dark:hover:bg-primary-dark dark:hover:text-slate-900 transition-all duration-300 rounded-full font-bold text-lg cursor-pointer"
            >
              Resume &nbsp; <FontAwesomeIcon icon={faDownload} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
