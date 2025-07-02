import React, { useContext, useState } from "react";
import "./CartPage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CartContext } from "../context/CartContext";
import CheckoutPopup from "../components/CheckoutPopup"; // ← import it

function CartPage() {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);
  const [showPopup, setShowPopup] = useState(false); // ← popup state

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <Header />

      <section className="cart-container">
        <h1>Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.title} />
                  <div className="item-details">
                    <h3>{item.title}</h3>
                    <p>Price: ₹{item.price.toFixed(2)}</p>
                    <div className="quantity-control">
                      <label htmlFor={`qty-${item.id}`}>Qty:</label>
                      <input
                        id={`qty-${item.id}`}
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.id, parseInt(e.target.value) || 1)
                        }
                      />
                    </div>
                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h2>Total: ₹{totalPrice.toFixed(2)}</h2>
              <button className="checkout-btn" onClick={() => setShowPopup(true)}>
                Proceed to Checkout
              </button>
            </div>

            {/* Popup component */}
            <CheckoutPopup
              show={showPopup}
              cartItems={cartItems}
              total={totalPrice}
              onClose={() => setShowPopup(false)}
            />
          </>
        )}
      </section>

      <Footer />
    </div>
  );
}

export default CartPage;
