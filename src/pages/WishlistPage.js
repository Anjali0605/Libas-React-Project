import React, { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import "./WishlistPage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
function WishlistPage() {
  const { wishlistItems, removeFromWishlist } = useContext(WishlistContext);

  return (
    <>
    <Header/>
    <div className="wishlist-page">
      <h2>Your Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p>No items in wishlist.</p>
      ) : (
        <div className="wishlist-items">
          {wishlistItems.map((item) => (
            <div key={item.id} className="wishlist-item">
              <img src={item.image} alt={item.name} />
              <div className="wishlist-details">
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>
                <button onClick={() => removeFromWishlist(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    <Footer/>
     </>
  );
}

export default WishlistPage;
