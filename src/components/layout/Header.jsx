import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import config from "../../config";
import DarkModeToggle from "../ui/DarkModeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header
      className={`flex shadow-sm bg-white/80 backdrop-blur-md dark:bg-slate-950/80 items-center fixed top-0 w-full z-50 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold transition-colors duration-500">
          <Link
            to="hero"
            smooth={true}
            duration={1000}
            className="cursor-pointer hover:text-primary-light dark:hover:text-primary-dark transition-colors"
          >
            {config.profile.name}
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="sm:hidden z-50">
          <button onClick={handleMenuToggle} className="text-3xl text-slate-700 dark:text-slate-300">
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </button>
        </div>

        {/* Menu Items */}
        <ul
          className={`flex flex-col md:gap-8 justify-center items-center fixed top-0 right-0 h-screen w-full bg-white dark:bg-slate-950 transition-transform duration-500 ease-in-out sm:static sm:flex-row sm:h-auto sm:w-auto sm:bg-transparent p-4 sm:p-0 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full sm:translate-x-0"
          }`}
        >
          {config.navigation.map((item) => (
            <li key={item.to} className="p-2 sm:py-0 sm:border-none">
              <Link
                to={item.to}
                smooth={true}
                duration={1000}
                className="cursor-pointer hover:text-primary-light dark:hover:text-primary-dark transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <DarkModeToggle />
    </header>
  );
};

export default Header;
