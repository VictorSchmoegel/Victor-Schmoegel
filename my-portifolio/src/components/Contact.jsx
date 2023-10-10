import React from 'react';
import { FaMailBulk } from "react-icons/fa";
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact_container">
        <div className="contact_content">
          <div className="contact_title">
            <p>Contact</p>
            <h2>Contact me! you will not regret</h2>
          </div>
          <div className="contact_icons">
            <span>
              <i className="email_icon"><FaMailBulk /></i>
              <a className="contact_email" href="victorschmoegel@gmail.com">victorschmoegel@gmail.com</a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
