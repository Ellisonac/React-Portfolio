import { Component } from "react";
import Card from "../UI/Card";


class Project extends Component {

  constructor(props) {
    super();
    this.title = props.title;
    this.body = props.body;
    this.image = props.images;
  }

  render() {
    return (
      <Card>
        <h3>{this.title}</h3>
        <p>{this.body}</p>
        <img src={this.images?.[0]} alt=""/>
      </Card>
    )
  }
}

export default Project;