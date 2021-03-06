import { Component } from "react";
import Card from "../UI/Card";
import styles from "./Resume.module.css";

class Resume extends Component {
  resume = require("../../data/resume.json");

  getContent = () => {
    return (
      <>
        <h2>Experience</h2>
        {this.resume.experience.map((experience, index) =>
          this.renderExperience(experience,index)
        )}
        <h2>Education</h2>
        {this.resume.education.map((education,index) =>
          this.renderEducation(education,index)
        )}
      </>
    );
  };

  renderExperience = (experience, index) => {
    return (
      <div className={styles.entry} key={index}>
        <div className={styles.title}>
          <h3>{experience.title}</h3>
          <p>{experience.dates}</p>
        </div>
        <div className={styles.body}>
          <p className={styles.company}>{experience.company}</p>
          <p className={styles.description}>{experience.description}</p>
        </div>
      </div>
    );
  };

  renderEducation = (education,index) => {
    return (
      <div className={styles.entry} key={index}>
        <div className={styles.title}>
          <h3>{education.degree}</h3>
          <p>{education.date}</p>
        </div>
        <div className={styles.body}>
          <p>{education.school}</p>
        </div>
      </div>
    );
  };

  render() {
    return <Card className={styles.resume}>{this.getContent()}</Card>;
  }
}

export default Resume;
