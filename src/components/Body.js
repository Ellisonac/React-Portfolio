import { Component } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import Home from './sections/Home'
import About from "./sections/About";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";
import Resume from "./sections/Resume";

class Body extends Component {
  constructor(props) {
    super();
  }

  getContent() {
    switch (this.state.activePage) {
      case "AboutMe":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        throw new Error("Body Content not set");
    }
  }

  render() {
    return (
      <>
        <Routes>
        <Route path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact">
            <Resume />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
        </Routes>
      </>

      // <div>{this.getContent()}</div>
      // <div><{this.state.activePage}/></div>
    );
  }
}

export default Body;
