import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "../Hero/Hero.css";
import profileImg from "../../assets/profile_img.svg";

export default function Hero() {
  return (
    <section className="hero">
      {/* Profile Image */}
      <img className="hero-img" src={profileImg} alt="Profile" />

      {/* Heading */}
      <h1>
        I’m <span>Prince Mahmud Piyas</span>
      </h1>

      {/* Typewriter Effect */}
      <h2>
        <Typewriter
          words={["Frontend Developer", "MERN Stack Developer"]}
          loop={0}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </h2>

      {/* Short Description */}
      <p>
        A passionate <strong>Full Stack Developer</strong> specializing in the{" "}
        <strong>MERN stack</strong>, building dynamic, user-friendly, and
        scalable web applications. Always eager to learn, collaborate, and bring
        innovative ideas to life.
      </p>

      {/* Action Buttons */}
      <div className="hero-action">
        <button className="hero-connect">Connect With Me</button>
        <a
          href="/resume.pdf"
          download="Prince_Mahmud_Piyas_Resume.pdf"
          className="hero-resume"
        >
          My Resume
        </a>
      </div>
    </section>
  );
}
