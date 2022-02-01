import { Component } from "react";
import styles from "./Footer.module.css";

class Footer extends Component {
  render() {
    return (
      <div className={styles.footer}>
        <p> Created by Andrew Ellison 2022</p>
      </div>
    );
  }
}

export default Footer;
