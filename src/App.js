import "./App.css";
import React, { Component } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Body />
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
