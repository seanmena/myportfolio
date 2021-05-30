import React from "react";
import "./Home.css";
import Footer from "../components/Footer";
import Button from "../components/Button";
import {
  ProjectFour,
  ProjectOne,
  ProjectThree,
  ProjectTwo,
} from "../components/Projects";

function Home() {
  return (
    <div className="home-div container">
      <div className="top-wordage">
        <h1 className="title">Sean Mena</h1>
        <h4 className="subtitle">Full-Stack Web Developer</h4>
        <p className="heading">
          When design meets Development. Passionate Full Stack Web Developer--
          with the skills and tools to bring value to your team.
        </p>

        <div className="btns">
          <Button className="btn1">
            GitHub <i class="fas fa-chevron-right"></i>
          </Button>
          <Button className="btn2">
            Linkedin <i class="fas fa-chevron-right"></i>
          </Button>
        </div>
      </div>

      <h1 className="p-title">Projects</h1>

      <div className="box-container">
        <ProjectOne></ProjectOne>
        <ProjectTwo></ProjectTwo>
        <ProjectThree></ProjectThree>
        <ProjectFour></ProjectFour>
      </div>

      <div className="contact-container">
        <h1 className="c-title">Contact</h1>
        <p>
          <a className="email-line" href={"mailto: seanmenadev@gmail.com"}>
            SeanMenaDev@gmail.com
          </a>
        </p>

        <div className="icons">
          <i className="ld fab fa-linkedin" />
          <i className="gh fab fa-github" />
          <i className="yt fab fa-youtube" />
          <i className="ig fab fa-instagram" />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
