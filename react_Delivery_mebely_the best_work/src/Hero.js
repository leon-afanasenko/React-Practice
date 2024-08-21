import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Our Service</h1>
          <p className="hero-subtitle">
            Providing the best moving solutions for you and your loved ones.
          </p>
          <a
            href="https://www.youtube.com/watch?v=your-video-id"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-button"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
