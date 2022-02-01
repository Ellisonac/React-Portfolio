import { Component } from "react";
import { Link } from "react-router-dom"

class Navbar extends Component {

  render() {
    return (
      <nav>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/resume">Resume</Link>
        </ul>
      </nav>
    )
  }
}

export default Navbar;