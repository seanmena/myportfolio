import React from "react";
import "./Home.css";
import { Button, ButtonTwo } from "../components/Button";
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
        <h1 id="SeanMena" className="title">
          Sean Mena
        </h1>
        <h4 className="subtitle">Full-Stack Web Developer</h4>
        <p className="heading">
          When design meets Development. Passionate Full Stack Web Developer--
          with the skills and tools to bring value to your team.
        </p>

        <div className="btns">
          <Button className="btn1">
            GitHub <i class="fas fa-chevron-right"></i>
          </Button>
          <ButtonTwo className="btn2">
            Linkedin <i class="fas fa-chevron-right"></i>
          </ButtonTwo>
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
        <p className="email">
          <a className="email-line" href={"mailto: seanmenadev@gmail.com"}>
            SeanMenaDev@gmail.com
          </a>
        </p>
        <p className="num">(801) 867 - 4854</p>
      </div>
    </div>
  );
}

export default Home;
