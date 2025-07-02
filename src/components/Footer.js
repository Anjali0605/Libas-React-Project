import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="libas-footer">
      {/* Top Section */}
      <div className="footer-top">
        {/* Brand Description */}
        <div className="footer-section">
          <h2>Libas</h2>
          <p>Fashion that defines you. Explore the latest trends with us.</p>
        </div>

        {/* Navigation Links */}
        <div className="footer-section additional">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Shop</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: <a href="mailto:support@libas.com">support@libas.com</a></p>
          <p>Phone: <a href="tel:+919876543210">+91-9876543210</a></p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">📘</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">📸</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">🐦</a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Libas. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
