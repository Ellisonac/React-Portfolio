import { Component } from "react";
import Card from "../UI/Card";
import styles from "./About.module.css";

class AboutMe extends Component {
  aboutMe = require("../../data/about.json");

  getContent = () => {
    return (
      <>
        <h2>About Me</h2>
        <div className={styles.entry}>
          <p>{this.aboutMe.blurb}</p>
        </div>

        <h2>Trivia</h2>
        <div className={styles.entry}>
          {this.aboutMe.trivia.map((data, index) => {
            return <p key={index}>{data}</p>;
          })}
        </div>
        <p>Email: acannonellison@gmail.com</p>
        <p>
          Github: <a href="https://www.github.com/Ellisonac">Ellisonac</a>
        </p>
      </>
    );
  };

  render() {
    return <Card>{this.getContent()}</Card>;
  }
}

export default AboutMe;
