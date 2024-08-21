import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-content">
        <div className="features-text">
          <h2>Key Features</h2>
          <p>
            Discover the key features of our service designed to meet your needs
            and exceed expectations.
          </p>
          <ul>
            <li>Feature 1: Efficient and reliable service.</li>
            <li>Feature 2: Friendly and professional team.</li>
            <li>Feature 3: Affordable pricing with no hidden fees.</li>
          </ul>
        </div>
        <div className="features-image">
          <img
            src="https://img.freepik.com/free-photo/smiley-couple-home-moving-day-with-boxes-heads_23-2148647484.jpg?t=st=1724238256~exp=1724241856~hmac=862f487c23da3c94f29b3e7efa1bdd843a230a5fb0327cdaae66da69c63ea162&w=1800"
            alt="Key Features"
          />
          <div className="features-overlay">
            <h3>Reliable Service</h3>
            <p>Experience the best service with our professional team.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
