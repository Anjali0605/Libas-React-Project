import React from "react";
import "./ErrorMessage.css";

function ErrorMessage({ message }) {
  if (!message || typeof message !== "string") return null;

  return (
    <div className="error-message" role="alert" aria-live="assertive">
      <p>{message}</p>
    </div>
  );
}

export default ErrorMessage;
