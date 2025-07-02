import React from "react";
import "./HomePage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import VideoBanner from "../components/VideoBanner";
import ProductList from "../components/ProductList";
import { Link } from "react-router-dom";

import videoSrc from "../assets/Videos/V1.mp4";

// Product images
import img1 from "../assets/Images/I1.jpeg";
import img2 from "../assets/Images/I2.jpeg";
import img3 from "../assets/Images/I3.jpeg";
import img4 from "../assets/Images/I4.jpeg";
import img5 from "../assets/Images/I5.jpeg";
import img6 from "../assets/Images/I6.webp";
import img7 from "../assets/Images/I7.webp";
import img8 from "../assets/Images/I8.webp";

// Featured products
const featuredProducts = [
  { id: 1, name: "Embroidered Kurta Set", price: 1999, image: img1 },
  { id: 2, name: "Printed Saree", price: 2499, image: img2 },
  { id: 3, name: "Designer Lehenga", price: 4499, image: img3 },
  { id: 4, name: "Casual Cotton Top", price: 799, image: img4 },
  { id: 5, name: "Anarkali Gown", price: 3299, image: img5 },
  { id: 6, name: "Denim Jacket", price: 1599, image: img6 },
  { id: 7, name: "Partywear Frock", price: 1899, image: img7 },
  { id: 8, name: "Winter Coat", price: 2799, image: img8 },
];

function HomePage() {
  const handleAddToCart = (product) => {
    console.log("Adding to cart:", product);
    // TODO: Implement actual cart logic
  };

  const handleAddToWishlist = (product) => {
    console.log("Adding to wishlist:", product);
    // TODO: Implement actual wishlist logic
  };

  return (
    <div className="homepage">
      <Header />
      <VideoBanner videoSrc={videoSrc} />

      {/* Welcome Section with mini videos */}
      <section className="welcome-section">
        <div className="welcome-text">
          <h1>Welcome to Libas</h1>
          <p>Where Fashion Meets Elegance</p>
          <Link to="/products">
            <button className="explore-button">Explore Collection</button>
          </Link>
        </div>

        <div className="welcome-videos">
          <video src={require("../assets/Videos/V2.mp4")} autoPlay muted loop />
          <video src={require("../assets/Videos/V3.mp4")} autoPlay muted loop />
          <video src={require("../assets/Videos/V4.mp4")} autoPlay muted loop />
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <ProductList
          products={featuredProducts}
          onAddToCart={handleAddToCart}
          onAddToWishlist={handleAddToWishlist}
        />
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2>About Us</h2>
        <p>
          Libas is a premium fashion brand focused on redefining tradition with
          modern designs. From graceful ethnic wear to stylish casuals, we bring
          you handpicked collections that make a statement.
        </p>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta">
        <h3>Need help or want to reach us?</h3>
        <Link to="/contact">
          <button className="contact-button">Contact Us</button>
        </Link>
      </section>

      <Footer />
    </div>
  );
}

export default HomePage;
