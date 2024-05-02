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

const LoginPage = ({isLoggedIn,setIsLoggedIn}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  const navigate = useNavigate();

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;

    if (email.length > 0 && password.length > 0) {
      const formData = {
        email: email,
        password: password,
        rememberMe: rememberMe,
      };
      try {
        const response = await axios.post(
          "http://localhost:8000/login",
          formData
        );
        localStorage.setItem("auth", JSON.stringify(response.data));
        toast.success("Login successfull");

        const authTokenString = localStorage.getItem("auth");

        if (authTokenString) {
          try {
            const authToken = JSON.parse(authTokenString);
            const response1 = await axios.get("http://localhost:8000/users/me", {
              headers: {
                Authorization: `Bearer ${authToken.access_token}`,
              },
            });
            const username = response1.data.user_name;
            localStorage.setItem("username", username);
            isLoggedIn = true;
            navigate("/", { state: {isLoggedIn :{isLoggedIn}, username: {username} } });
          } catch (error) {
            console.error("Error parsing auth token:", error);
          }
        } else {
          console.error("No auth token found in localStorage");
        }
      } catch (err) {
        console.log(err);
        if (err.response.status === 404) {
          setInvalidCredentials(true);
        }
        toast.error(err.message);
      }
    } else {
      toast.error("Please fill all inputs");
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
            <h2>Welcome back!</h2>
            <p>Please enter your details</p>
            <form onSubmit={handleLoginSubmit}>
              <input type="email" placeholder="Email" name="email" />
              <div className="pass-input-div">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                />
                {showPassword ? (
                  <FaEyeSlash
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                ) : (
                  <FaEye
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                )}
              </div>

              <div className="login-center-options">
                <div className="remember-div">
                  <input
                    type="checkbox"
                    id="remember-checkbox"
                    checked={rememberMe}
                    onChange={handleRememberMeChange}
                  />
                  <label htmlFor="remember-checkbox">
                    Remember for 30 days
                  </label>
                </div>
                <a href="#" className="forgot-pass-link">
                  Forgot password?
                </a>
              </div>
              <span
                className="email-text"
                style={{
                  visibility: invalidCredentials ? "visible" : "hidden",
                }}
              >
                Invalid email or password. Please try again.
              </span>

              <div className="login-center-buttons">
                <button type="submit">Log In</button>
                <button type="submit">
                  <img src={GoogleSvg} alt="" />
                  Log In with Google
                </button>
              </div>
            </form>
          </div>

          <p className="login-bottom-p">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
