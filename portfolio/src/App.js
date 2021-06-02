import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./screens/Home";
import AboutMe from "./screens/AboutMe";
import Resume from "./screens/Resume";
import Typekit from "react-typekit";
import PjOne from "./screens/PjOne";
import PjTwo from "./screens/PjTwo";
import PjThree from "./screens/PjThree";
import PjFour from "./screens/PjFour";
import Footer from "./components/Footer";

function App() {
  console.log("test");
  return (
    <>
      <Typekit kitId="f0cde7c26f124e4caf781d43cf94ee512ba76f0b" />
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/aboutme" component={AboutMe} />
          <Route path="/resume" component={Resume} />
          <Route path="/projectone" component={PjOne} />
          <Route path="/projecttwo" component={PjTwo} />
          <Route path="/projectthree" component={PjThree} />
          <Route path="/projectfour" component={PjFour} />
        </Switch>
        <Footer className="ft" />
      </Router>
    </>
  );
}

export default App;
