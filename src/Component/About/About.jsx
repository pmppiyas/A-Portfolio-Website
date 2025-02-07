import React from "react";
import CountUp from "react-countup";
import "../About/About.css";

export default function About() {
  return (
    <section className="about">
      {/* Title Section */}
      <div className="about-title">
        <h1>About Me</h1>
        <p>
          Hi, I'm Prince Mahmud Piyas, a Full Stack Developer specializing in
          the <strong>MERN stack</strong>.
        </p>
      </div>

      {/* About Content */}
      <div className="about-content">
        <div className="about-text">
          <h2>My Journey</h2>
          <p>
            I started my journey in web development with HTML, CSS, and
            JavaScript. Over time, I mastered React and the MERN stack, enjoying
            the process of building intuitive, user-friendly web applications.
          </p>

          <h2>The Work I Enjoy</h2>
          <p>
            I thrive on creative projects that blend design with
            problem-solving, from building interfaces with React to crafting
            backends with Node.js. Collaboration and innovation are at the core
            of my work.
          </p>

          <h2>Outside of Programming</h2>
          <p>
            Beyond coding, I enjoy sports like football and tennis, as well as
            painting. Nature also helps me recharge and stay inspired.
          </p>

          <h2>My Personality</h2>
          <p>
            I'm a curious, lifelong learner who loves to grow, teach, and
            collaborate with others. I approach challenges with optimism and
            always seek new opportunities to improve.
          </p>
        </div>

        {/* Skills Section */}
        <div className="about-skills">
          {[
            { skill: "HTML & CSS", width: "100%" },
            { skill: "JavaScript", width: "90%" },
            { skill: "React JS", width: "85%" },
            { skill: "Next JS", width: "80%" },
            { skill: "Node.js & Express", width: "75%" },
          ].map(({ skill, width }) => (
            <div className="about-skill" key={skill}>
              <p>{skill}</p>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements Section (Animated Counters) */}
      <div className="about-achievements">
        {[
          { end: 1, suffix: "+", text: "YEARS OF EXPERIENCE" },
          { end: 25, suffix: "+", text: "PROJECTS COMPLETED" },
          { end: 20, suffix: "+", text: "HAPPY CLIENTS" },
        ].map(({ end, suffix, text }, index) => (
          <div key={index} className="about-achievement">
            <h1>
              <CountUp start={0} end={end} duration={3} suffix={suffix} />
            </h1>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
