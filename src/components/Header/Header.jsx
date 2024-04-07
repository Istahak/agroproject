import React,{useState} from "react";

import "./Header.css";
import logo from "../../assets/images/logo.png";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("Istahak");

  const handleLogin = () => {
    // Logic to handle login
    setIsLoggedIn(true);
    setUsername("Istahak"); // Assuming the username is fetched after login
  };

  const handleLogout = () => {
    // Logic to handle logout
    setIsLoggedIn(false);
    setUsername("Istahak");
  };

  return (
    <div className="header">
      <img className="logoimage" src={logo} alt="Logo" />

      {isLoggedIn ? (
        <div className="user">
          <p className="userinfo">Welcome, {username}!</p>
          <button className="logoutbutton" onClick={handleLogout}>Log out</button>
        </div>
      ) : (
        <div>
          <button className="loginbutton" onClick={handleLogin}>Log in</button>
          <button className="signupbutton" >Sign up</button>
        </div>
      )}
    </div>
  );
};
export default Header;
