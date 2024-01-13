import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import MainContent from "./Components/MainContent";
import About from "./Components/About";
import RotatedBuyButton from "./Components/RotatedBuyButton";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/about-section.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <section id="home">
            <MainContent />
          </section>
          <section className="about-section" id="about">
            <About />
          </section>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
