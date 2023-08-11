import React, { useState } from "react";
import { Link } from "react-scroll";
import './Header.css';
import { FaBars } from 'react-icons/fa';

function Header() {
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);

  const mobileMenu = () => {
    setNavbarIsOpen((prevNavbarIsOpen) => !prevNavbarIsOpen);
  }

  return (
    <nav className='navbar_central'>
        <h3 className="nav-title">Victor Schmoegel.dev</h3>
        <li
          className="mobile-menu"
          onClick={mobileMenu}
        >
          <FaBars />
        </li>
        <ul className={`links-list ${navbarIsOpen ? "open" : ""}`}>
          <li className="nav-pages">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={50}
              duration={700}
              onClick={() => setNavbarIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="nav-pages">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={700}
              onClick={() => setNavbarIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li className="nav-pages">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={700}
              onClick={() => setNavbarIsOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li className="nav-pages">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={700}
              onClick={() => setNavbarIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
    </nav>
  );
}

export default Header;
