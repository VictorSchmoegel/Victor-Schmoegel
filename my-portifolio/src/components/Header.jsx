import React from "react";
import styles from "./Header.module.css";

function header() {
  return (
    <nav className={styles.navbar}>
      <h3>Victor Schmoegel.dev</h3>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default header;
