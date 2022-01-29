import React from "react";
import "./About.css";
import phoneIcon from "./images/phone.png";
import AboutCard from "./AboutCard";
function About({title}) {
    return (
        <div className="about">
            <h1 className="about__Title">
                {title}</h1>

            <div className="about__Cards">
                <AboutCard title="Wallet" about="A crypto wallet where ERC20 and ERC721 are stored"
                    image={phoneIcon}
                    link={'/cmex'}
                    linkText='Explore'/>
            </div>
        </div>
    );
}

export default About;
