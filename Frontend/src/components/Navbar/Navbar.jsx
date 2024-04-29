import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className='navbar'>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li className="services-cls" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          Services
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <ul>
                <li>Weather Forecasts</li>
                <li>Crop Management Practices</li>
                <li>Expert Advice</li>
              </ul>
            </div>
          )}
        </li>
        <li><a href="#forums">Community Forums</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;