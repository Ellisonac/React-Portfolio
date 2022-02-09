import { Component } from "react";
import Card from "../UI/Card";
import styles from "./Resume.module.css"

class Resume extends Component {
  resume = require("../../data/resume.json");

  getContent = () => {
    return (
      <>
        {this.resume.experience.map((experience) =>
          this.renderExperience(experience)
        )}
        {this.resume.education.map((education) =>
          this.renderEducation(education)
        )}
      </>
    );
  };

  renderExperience = (experience) => {
    return (
      <div className={styles.entry}>
        <h3>{experience.title}</h3>
        <p>{experience.company}</p>
        <p>{experience.dates}</p>
        <p>{experience.description}</p>
      </div>
    )
  };

  renderEducation = (education) => {
    return (
      <div className={styles.entry}>
        <h3>{education.degree}</h3>
        <p>{education.school}</p>
        <p>{education.date}</p>
      </div>
    )
  };

  render() {
    return (
      <Card className={styles.resume}>{this.getContent()}</Card>
    );
  }
}

export default Resume;
