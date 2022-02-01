import { Component } from "react";
import Card from "../UI/Card";

class Contact extends Component {
  render() {
    return (
    <Card>
      <h2>Contact Me</h2>
      <p>Phone: </p>
      <p>Email: acannonellison@gmail.com</p>
      <p>Github: <a href="https://www.github.com/Ellisonac">Ellisonac</a></p>
    </Card>
    );
  }
}

export default Contact;
