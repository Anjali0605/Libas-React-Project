import React, { useState } from "react";
import "./RegisterPage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = formData;

    // Trim and validate fields
    if (!name.trim() || !email.trim() || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      setSuccess("");
      return;
    }

    // Email format validation (optional)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      setSuccess("");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setSuccess("");
      return;
    }

    // Simulate registration success
    setError("");
    setSuccess("Registration successful! Redirecting to login...");

    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="register-page">
      <Header />

      <section className="register-container">
        <h1>Register</h1>
        <form className="register-form" onSubmit={handleRegister}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}

          <button type="submit">Create Account</button>

          <p className="login-text">
            Already have an account?{" "}
            <span onClick={() => navigate("/login")}>Login</span>
          </p>
        </form>
      </section>

      <Footer />
    </div>
  );
}

export default RegisterPage;
