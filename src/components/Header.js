import { Component } from "react";
import Navbar from "./Navbar";
import styles from './Header.module.css'

class Header extends Component {

  render() {
    return (
      <header className={styles.header}>
        <h1>Andrew's Blog</h1>
        <Navbar/>
      </header>
    )
  }
}

export default Header;