import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="content">
          <div className="content_img">
          <img src="https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="mee" class="about_img"/>
          </div>
          <div className="content_text">
            <h2>About Me</h2>
            <h3>Um desenvolvedor bem dedicado</h3>
            <p> 
              I'm a full stack developer, I have been working with web development since 2019, I have experience with HTML, CSS, JavaScript, ReactJS, NodeJS, ExpressJS, MongoDB, MySQL, Git, GitHub, among others. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim aspernatur illo quam perspiciatis eaque, ab eveniet cupiditate quisquam neque praesentium nemo itaque dolorum provident suscipit nesciunt. Quas quam facere libero.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
