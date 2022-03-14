import React from "react";
import Grids from "../assets/images/Group 77.png";
function Hero() {
  return (
    <div className="container mx-auto px-5">
      <img src={Grids} className="p-5 my-3 mx-auto" alt="" />
      <h1 className="text-3xl font-semibold mb-4">Online Expreriences</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, iusto.
      </p>
    </div>
  );
}

export default Hero;
