import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line
import { Button } from "./Button";
import "./Navbar.css";

function Navbar() {
  // reverses state of icon
  const [click, setClick] = useState(false);
  // eslint-disable-next-line
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    // show depending on size
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img
              onClick={closeMobileMenu}
              className="navbar-img"
              alt="sm"
              src={process.env.PUBLIC_URL + "/img/smlogo.png"}
            />
          </Link>
        </div>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        {/* if statement // active */}
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/aboutme" className="nav-links" onClick={closeMobileMenu}>
              About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/resume" className="nav-links" onClick={closeMobileMenu}>
              Resume
            </Link>
          </li>
          <li className="">
            <Link
              to={{
                pathname: "https://www.linkedin.com/in/sean-mena-2910651aa/",
              }}
              target="_blank"
              className="social-icons"
            >
              <i className="ld fab fa-linkedin" />
            </Link>
            <Link
              to={{ pathname: "https://github.com/seanmena" }}
              target="_blank"
              className="social-icons"
            >
              <i className="gh fab fa-github" />
            </Link>
            <Link
              to={{
                pathname:
                  "https://www.youtube.com/channel/UCs6DOldIYUXqNuOUf_Eq0qw",
              }}
              target="_blank"
              className="social-icons"
            >
              <i className="ig fab fa-youtube" />
            </Link>
          </li>
        </ul>
        {/* {button && <Button buttonStyle="btn--outline">ABOUT ME</Button>} */}
      </nav>
    </>
  );
}

export default Navbar;
