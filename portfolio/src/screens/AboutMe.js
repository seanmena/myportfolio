import React from "react";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <div className="about-me">
      <h1 className="a-title">About Me:</h1>
      <img
        alt="Sean"
        className="s-img"
        src={process.env.PUBLIC_URL + "/img/Sean.jpg"}
      ></img>
      <p className="a-text">
        Hello, my name is Sean, I am a Full-Stack Software Engineer with a
        passion for creating original, responsive, and impressive full-stack
        applications. To bring value to my professional endeavors, I spend the
        majority of my free time educating myself on development technologies
        and best practices. I regularly set aside time to keep up with the ever
        changing field of development to ensure I am always up to date with what
        is current to be as secure and efficient as possible with my code. I
        have been creating webpages and online stores with tools like Shopify
        and SqaureSpace for about 2 years until recently graduating from the
        University of Utah with a Professional Education Award in Full-Stack Web
        Development. I plan to continue traditional university studies to obtain
        a Bachelor's Degree in Graphic Design as well. If I'm not coding or
        working on projects, I spend my free time using the Adobe Suite to
        create designs and different pieces of artwork. I also love making
        music, coffee, traveling, and spending time outdoors! I enjoy combining
        my passions by creating artwork for my applications. I am confident in
        my ability to work in a team, meet goals, and promptly learn any
        language. I am also Fluent in both Spanish and English.
      </p>
    </div>
  );
}
