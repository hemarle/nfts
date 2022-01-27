import React from "react";
import "./Hero.css";
function Hero() {
  return (
    <div className="hero">
      <h1 className="hero__Title"> Invest in Defi from one place</h1>

      <p className="hero__Subtitle">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint adipisci
        tempora accusantium quod omnis praesentium officiis temporibus
        veritatis, dolorum fugiat?
      </p>
      <a href="#" className="hero__Link">
        {" "}
        Connect Wallet
      </a>
    </div>
  );
}

export default Hero;
