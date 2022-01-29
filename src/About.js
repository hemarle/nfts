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


                <AboutCard title="DAO" about="Vote in official Acendex governance proposal and view past proposals.
                                                                        Governance forum: Participate by proposing upgrades and discussing the future of Acendex with the community."
                    image={phoneIcon}
                    link={'/explore'}
                    linkText='Explore'/>

            </div>
        </div>
    );
}

export default About;
