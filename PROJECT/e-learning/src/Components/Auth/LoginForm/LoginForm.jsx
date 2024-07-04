import React, { useState } from "react";
import "./LoginForm.css";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { useNavigate } from "react-router-dom";

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
      setOpen(true); // Show Snackbar on login error
    }
  };

  return (
    <div className="wrapper">
      <div className="information">
        <form>
          <MdOutlineAdminPanelSettings style={{ fontSize: "40px" }} />
          <h2>User Login</h2>
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
          <div className="register-link">
            <p>
              Don't have an account? <a href="#"> Register</a>{" "}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
