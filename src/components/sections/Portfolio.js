import { Component } from "react";
import Container from "../UI/Container";
import Project from './Project'

class Portfolio extends Component {

  projects = require('../../data/portfolio.json');

  getContent() {
    return this.projects.map((project,index) => {
      return <Project {...project} key={index}/>
    })
  }

  render() {
    return <Container>{this.getContent()}</Container>;
  }
}

export default Portfolio;
