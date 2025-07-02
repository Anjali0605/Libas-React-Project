import React, { useState } from "react";
import "./LogoChanger.css";

function LogoChanger() {
  const [logoInput, setLogoInput] = useState("");
  const [currentLogo, setCurrentLogo] = useState("/favicon.ico");
  const [error, setError] = useState("");

  // Update favicon dynamically
  const updateFavicon = (url) => {
    let favicon = document.querySelector("link[rel='icon']");
    if (!favicon) {
      favicon = document.createElement("link");
      favicon.setAttribute("rel", "icon");
      document.head.appendChild(favicon);
    }
    favicon.setAttribute("href", url);
  };

  const handleChange = () => {
    if (!logoInput.trim()) {
      setError("Please enter a valid image URL.");
      return;
    }

    // Validate image URL format (basic check)
    if (!logoInput.match(/\.(png|ico|jpg|jpeg|svg)$/i)) {
      setError("URL must point to a .png, .jpg, .svg, or .ico file.");
      return;
    }

    setError("");
    setCurrentLogo(logoInput);
    updateFavicon(logoInput);
  };

  return (
    <div className="logo-changer">
      <h2>Change Website Logo</h2>
      <input
        type="text"
        placeholder="Paste image URL (e.g., logo.png)"
        value={logoInput}
        onChange={(e) => setLogoInput(e.target.value)}
      />
      <button onClick={handleChange}>Apply Logo</button>

      {error && <p className="error">{error}</p>}

      {currentLogo && (
        <div className="preview">
          <p>Current Logo:</p>
          <img src={currentLogo} alt="Current Logo" />
        </div>
      )}
    </div>
  );
}

export default LogoChanger;
