import { Component } from "react";
import styles from "./Container.module.css";

class Container extends Component {
  constructor(props) {
    super();

    this.children = props.children;
    this.classes = props.className ?? "";
  }

  render() {
    return (
      <div className={`${this.classes} ${styles.container}`}>
        {this.children}
      </div>
    );
  }
}

export default Container;
