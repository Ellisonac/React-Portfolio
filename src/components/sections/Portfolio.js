import { Component } from "react";
import Project from './Project'


class Portfolio extends Component {

  projects = require('../../data/portfolio.json');

  getContent() {
    return this.projects.map((project,index) => {
      return <Project {...project} key={index}/>
    })
  }

  render() {
    return <div>{this.getContent()}</div>;
  }
}

export default Portfolio;
