import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 850);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (event, section) => {
    event.preventDefault();
    if (
      ["services", "reviews", "moving", "faqs", "contact"].includes(section)
    ) {
      handleContactClick();
    } else {
      const target = document.getElementById(section);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleContactClick = () => {
    window.open("https://wa.me/your-whatsapp-number", "_blank");
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-content">
        <nav className="header-nav">
          <a href="#home" onClick={(e) => handleNavigation(e, "home")}>
            Home
          </a>
          <a href="#services" onClick={(e) => handleNavigation(e, "services")}>
            Services
          </a>
          <a href="#reviews" onClick={(e) => handleNavigation(e, "reviews")}>
            Reviews
          </a>
          <a href="#moving" onClick={(e) => handleNavigation(e, "moving")}>
            Moving
          </a>
          <a href="#faqs" onClick={(e) => handleNavigation(e, "faqs")}>
            FAQs
          </a>
          <a href="#contact" onClick={(e) => handleNavigation(e, "contact")}>
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
