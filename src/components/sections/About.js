import { Component } from "react";
import Card from "../UI/Card";

class AboutMe extends Component {
  aboutMe = require("../../data/about.json");

  getContent = () => {
    return (
      this.aboutMe.trivia.map((data) => {
        return <p>{data}</p>
      })
    )
  }

  render() {
    return (
      <Card>
        {this.getContent()}
      </Card>
    );
  }
}

export default AboutMe;
