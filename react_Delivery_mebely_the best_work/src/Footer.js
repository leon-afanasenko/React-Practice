import React from "react";
import "./Footer.css";
import {
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="contact-info">
          <h2>Contact Leon Mashyn</h2>
          <p>(860) 398-1825</p>
          <p>
            <a
              href="https://t.me/yourtelegram"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram
            </a>
          </p>
          <p>shirocoleon@gmail.com</p>
          <p>Hours: 7am-11pm daily</p>
          <p>Available by phone & email. Call to receive a quote.</p>
        </div>
        <div className="footer-icons">
          <a
            href="https://github.com/leon-afanasenko/React-Practice"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} className="footer-icon" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={24} className="footer-icon" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={24} className="footer-icon" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={24} className="footer-icon" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} className="footer-icon" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube size={24} className="footer-icon" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="services">
          <h3>Moving Services Offered:</h3>
          <p>
            Full Service Moving, Residential Moving, Commercial Moving, Loading
            & Unloading, In-Home Moving, Piano Moving, Delivery Services, Estate
            Clean-Outs, Junk Removal, Senior Moving
          </p>
        </div>
        <div className="links">
          <h3>Quick Links:</h3>
          <ul>
            <li>
              <a
                href="https://t.me/yourtelegram"
                target="_blank"
                rel="noopener noreferrer"
              >
                Moving FAQs
              </a>
            </li>
            <li>
              <a
                href="https://t.me/yourtelegram"
                target="_blank"
                rel="noopener noreferrer"
              >
                Moving Tips
              </a>
            </li>
            <li>
              <a
                href="https://t.me/yourtelegram"
                target="_blank"
                rel="noopener noreferrer"
              >
                Career Opportunities
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
