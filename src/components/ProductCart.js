import React from "react";
import "./ProductCart.css";

function ProductCart({ product, onAddToCart, onAddToWishlist }) {
  console.log("Loaded image:", product.image);

  return (
    <div className="product-card">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
        loading="lazy"
      />

      {/* Product Info */}
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">₹{product.price}</p>

        {/* Action Buttons */}
        <div className="product-actions">
          <button
            className="btn add-cart"
            onClick={() => onAddToCart(product)}
          >
            Add to Cart
          </button>
          <button
            className="btn add-wishlist"
            onClick={() => onAddToWishlist(product)}
          >
            ♡ Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCart;
