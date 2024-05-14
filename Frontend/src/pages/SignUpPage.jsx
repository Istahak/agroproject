import React, { useEffect, useState } from "react";
import Image from "../assets/images/singUpleft.jpg";
import Logo from "../assets/images/logo.png";
import GoogleSvg from "../assets/icons/icons8-google.svg";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import "../assets/Style/SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [emailRegistered, setEmailRegistered] = useState(false);

  const navigate = useNavigate();
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("auth")) || ""
  );

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    let lastname = e.target.lastname.value;
    let email = e.target.email.value;
    let password = e.target.password.value;
    let confirmPassword = e.target.confirmPassword.value;
    let role = e.target.role.value;

    if (
      name.length > 0 &&
      lastname.length > 0 &&
      email.length > 0 &&
      password.length > 0 &&
      confirmPassword.length > 0 &&
      role.length > 0
    ) {
      if (password === confirmPassword) {
        setPasswordsMatch(true);
        setEmailRegistered(false);
        const formData = {
          Username: name + " " + lastname,
          email: email,
          password: password,
          role: role,
        };

        try {
          const response = await axios.post(
            "http://localhost:8000/addusers",
            formData
          );
          toast.success("Registration successful");
          navigate("/login");
        } catch (err) {
          if (
            err.response &&
            err.response.status === 400 &&
            err.response.data.detail === "Email already registered"
          ) {
            setEmailRegistered(true);
            toast.error(
              "This email is already registered. Please use a different email."
            );
          } else {
            toast.error(err.message);
          }
        }
      } else {
        setPasswordsMatch(false);
        toast.error("Passwords don't match");
      }
    } else {
      toast.error("Please fill all inputs");
    }
  };

  useEffect(() => {
    if (token !== "") {
      toast.success("You already logged in");
      navigate("/Login");
    }
  }, []);

  return (
    <div className="register-main">
      <div className="register-left">
        <img src={Image} alt="" />
      </div>
      <div className="register-right">
        <div className="register-right-container">
          <div className="register-logo">
            <img src={Logo} alt="" />
          </div>
          <div className="register-center">
            <h2>Welcome to our website!</h2>
            <p>Please enter your details</p>
            <form onSubmit={handleRegisterSubmit}>
              <input
                type="text"
                placeholder="Name"
                name="name"
                required={true}
              />
              <input
                type="text"
                placeholder="Lastname"
                name="lastname"
                required={true}
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                required={true}
              />
              <div className="pass-input-div">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  required={true}
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
              <div className="pass-input-div">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  required={true}
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
              <div className="role-selection">
                <select name="role" required>
                  <option value="">Choose a role</option>
                  <option value="user">User</option>
                  <option value="expert">Expert</option>
                </select>
              </div>
              <span
                className="pass-text"
                style={{ visibility: passwordsMatch ? "hidden" : "visible" }}
              >
                Password didn't match
              </span>

              <span
                className="email-text"
                style={{ visibility: emailRegistered ? "visible" : "hidden" }}
              >
                This email is already registered. Please use a different email.
              </span>

              <div className="register-center-buttons">
                <button type="submit">Sign Up</button>
                <button type="submit">
                  <img src={GoogleSvg} alt="" />
                  Sign Up with Google
                </button>
              </div>
            </form>
          </div>

          <p className="login-bottom-p">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
