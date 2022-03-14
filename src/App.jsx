import React from "react";
import ReactDOM from "react-dom";

import "swiper/css";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Cards";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Card />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
