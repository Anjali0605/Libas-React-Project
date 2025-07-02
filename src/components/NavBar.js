import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="libas-navbar">
      <ul className="nav-list">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" className={({ isActive }) => isActive ? "active" : ""}>
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
