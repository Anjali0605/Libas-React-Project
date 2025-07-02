import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import WishlistPage from "./pages/WishlistPage";
import Error404Page from "./pages/Error404Page";

// Logo
import logo from "./assets/Images/logo.png";

function App() {
  useEffect(() => {
    const favicon = document.getElementById("favicon") || document.createElement("link");
    favicon.rel = "icon";
    favicon.type = "image/png";
    favicon.href = logo;
    favicon.id = "favicon";
    document.head.appendChild(favicon);

    document.title = "Libas";
  }, []);

  return (
    <Router>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="*" element={<Error404Page />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
