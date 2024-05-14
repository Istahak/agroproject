import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/images/logo.png";
import axios from "axios";

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Fetch the username from localStorage when the component mounts
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
      setIsLoggedIn(true);
    }
  }, []);


  const handleLogout = () => {
    // Logic to handle logout
    setIsLoggedIn(false);
    localStorage.removeItem("auth");
    localStorage.removeItem("username");
    localStorage.removeItem("userId");
    localStorage.removeItem("proileId");
    localStorage.removeItem("role");
  };

  return (
    <div className="header">
      <img className="logoimage" src={logo} alt="Logo" />

      {isLoggedIn ? (
        <div className="user">
          <p className="userinfo">Welcome, {username}!</p>
          <button className="logoutbutton" onClick={handleLogout}>
            Log out
          </button>
        </div>
      ) : (
        <div>
          <Link
            to={{
              pathname: "/login",
              state: { isLoggedIn: isLoggedIn },
            }}
          >
            <button className="loginbutton">Log in</button>
          </Link>
          <Link to="/signup">
            <button className="signupbutton">Sign up</button>
          </Link>
        </div>
      )}
    </div>
  );
};
export default Header;
