import React from "react";
// eslint-disable-next-line
import { Button, ButtonEmg, ButtonEmg2 } from "../components/Button";
import "./PjThree.css";

export default function PjThree() {
  return (
    <div className="p3-div">
      <h1 className="head">Third Party Api Application (Generator)</h1>
      <div className="links">
        <ButtonEmg> Repository</ButtonEmg>
        <ButtonEmg2> Live Demo</ButtonEmg2>
      </div>

      <div className="what-issue">
        <h1 className="what-head">Tech Used:</h1>
        <p className="what-text">
          FRONT-END: HTML, Css, JavaScript, Bulma, jQuery, Local Storage.
          <br></br>
          APIS: Giphy, Pexels,
          <br></br>
          Applications: VsCode, Adobe Illustrator.
        </p>
      </div>

      <div className="issue">
        <h1 className="issue-text">App Overview:</h1>
        <p className="prob-text">
          When I load the page, it introduces the app and displays buttons for
          GIFS, PHOTOS and RANDOM selections. When the GIFS or PHOTOS button is
          selected, Then I am presented with a list of emotions to choose from.
          When I select an emotion, Then I am presented with 10 GIFS or PHOTOS.
          When I click on the Title, Then a new tab opens to the Pexels or Giphy
          website. When I click on the Heart Icon the image is added to
          FAVORITES. When I click on an emotion, Then I am presented with 10
          more GIFS or PHOTOS. When I click on the logo in the navbar, Then the
          splash page is displayed. When I click on the FAVORITES in the navbar,
          Then I am presented with the images I have selected, OR a message that
          says I have not selected any favorites. When I click on the Heart Icon
          the image is removed from FAVORITES.
        </p>
      </div>

      <div className="solution-div">
        <h1 className="sol-head">The Process</h1>
        <p className="sol-text">
          This application was my first development with a team. It is a simple
          third party Restful Api based application, very fun to make. I was in
          charge of the front-end as well as the giphy api. I learned a lot
          about Git branching, issues, pull-requests, and merge conflicts. I
          created this app to practice fetching Api data since it is a skill
          used in almost every web application, as well as working in a team
          with different rolls.
        </p>
      </div>

      <div className="img">
        <img
          className="img-1"
          alt="Kipper Website"
          src={process.env.PUBLIC_URL + "/img/emg.png"}
        />
      </div>
    </div>
  );
}
