import React from "react";
import "./HelpSection.css";

const microsoftLogo = "/img/Group 2.svg";
const disneyLogo = "/img/Group.svg";
const facebookLogo = "/img/Mask group.svg";
const twitterLogo = "/img/Vectors.svg";
const googleLogo = "/img/Vector copy.svg";

const HelpSection = () => {
  return (
    <div className="help-section">
      <div className="help-text">
        <h2>Помогаем найти работу</h2>
        <a href="#" className="link-button">
          Узнать больше
        </a>
      </div>
      <div className="help-icons">
        <a href="#" aria-label="Facebook">
          <img src={facebookLogo} alt="Facebook" className="icon" />
        </a>
        <a href="#" aria-label="Twitter">
          <img src={twitterLogo} alt="Twitter" className="icon" />
        </a>
        <a href="#" aria-label="Google">
          <img src={googleLogo} alt="Google" className="icon" />
        </a>
        <a href="#" aria-label="Microsoft">
          <img src={microsoftLogo} alt="Microsoft" className="icon" />
        </a>
        <a href="#" aria-label="Disney">
          <img src={disneyLogo} alt="Disney" className="icon" />
        </a>
      </div>
    </div>
  );
};

export default HelpSection;
