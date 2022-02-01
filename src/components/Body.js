import { Component } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./sections/Home";
import About from "./sections/About";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";
import Resume from "./sections/Resume";
import styles from "./Body.module.css";

class Body extends Component {
  render() {
    return (
      <div className={styles.mainContent}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="resume" element={<Resume />} />
          {/* Unmatched route hit */}
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>
                  This is not the text you were expecting to see, nor I for that
                  matter.
                </p>
              </main>
            }
          />
        </Routes>
      </div>
    );
  }
}

export default Body;
