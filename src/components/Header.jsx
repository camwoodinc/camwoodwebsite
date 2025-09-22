import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import logo from "../assets/images/camwoodlogo.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((s) => !s);
  };

  return (
    <header>
      <div className="container nav" role="navigation" aria-label="Main">
        <HashLink to="/#" className="brand" smooth>
          <div className="brand__mark" aria-hidden="true">
            <img src={logo} alt="Camwood Inc. Logo" />
          </div>
          <div className="brand__name">Camwood Inc.</div>
        </HashLink>

        <nav className="nav__links" aria-label="Primary">
          <HashLink to="/#about" smooth>About</HashLink>
          <HashLink to="/#solutions" smooth>Solutions</HashLink>
          <HashLink to="/#cases" smooth>Case Studies</HashLink>
          <HashLink to="/#insights" smooth>Insights</HashLink>
          <HashLink to="/#careers" smooth>Careers</HashLink>
          <HashLink to="/#contact" className="nav__cta" smooth>
            Partner With Us
          </HashLink>
        </nav>

        <div className="nav-controls-mobile">
          <button
            type="button"
            className="nav__btn"
            id="menuBtn"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobileMenu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            ☰
          </button>
        </div>
      </div>

      <div className="container">
        <div
          id="mobileMenu"
          className={`nav__menu ${isMenuOpen ? "is-open" : ""}`}
          hidden={!isMenuOpen}
        >
          <HashLink to="/#about" smooth>About</HashLink>
          <HashLink to="/#solutions" smooth>Solutions</HashLink>
          <HashLink to="/#cases" smooth>Case Studies</HashLink>
          <HashLink to="/#insights" smooth>Insights</HashLink>
          <HashLink to="/#careers" smooth>Careers</HashLink>
          <HashLink
            to="/#contact"
            className="nav__cta"
            style={{ display: "inline-block" }}
            smooth
          >
            Partner With Us
          </HashLink>
        </div>
      </div>
    </header>
  );
};

export default Header;