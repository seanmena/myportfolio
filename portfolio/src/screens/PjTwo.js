import React from "react";
// eslint-disable-next-line
import { Button, ButtonReact } from "../components/Button";
import "./PjTwo.css";

export default function PjTwo() {
  return (
    <div className="p2-div">
      <h1 className="head">Web Developer Portfolio (React Front-End)</h1>
      <div className="links">
        <ButtonReact> Repository</ButtonReact>
        <ButtonReact> Live Demo</ButtonReact>
      </div>

      <div className="what-issue">
        <h1 className="what-head">Tech Used:</h1>
        <p className="what-text">
          FRONT-END: React, HTML, Css, JavaScript
          <br></br>
          APPLICATIONS: VsCode, Adobe Illustrator, Adobe Photoshop.
        </p>
      </div>

      <div className="issue">
        <h1 className="issue-text">App Overview:</h1>
        <p className="prob-text">
          This is an application made with the React JavaScript framework. It's
          purpose is to be simple, elegnat, and easy to navigate. This
          application is similar to a landing page being that it is clear and
          straight to the point.
        </p>
      </div>

      <div className="solution-div">
        <h1 className="sol-head">The Process</h1>
        <p className="sol-text">
          Used React, HTML, and Css for this project. This layout was designed
          by a Ux/Ui developer to establish good workflow between different
          roles in development. I was given an Illustrator file with a wireframe
          and from there brought it to life with React. This project had a lot
          of struggles with grid systmes and creating event handlers. It was
          good practice with React and its compoenet based syntax.
        </p>
      </div>

      <div className="img">
        <img
          className="img-1"
          alt="Kipper Website"
          src={process.env.PUBLIC_URL + "/img/reactport.png"}
        />
      </div>
    </div>
  );
}
