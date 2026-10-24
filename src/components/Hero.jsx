//import React from "react";
//import Projects from "./Projects";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Hero() {
  return (
    <>
      <div className="hero-card">
        <h1 className="HeadingName">Hi. I'm Meron Tsegaye</h1>

        <p className="subheading">
          Web Developer | CS Student | Tech Enthusiast
        </p>
        <p class="hero-para">
          Passionate about web development, UI/UX design, and creating
          responsive, accessible websites that provide meaningful user
          experiences.
        </p>
        <div className="btn">
          <a href="#proj1" className="projectbtn">
            {" "}
            View Projects
          </a>
          <a
            href="/Meron Tsegaye (1).pdf"
            download="Meron Tseagye (1).pdf"
            className="projectbtn"
            target="_blank"
          >
            Download CV
          </a>
        </div>
        <div className="social-links">
          <a
            href="https://github.com/meron-dve"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/meron-tsegaye-313690354"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:merontty1@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </>
  );
}
export default Hero;
