import { Component } from "react";
import styles from './Card.module.css';

class Card extends Component {

  constructor(props) {
    super();

    this.children = props.children;
    this.classes = props.className ?? "";
  }

  render() {
    return (
      <div className={`${styles.card} ${this.classes}`}>{this.children}</div>
    )
  }
}

export default Card;