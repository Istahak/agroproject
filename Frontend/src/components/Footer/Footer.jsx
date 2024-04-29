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
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>
            123 AgriSmart Street,
            <br /> Farmingville, USA
          </p>
          <p>Email: info@agrismart.com</p>
          <p>Phone: +1 123-456-7890</p>
        </div>
        <div className="footer-column">
          <h3>Connect With Us</h3>
          <ul className="social-icons">
            <li>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
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
