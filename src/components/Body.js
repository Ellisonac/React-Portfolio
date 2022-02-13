import { Component } from "react";
import { Route, Routes } from "react-router-dom";

// import Home from "./sections/Home";
import About from "./sections/About";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";
import Resume from "./sections/Resume";
import styles from "./Body.module.css";
import Card from "./UI/Card";

class Body extends Component {
  render() {
    return (
      <main className={styles.mainContent}>
        <section>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/" element={<About />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="contact" element={<Card><Contact /></Card>} />
            <Route path="resume" element={<Resume />} />
            {/* Unmatched route hit */}
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>
                    This is not the text you were expecting to see, nor I for
                    that matter.
                  </p>
                </main>
              }
            />
          </Routes>
        </section>
      </main>
    );
  }
}

export default Body;
