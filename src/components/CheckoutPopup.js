// src/components/CheckoutPopup.js
import React from "react";
import "./CheckoutPopup.css";

function CheckoutPopup({ show, cartItems, total, onClose }) {
  if (!show) return null;

  return (
    <div className="checkout-popup-overlay">
      <div className="checkout-popup">
        <h2>Order Summary</h2>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} x {item.quantity} = ₹{(item.price * item.quantity).toFixed(2)}
            </li>
          ))}
        </ul>
        <h3>Total: ₹{total.toFixed(2)}</h3>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default CheckoutPopup; // ✅ this is required
