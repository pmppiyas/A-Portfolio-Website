import "../Contact/Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="Theme"></img>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I am correctly avaiable to take a new project, so feel free to
            massage me
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon}></img> <p>princemahmudpiyas@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon}></img> <p>+8801777233703</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon}></img> <p>Rangpur, Bangladesh</p>
            </div>
          </div>
          {/* Social Media Links */}
          <div className="hero-social">
            <a
              href="https://github.com/yourgithub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="social-icon" />
            </a>
            <a
              href="https://linkedin.com/in/yourlinkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="social-icon" />
            </a>
            <a
              href="https://twitter.com/yourtwitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="social-icon" />
            </a>
            <a
              href="https://facebook.com/yourfacebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="social-icon" />
            </a>
          </div>
        </div>
        <form className="contact-right">
          <label>Your Name</label>
          <input type="text" placeholder="Enter your name"></input>
          <label>Your Email</label>
          <input type="email" placeholder="Enter your email"></input>
          <label>Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
}
