import React from "react";
import "./Hero.css";
function Hero({title, about, link, linkText}) {
    return (
        <div className="hero">
            <h1 className="hero__Title">
                {title}</h1>

            <p className="hero__Subtitle">
                {about} </p>
            <a href={link}
                className="hero__Link">
                {linkText} </a>
        </div>
    );
}

export default Hero;
