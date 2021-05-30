import React from "react";
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './screens/Home';
import AboutMe from './screens/AboutMe';
import Resume from './screens/Resume';
import Typekit from 'react-typekit';


function App() {
  console.log("test");
  return (
    <>
    <Typekit kitId="f0cde7c26f124e4caf781d43cf94ee512ba76f0b"/>
    <Router>
      <Navbar/>
      <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/aboutme' component={AboutMe} />
          <Route path='/resume' component={Resume} />
          <Route path='/projects' component={Home} />
          <Route path='/contact' component={Home} />
        </Switch>
    </Router>
    </>
  );
}

export default App;