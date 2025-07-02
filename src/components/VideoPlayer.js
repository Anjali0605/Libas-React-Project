import React from "react";
import "./VideoPlayer.css";

function VideoPlayer({ src, title }) {
  return (
    <div className="video-player-container">
      {title && <h3 className="video-title">{title}</h3>}
      <video className="video-player" src={src} controls preload="metadata">
        Sorry, your browser does not support embedded videos.
      </video>
    </div>
  );
}

export default VideoPlayer;
