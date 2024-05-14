import React from "react";
import "./Footer.css"; // Your custom CSS for Footer Section

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/about">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>
            123 Dhaka,
            <br /> Dhaka, Bangladesh
          </p>
          <p>Email: info@agrismart.com</p>
          <p>Phone: +8801723129762</p>
        </div>
        <div className="footer-column">
          <h3>Connect With Us</h3>
          <ul className="social-icons">
            <li>
              <a href="https://web.facebook.com/">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/?lang=en">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2024 AgriSmart. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
