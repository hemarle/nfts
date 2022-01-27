import React from "react";
import "./About.css";
import phoneIcon from "./images/phone.png";
import AboutCard from "./AboutCard";
function About() {
  return (
    <div className="about">
      <h1 className="about__Title">Explore -> Buy -> Manage</h1>

      <div className="about__Cards">
        <AboutCard
          title="Explore the metaverse from one place"
          about="From DeFi tokens to NFTs, it’s never been easier to search, filter and evaluate every asset on the market. See what’s trending, compare historical returns, and more."
        image={phoneIcon}
        link={'/explore'}
        linkText='Explore'
        />
        <AboutCard
          title="Explore the metaverse from one place"
          about="From DeFi tokens to NFTs, it’s never been easier to search, filter and evaluate every asset on the market. See what’s trending, compare historical returns, and more."
        image={phoneIcon}
        link={'/explore'}
        linkText='Explore'
        />
      </div>
    </div>
  );
}

export default About;
