import React from "react";
import "./AboutPage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Image imports (use require or import if bundler doesn’t resolve public path URLs)
import image21 from "../assets/Images/I21.jpeg";
import image22 from "../assets/Images/I22.jpeg";
import image23 from "../assets/Images/I23.jpeg";

function AboutPage() {
  return (
    <div className="about-page">
      <Header />

      {/* Hero Section */}
      <section className="about-hero">
        <h1>About Libas</h1>
        {/* <p>Your destination for elegant ethnic wear</p> */}
      </section>

      {/* Our Story Section */}
      <section className="about-content">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            Founded with a passion for fashion, <strong>Libas</strong> is a
            modern ethnic clothing brand that brings together tradition and
            trend. We specialize in premium suits, sarees, lehengas, and
            kurtis — handcrafted with love and styled for the contemporary
            woman.
          </p>
          <p>
            Our collections reflect rich cultural heritage, fused with
            innovative designs. Whether it’s a festive occasion or casual
            elegance, Libas provides the perfect attire to elevate your style.
          </p>
        </div>
        <div className="about-image">
          <img src={image21} alt="Libas brand" />
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision">
        <h2>Our Mission & Vision</h2>
        <p>
          At Libas, our mission is to make ethnic fashion accessible,
          affordable, and empowering for every woman. We aim to redefine the
          ethnic wear experience by blending tradition with innovation.
        </p>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src={image22} alt="Founder - Ananya Sharma" />
            <h4>Ananya Sharma</h4>
            <p>Founder & Creative Director</p>
          </div>
          <div className="team-member">
            <img src={image23} alt="Designer - Riya Mehta" />
            <h4>Riya Mehta</h4>
            <p>Head of Design</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AboutPage;
