import React, { useContext, useState } from "react";
import "./CheckoutPage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CartContext } from "../context/CartContext";

function CheckoutPage() {
  const { cartItems } = useContext(CartContext);

  const [address, setAddress] = useState({
    fullName: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
    phone: "",
  });

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleOrder = (e) => {
    e.preventDefault();

    if (Object.values(address).some((field) => field.trim() === "")) {
      alert("Please fill all address fields");
      return;
    }

    if (cartItems.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    // Here you can send the order to backend or Firebase
    alert("Order placed successfully!");
    console.log("Shipping Address:", address);
    console.log("Ordered Items:", cartItems);

    // Optional: clear the address form
    setAddress({
      fullName: "",
      street: "",
      city: "",
      state: "",
      pincode: "",
      phone: "",
    });
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="checkout-page">
      <Header />

      <section className="checkout-container">
        <h1>Checkout</h1>

        <div className="checkout-sections">
          {/* Left: Shipping Form */}
          <form className="shipping-form" onSubmit={handleOrder}>
            <h2>Shipping Address</h2>

            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={address.fullName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="street"
              placeholder="Street Address"
              value={address.street}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={address.city}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={address.state}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              value={address.pincode}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={address.phone}
              onChange={handleChange}
              required
            />

            <button type="submit" className="order-btn">
              Place Order
            </button>
          </form>

          {/* Right: Order Summary */}
          <div className="order-summary">
            <h2>Order Summary</h2>
            {cartItems.length === 0 ? (
              <p>No items in cart.</p>
            ) : (
              <>
                {cartItems.map((item) => (
                  <div key={item.id} className="summary-item">
                    <img src={item.image} alt={item.title} />
                    <div>
                      <p>{item.title}</p>
                      <p>₹{item.price} × {item.quantity}</p>
                    </div>
                  </div>
                ))}
                <h3>Total: ₹{total.toFixed(2)}</h3>
              </>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default CheckoutPage;
