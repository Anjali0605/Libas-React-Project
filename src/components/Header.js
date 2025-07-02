import React from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Images/logo.png"; // ✅ Check relative path

function Header() {
  const location = useLocation();

  return (
    <header className="libas-header">
      {/* Logo */}
      <div className="logo-section">
        <Link to="/">
          <img src={logo} alt="Libas Logo" className="libas-logo" />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="nav-links">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Home
        </Link>
        <Link
          to="/products"
          className={location.pathname === "/products" ? "active" : ""}
        >
          Shop
        </Link>
        <Link
          to="/about"
          className={location.pathname === "/about" ? "active" : ""}
        >
          About
        </Link>
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "active" : ""}
        >
          Contact
        </Link>
      </nav>

      {/* Icons */}
      <div className="icon-section">
        <Link to="/wishlist" title="Wishlist">
          🤍
        </Link>
        <Link to="/cart" title="Cart">
          🛒
        </Link>
        <Link to="/login" title="Login / Profile">
          👤
        </Link>
      </div>
    </header>
  );
}

export default Header;
