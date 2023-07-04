import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-scroll";

function header() {
  return (
    <nav className={styles.navbar}>
      <h3>Victor Schmoegel.dev</h3>
      <ul>
        <li><Link to="home" spy={true} smooth={true} offset={50} duration={700}>Home</Link></li>
        <li><Link to="about" spy={true} smooth={true} offset={50} duration={700}>About</Link></li>
        <li><Link to="projects" spy={true} smooth={true} offset={50} duration={700}>Projects</Link></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default header;
