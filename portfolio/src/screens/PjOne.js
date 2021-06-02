import React from "react";
// eslint-disable-next-line
import { Button, ButtonKipper, ButtonKipper2 } from "../components/Button";
import "./PjOne.css";

export default function PjOne() {
  return (
    <div className="p1-div">
      <h1 className="head">Full-Stack E-Commerce Website</h1>
      <div className="links">
        <ButtonKipper> Repository</ButtonKipper>
        <ButtonKipper2> Live Demo</ButtonKipper2>
      </div>

      <div className="what-issue">
        <h1 className="what-head">Tech Used:</h1>
        <p className="what-text">
          MERN STACK --
          <br></br>
          MongoDB(Mongoose), Express.js, React(React-Redux), and node.js were
          used as the main technologies.
          <br></br>
          FRONT-END: React, HTML, Css, JavaScript
          <br></br>
          APIS: Paypal, Stripe, Google Maps, Bcrypt, JsonWebTokens. (CRUD and
          Restful)
          <br></br>
          BACK-END: MongoDB Atlas, Node.js, Express.js, Mongoose.
          <br></br>
          Applications: VsCode, Postman, MongoAtlas, Adobe Illustrator.
        </p>
      </div>

      <div className="issue">
        <h1 className="issue-text">App Overview:</h1>
        <p className="prob-text">
          Kipper E-Commerce Website is an app to purchase and sell clothing. It
          has an auth system that seperates "Admins" and "Users". Users may
          browse the store, leave reviews, and purchase items through Paypal or
          Stripe card processing. Admins, in addition to the User funcitons, may
          create products, categories, track inventory, and manage shipping.
          When creating a product Admins may add a local image from their
          machine along with their pricing, and inventory. There are multiple
          organized tabs to show orders thatt have been processed and their
          shipping status.
        </p>
      </div>

      <div className="solution-div">
        <h1 className="sol-head">The Process</h1>
        <p className="sol-text">
          Used React and React-Redux to manipulate the UI state to handle event
          listeners and other state managements. Utilized Node.js and Mongoose
          for API routing to take user data and store into DB; as well as CRUD
          routing to make a good flow through the website. Used MongoDB cluster
          to hold and load data to the application rather than relying heavily
          on the DOM with React. Used CSS to style all things independently-- no
          framework in this project. This was my first major React project, I
          learned how to utilize models, routers, constants, and reducers which
          helped me to understand the feautures of reacts component based syntax
          for efficient coding in larger-scaled projects.
        </p>
      </div>

      <div className="img">
        <img
          className="img-1"
          alt="Kipper Website"
          src={process.env.PUBLIC_URL + "/img/store.png"}
        />
      </div>
    </div>
  );
}
