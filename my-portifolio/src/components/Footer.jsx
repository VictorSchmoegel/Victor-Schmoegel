import './Footer.css'
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

function Footer() {
  return (
    <footer className='footer'>
      <div className="footer_container">
        <div className="footer_content">
          <div className="footer_title">
            <h2>Copyright © 2023. All rights are reserved</h2>
          </div>
          <div className="footer_icons">
            <span>
              <a className='footer_links' target='blank' href="https://www.linkedin.com/in/victor-schmoegel-595b8b231/"><FaLinkedin /></a>
              <a className='footer_links' target='blank' href="https://github.com/VictorSchmoegel"><FaGithubSquare /></a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer