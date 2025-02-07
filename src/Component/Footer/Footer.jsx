import React from "react";
import "../Footer/Footer.css";
import footer_logo from "../../assets/footer_logo.svg";
import user_icon from "../../assets/user_icon.svg";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="Footer Logo" className="footer-logo" />
          <p>
            A passionate <strong>Full Stack Developer</strong> specializing in
            the <strong>MERN stack</strong>, building dynamic, user-friendly,
            and scalable web applications. Always eager to learn, collaborate,
            and bring innovative ideas to life.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-input-email">
            <img src={user_icon} alt="User Icon" className="user-icon" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <button className="footer-subscribe">Subscribe</button>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          2025 Prince Mahmud Piyas. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
      <div className="footer-social">
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
      </div>
    </div>
  );
}
