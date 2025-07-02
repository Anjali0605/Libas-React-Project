import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! Your message has been submitted.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form" noValidate>
        <div className="form-group">
          <label htmlFor="name">Name<span>*</span></label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email<span>*</span></label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message<span>*</span></label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
