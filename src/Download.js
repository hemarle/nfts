import React from "react";
import "./Download.css";
import playIcon from "./images/googleplay.png";
import appleIcon from "./images/appstore.png";
function Download({ image, title, about, googleLink, appleLink }) {
  return (
    <div className="download">
      <div className="download__Image">
        <img src={image} alt="" />
      </div>
      <div className="download__Content">
        <h2 className="download__Title">{title}</h2>

        <div className="download__About">{about}</div>

        <div className="download__Links">
          <a href={googleLink}>
            <img src={playIcon} alt="" />
          </a>
          <a href={appleLink}>
            <img src={appleIcon} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Download;
