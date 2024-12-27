import React from "react";
import "../Hero/Hero.css";
import profileImg from "../../assets/profile_img.svg";
export default function Hero() {
  return (
    <div className="hero">
      <img className="hero-img" src={profileImg}></img>
      <h1>
        I’m <span>Prince Mahmud Piyas</span>, <br></br>Full Stack Developer
        based in USA.{" "}
      </h1>
      <p>
        I’m always excited to collaborate and bring value to new projects. Let’s
        build something amazing together!
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
}
