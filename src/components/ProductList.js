import React, { useContext, useState } from "react";
import ProductCart from "./ProductCart";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import Popup from "./Popup";
import "./ProductList.css";

function ProductList({ products }) {
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);
  const [popupProduct, setPopupProduct] = useState(null);

  const handleAddToCart = (product) => {
    addToCart(product);
    setPopupProduct(product);
    setTimeout(() => setPopupProduct(null), 2000);
  };

  const handleAddToWishlist = (product) => {
    addToWishlist(product); // ✅ Calls context
  };

  return (
    <>
      {popupProduct && (
        <Popup
          show={true}
          product={popupProduct}
          onClose={() => setPopupProduct(null)}
        />
      )}
      <div className="product-list">
        {products.map((product) => (
          <ProductCart
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
            onAddToWishlist={handleAddToWishlist} // ✅ Pass this down
          />
        ))}
      </div>
    </>
  );
}

export default ProductList;
