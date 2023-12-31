import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about" className="about_section">
      <div className="about_container">
        <div className="about_content">
          <div className="content_img">
          <img src="https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="mee" className="about_img"/>
          </div>
          <div className="content_text">
            <h2>About Me</h2>
            <h3>
              Fullstack Developer
            </h3>
            <p> 
              I'm a full stack developer. I have been working with web development since 2022. I have experience with HTML, CSS, JavaScript, TypeScript, ReactJS, NodeJS, ExpressJS, MongoDB, MySQL, Git, GitHub, among others.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
