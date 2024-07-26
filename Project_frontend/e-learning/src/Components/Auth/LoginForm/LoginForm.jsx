import React, { useState } from "react";
import "./LoginForm.css";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import SignUpForm from "./SignUpForm";

const LoginForm = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({ userName: "", password: "" });
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleLogin = () => {
    if (inputValue.userName && inputValue.password) {
      navigate("/path");
    } else {
      setOpen(true);
    }
  };

  const handleSignUp = () => {
    if (inputValue.userName && inputValue.password) {
      navigate("/SignUpForm");
    } else {
      setOpen(true);
    }
  };

  return (
    
    <div className="wrapper">
    <div className="intro-logo"> </div>
      <div className="information">
        <form>
          <MdOutlineAdminPanelSettings style={{ fontSize: "40px" }} />
          <h6> Start your journey</h6>
          <h4>Sign Up to InsideLearner</h4>
          <div className="input-box">
            <label>Username:</label>
            <input
              type="text"
              placeholder="Write your username"
              required
              name="userName"
              value={inputValue.userName}
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="input-box">
            <label>Password:</label>
            <input
              type="password"
              placeholder="Give your password"
              required
              name="password"
              value={inputValue.password}
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>
          <button type="button" onClick={handleLogin}>
            {" "}
            Login
          </button>
          <br />
          <div className="register-link">
            <p>
              Have an account? <Link to="/SignUpForm">Sign in</Link>{" "}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
