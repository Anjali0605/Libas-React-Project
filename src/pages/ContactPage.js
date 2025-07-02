import React, { useState } from "react";
import "./ContactPage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-page">
      <Header />

      {/* Hero Section */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>Have questions? We'd love to hear from you!</p>
      </section>

      {/* Contact Form & Info */}
      <section className="contact-content">
        {/* Contact Form */}
        <div className="contact-form">
          <h2>Send a Message</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
            />

            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <h2>Reach Us At</h2>
          <p><strong>Address:</strong> 123 Fashion Street, Jaipur, India</p>
          <p><strong>Email:</strong> support@libas.com</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>

          {/* Google Map */}
          <div className="map-container">
            <iframe
              title="Libas Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.6982850442546!2d75.787270814876!3d26.912433283126477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5cf3a823ff9%3A0xc19c30efc02b1e5e!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1621508888888!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ContactPage;
