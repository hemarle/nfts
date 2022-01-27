import React from "react";
import "./AboutCard.css";
function AboutCard({ title, about, link, linkText, image }) {
  return (
    <div className="aboutCard">
      <div className="aboutCard__Image">
        <img src={image} alt="" />
      </div>

<div className="aboutCard__Content">
    <h2> {title}</h2>
    <p>{about} </p>
    <a href={link}>{linkText} </a>
</div>
    </div>
  );
}

export default AboutCard;
