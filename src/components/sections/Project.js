import { Component } from "react";
import Card from "../UI/Card";
import styles from "./Project.module.css";

class Project extends Component {
  constructor(props) {
    super();
    this.title = props.title;
    this.body = props.body;
    this.image = props.image;
    this.altText = props.alt;
    this.link = props.link;
    this.github = props.github;
  }

  render() {
    return (
      <Card className={styles.project}>
        <h3>{this.title}</h3>
        <p>{this.body}</p>
        <a href={this.link}>
          <img src={`../../images/${this.image}`} alt={this.altText} />
        </a>
        <a href={this.github}>Github</a>
      </Card>
    );
  }
}

export default Project;
