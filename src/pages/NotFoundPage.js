import React from "react";
import "./NotFoundPage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="notfound-page">
      <Header />

      <main className="notfound-content" role="main" aria-labelledby="error-heading">
        <h1 id="error-heading">404</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <button onClick={() => navigate("/")}>Go to Home</button>
      </main>

      <Footer />
    </div>
  );
}

export default NotFoundPage;
