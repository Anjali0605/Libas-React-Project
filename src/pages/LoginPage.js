import React, { useState } from "react";
import "./LoginPage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const { email, password } = formData;

    if (!email.trim() || !password.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    // Dummy login (replace with real API)
    if (email === "user@example.com" && password === "password") {
      alert("Login successful!");
      setError("");
      navigate("/"); // Redirect after login
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="login-page">
      <Header />

      <section className="login-container">
        <h1>Login</h1>
        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            placeholder="Email"
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
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Login</button>
          <p className="register-text">
            Don't have an account?{" "}
            <span onClick={() => navigate("/register")}>Register</span>
          </p>
        </form>
      </section>

      <Footer />
    </div>
  );
}

export default LoginPage;
