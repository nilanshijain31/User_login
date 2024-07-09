import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUpForm.css";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isRegistered, setIsRegistered] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here, e.g., sending data to backend
    setIsRegistered(true);

    // Reset form fields after submission (optional)
    setFormData({
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    // You can also redirect the user or show a success message
  };

  return (
    <div className="box">
      <div className="user_information">
        <form onSubmit={handleSubmit}>
          <div className="values">
            <MdOutlineAdminPanelSettings style={{ fontSize: "40px" }} />
            <h2>Sign Up Form</h2>
            {isRegistered && (
              <p style={{ color: "green", fontWeight: "bold" }}>
                Registration successful! Please <a href="/login">login</a>.
              </p>
            )}
            <div>
              <label>Firstname:</label>
              <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Lastname:</label>
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Username:</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Confirm Password:</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
