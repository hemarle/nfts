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
                <AboutCard title="CMEX" about="Community exchange done with ease"
                    image={phoneIcon}
                    link={'/cmex'}
                    linkText='Explore'/>


                <AboutCard title="DEX" about="Nothing is better than Decentralised exchange. Take advantage of our DEX program and get the best we have to offer"
                    image={phoneIcon}
                    link={'/explore'}
                    linkText='Explore'/>

            </div>
        </div>
    );
}

export default About;
