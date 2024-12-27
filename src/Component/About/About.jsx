import React from "react";
import "../About/About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile_img.svg";

export default function About() {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern}></img>
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img}></img>
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I’m a dedicated [profession, e.g., web developer or designer],
              passionate about crafting solutions that blend functionality and
              aesthetics.
            </p>
            <p>
              Collaboration is at the heart of what I do—I thrive on working
              with clients and teams to transform ideas into impactful
              solutions.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p> <hr style={{ width: "100%" }}></hr>
            </div>
            <div className="about-skill">
              <p>JavaScript</p> <hr style={{ width: "80%" }}></hr>
            </div>
            <div className="about-skill">
              <p>React JS</p> <hr style={{ width: "80%" }}></hr>
            </div>
            <div className="about-skill">
              <p>Next JS</p> <hr style={{ width: "70%" }}></hr>
            </div>
          </div>
        </div>
      </div>
      <div className="about-achivements">
        <div className="about-achivement">
          <h1>3+</h1>
          <p>YEARS OF EXPRIENCE</p>
        </div>
        <hr></hr>
        <div className="about-achivement">
          <h1>70+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr></hr>
        <div className="about-achivement">
          <h1>55+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
}
