import React from "react";
import { Link } from "react-router-dom";

export const ProjectOne = ({ children, type, onClick }) => {
  return (
    <Link to={"/projectone"} className="ProjectOne">
      <div className={`ProjectOne`} onClick={onClick} type={type}>
        <h1 className="p1-txt">Ecommerce Web Site</h1>
        <p className="p1-sub">
          A MERN application built with React Redux, MongoDB, Css, JavaScript,
          Node.js Express.js, and Paypal/Stripe Apis. With both Front-End and
          Back-end this is a Full-Stack application
        </p>
      </div>
    </Link>
  );
};

export const ProjectTwo = ({ children, type, onClick }) => {
  return (
    <Link to={"/projecttwo"} className="ProjectTwo">
      <div className={`ProjectTwo`} onClick={onClick}>
        <h1 className="p2-txt">React Portfolio</h1>
        <p className="p2-sub">
          A portfolio/landing page. Wireframe created in Adobe Illustrator by
          graphic designer. Brought to life with React, JavaScript and CSS.
          Hosted through AWS, This is a Front-End application.
        </p>
      </div>
    </Link>
  );
};

export const ProjectThree = ({ children, type, onClick }) => {
  return (
    <Link to={"/projectthree"} className="ProjectThree">
      <div className={`ProjectThree`} onClick={onClick} type={type}>
        <h1 className="p3-txt">RESTful Api</h1>
        <p className="p3-sub">
          A collberative Project, Emotional Media Generator uses jQuery to call
          upon third party Api's to retrieve data from the DOM based on user
          input. Styled with the Bulma framework, this is a Front-End
          application.
        </p>
      </div>
    </Link>
  );
};

export const ProjectFour = ({ children, type, onClick }) => {
  return (
    <Link to={"/projectfour"} className="Projectfour">
      <div className={`Projectfour`} onClick={onClick} type={type}>
        <h1 className="p4-txt">Employee Manager</h1>
        <p className="p4-sub">
          A terminal based tool created with JavaScript, Node.js and the
          Inquirer NPM package. Manipulates MySQL DB data based on user input.
          This is a Back-end program.
        </p>
      </div>
    </Link>
  );
};

export default ProjectOne;
