import React from 'react';
import { FaLinkedin, FaGithubSquare, FaCss3, FaHtml5, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import './Home.css';

function Home() {
  return (
    <section id="home" className="home_section">
      <div className="container">
        <div className="content">
          <div className="home_main">
            <div className="home_text">
              <h1>Front-End Developer</h1>
              <p>Hi, I'm Victor Schmoegel. Enthusiast in front end development and passionate about technology. Based in Brasília, Brazil.</p>
              <span>
                <a target='blank' href="https://www.linkedin.com/in/victor-schmoegel-595b8b231/"><FaLinkedin /></a>
                <a target='blank' href="https://github.com/VictorSchmoegel"><FaGithubSquare /></a>
              </span>
            </div>
            <div className="home_img">
              <img src="https://avatars.githubusercontent.com/u/111755875?s=400&u=10650b51d4032cc9c661782b1eeafa88aa807942&v=4" alt="Victor Schmoegel" />
            </div>
          </div>
          <div className="skills">
              <h2>Skills</h2>
              <div className="logos">
                <ul>
                  <li>
                    <i className="html_logo"><FaHtml5 /></i>
                  </li>

                  <li>
                    <i className="css_logo"><FaCss3 /></i>
                  </li>

                  <li>
                    <i className="js_logo"><FaJs /></i>
                  </li>

                  <li>
                    <i className="react_logo"><FaReact /></i>
                  </li>

                  <li>
                    <i className="node_logo"><FaNodeJs /></i>
                  </li>

                  <li>
                    <i className="git_logo"><FaGitAlt /></i>
                  </li>
                </ul>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
