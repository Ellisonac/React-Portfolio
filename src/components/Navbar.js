import { Component } from "react";
import { NavLink } from "react-router-dom"
import "./Navbar.css";

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar">
        <ul>
          {/* <NavLink to="/">Home</NavLink> */}
          <NavLink to="/">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/resume">Resume</NavLink>
        </ul>
      </nav>
    )
  }
}

export default Navbar;