import React from "react";
import "./VideoBanner.css";

function VideoBanner({ videoSrc, heading, subheading }) {
  return (
    <div className="video-banner">
      {/* Video background */}
      <video
        className="banner-video"
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />

      {/* Overlay content */}
      <div className="video-overlay">
        <h1>{heading}</h1>
        <p>{subheading}</p>
      </div>
    </div>
  );
}

export default VideoBanner;
