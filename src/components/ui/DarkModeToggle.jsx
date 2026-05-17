import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);
  const sunRef = useRef(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    // Very slow, professional rotation
    gsap.to(sunRef.current, {
      rotation: 360,
      duration: 25,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toLowerCase();
      if (key === "d" || key === "l" || key === "n") {
        setDarkMode((prevMode) => !prevMode);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="mr-5">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="group relative flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
        aria-label="Toggle Dark Mode"
      >
        {/* Sun Icon - Shown when in Dark Mode (click to go Light) */}
        <div 
          ref={sunRef}
          className={`absolute inset-0 flex items-center justify-center transition-all duration-500 transform ${darkMode ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
           <FontAwesomeIcon icon={faSun} className="text-amber-400 text-lg" />
        </div>
        {/* Moon Icon - Shown when in Light Mode (click to go Dark) */}
        <div 
          className={`absolute inset-0 flex items-center justify-center transition-all duration-500 transform ${!darkMode ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}
        >
           <FontAwesomeIcon icon={faMoon} className="text-slate-700 dark:text-slate-300 text-lg" />
        </div>
      </button>
    </div>
  );
};

export default DarkModeToggle;
