import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import MainContent from "./Pages/MainContent";
import About from "./Pages/About";
import Blog from "./Pages/BlogHome";
import RotatedBuyButton from "./Components/RotatedBuyButton";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/about-section.css";
import Article from "./Pages/Article";
import "./Styles/article.css";
import "./Styles/article-preview.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <main>
                  {" "}
                  <section id="home">
                    <MainContent />
                    <RotatedBuyButton />
                  </section>
                  <section className="about-section" id="about">
                    <About />
                  </section>{" "}
                </main>
              }
            ></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/articles/:id" element={<Article />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
