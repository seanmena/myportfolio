import React from "react";
// eslint-disable-next-line
import { Button, ButtonEmpMan, ButtonEmpMan2 } from "../components/Button";
import "./PjFour.css";

export default function PjFour() {
  return (
    <div className="p4-div">
      <h1 className="head">Employee Manager Tool (MySQL/Node.js)</h1>
      <div className="links">
        <ButtonEmpMan> Repository</ButtonEmpMan>
        <ButtonEmpMan2> Demo</ButtonEmpMan2>
      </div>

      <div className="what-issue">
        <h1 className="what-head">Tech Used:</h1>
        <p className="what-text">
          BACK-END: Node.js, MySQL, MySQL WorkBench, JavaScript, Inquirer,
          Console Table
        </p>
      </div>

      <div className="issue">
        <h1 className="issue-text">App Overview:</h1>
        <p className="prob-text">
          Employee Manager is a tool that allows employers to create and edit
          tables to organize their employees. Users maybe add employees along
          with their positon, id, and salary. They may also delete and update
          their employee data as well.
        </p>
      </div>

      <div className="solution-div">
        <h1 className="sol-head">The Process</h1>
        <p className="sol-text">
          Back-end focused App. Built switches, and async await functions.
          Utilized Inquirer Npm package to prompt users, utilized MySQL DB to
          store data. Used schema to create database and seed to manipulate it.
          Used MySQL WorkBench to visualize and run database. Node.js to query
          data, and the Console Table Npm package to visualize the data for user
          experience.
        </p>
      </div>

      <div className="img">
        <img
          className="img-1"
          alt="Kipper Website"
          src={process.env.PUBLIC_URL + "/img/EmplManage.png"}
        />
      </div>
    </div>
  );
}
