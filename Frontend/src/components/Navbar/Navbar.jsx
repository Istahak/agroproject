import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };
  useEffect(() => {
    // Fetch the username from localStorage when the component mounts
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setIsLoggedIn(true);
    }
  }, []);
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to={isLoggedIn ? "/calender" : "/login"}>Calender</Link>
        </li>
        <li
          className="services-cls"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Services
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <ul>
                <li>
                  <Link to="/weather">Weather Forecast</Link>
                </li>
                <li>
                  <Link to="/cropinfo">Crop Information</Link>
                </li>
                <li>
                  <Link to={isLoggedIn ? "/expert-chat" : "/login"}>
                    Expert Guidance
                  </Link>
                </li>
                <li>
                  <Link to="/gemini">AI Help</Link>
                </li>
              </ul>
            </div>
          )}
        </li>
        <li>
          <Link to={isLoggedIn ? "/timeline" : "/login"}>Community Forum</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
