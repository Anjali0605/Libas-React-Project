// src/components/Popup.js
import React from "react";
import "./Popup.css"; // Optional: add styles

function Popup({ show, product, onClose }) {
  if (!show || !product) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-box" onClick={(e) => e.stopPropagation()}>
        <h3>Added to Cart</h3>
        <img src={product.image} alt={product.name} />
        <p>{product.name}</p>
        <p>₹{product.price}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Popup; // ✅ Make sure it's a default export
