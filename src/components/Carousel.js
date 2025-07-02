import React, { useState, useEffect } from "react";
import "./Carousel.css";

function Carousel({ images = [], interval = 3000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    if (images.length === 0) return;

    const slide = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(slide);
  }, [images, interval]);

  if (!images || images.length === 0) {
    return <div className="carousel-empty">No images to display.</div>;
  }

  return (
    <div className="carousel">
      {images.map((img, index) => (
        <div
          key={index}
          className={`carousel-slide ${
            index === currentIndex ? "active" : ""
          }`}
        >
          <img src={img} alt={`Slide ${index + 1}`} loading="lazy" />
        </div>
      ))}

      {/* Dot Navigation */}
      <div className="carousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
