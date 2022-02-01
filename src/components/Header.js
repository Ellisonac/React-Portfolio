import { Component } from "react";
import Navbar from "./Navbar";

class Header extends Component {

  render() {
    return (
      <div>
        <h1>My Blog</h1>
        <Navbar/>
      </div>
    )
  }
}

export default Header;