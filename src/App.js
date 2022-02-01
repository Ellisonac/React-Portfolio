import styles from "./App.module.css";
import React, { Component } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <div className={styles.app}>
            <Header />
            <Body />
            <Footer />
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
