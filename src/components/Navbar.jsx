import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

// ===============================
// CONSTANTS
// ===============================

const SCROLL_THRESHOLD = 100;

// ===============================
// NAVBAR COMPONENT
// ===============================

const Navbar = () => {
  const [active, setActive] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ===============================
  // SCROLL HANDLER
  // ===============================

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ===============================
  // HANDLERS
  // ===============================

  const handleLogoClick = () => {
    setActive("");
    window.scrollTo(0, 0);
  };

  const handleNavClick = (title) => {
    setActive(title);
    setIsMenuOpen(false);
  };

  // ===============================
  // RENDER
  // ===============================

  return (
    <nav
      className={`
        ${styles.paddingX}
        fixed top-0 z-20 w-full flex items-center py-5
        ${scrolled ? "bg-primary" : "bg-transparent"}
      `}
    >
      <div className="flex items-center justify-between w-full mx-auto max-w-7xl">

        {/* LOGO */}

        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={handleLogoClick}
        >
          <img
            src={logo}
            alt="logo"
            className="object-contain w-9 h-9"
          />

          <p className="flex text-[18px] font-bold text-white cursor-pointer">
            Jorge Yanas &nbsp;
            <span className="hidden sm:block">
              | Portfolio Website
            </span>
          </p>
        </Link>

        {/* DESKTOP NAVIGATION */}

        <ul className="flex-row hidden gap-10 list-none sm:flex">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`
                text-[18px] font-medium cursor-pointer
                ${active === nav.title ? "text-white" : "text-secondary"}
                hover:text-white
              `}
              onClick={() => handleNavClick(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* MOBILE MENU */}

        <div className="flex items-center justify-end flex-1 sm:hidden">

          <img
            src={isMenuOpen ? close : menu}
            alt="menu"
            className="object-contain w-[28px] h-[28px] cursor-pointer"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          />

          <div
            className={`
              ${!isMenuOpen ? "hidden" : "flex"}
              absolute top-20 right-0 z-10
              min-w-[140px] p-6 mx-4 my-2
              rounded-xl black-gradient
            `}
          >
            <ul className="flex flex-col items-start justify-end flex-1 gap-4 list-none">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`
                    text-[16px] font-medium cursor-pointer font-poppins
                    ${active === nav.title ? "text-white" : "text-secondary"}
                  `}
                  onClick={() => handleNavClick(nav.title)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;