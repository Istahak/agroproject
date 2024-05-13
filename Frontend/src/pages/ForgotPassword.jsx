import React, { useEffect, useState } from "react";
import Image from "../assets/images/loginleft.jpg";
import Logo from "../assets/images/logo.png";
import GoogleSvg from "../assets/icons/icons8-google.svg";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import "../assets/Style/Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [invalidCredentials, setInvalidCredentials] = useState(false);

  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    let email = e.target.email.value;
    if(email.length === 0){
      toast.error("Please enter email");
      setInvalidCredentials(true);
      return;
    }
  };

  return (
    <div className="login-main">
      <div className="login-left">
        <img src={Image} alt="" />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
            <img src={Logo} alt="" />
          </div>
          <div className="login-center">
            <h2>Forgot Password!</h2>
            <p>Please enter your details</p>
            <form onSubmit={handleLoginSubmit}>
              <input type="email" placeholder="Email" name="email" />

              <Link to="/login" className="forgot-pass-link">
                <div className="login-center-buttons">
                  <button type="submit">Reset Password</button>
                </div>
              </Link>
            </form>
          </div>

          <span
            className="email-text"
            style={{
              visibility: invalidCredentials ? "visible" : "hidden",
            }}
          >
            Invalid email or password. Please try again.
          </span>

          <p className="login-bottom-p">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
