import React, { useState } from "react";
import "./App.css";

function App() {
  const [shortURL, setShortURL] = useState("");

  const handleShorten = (longURL) => {
    const randomString = Math.random().toString(36).substring(2, 7);
    const shortURL = `https://short.ly/${randomString}`;
    setShortURL(shortURL);
  };

  return (
    <div className="container">
      <h1>🔗 URL Shortener</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const input = e.target.elements.url.value;
          handleShorten(input);
          e.target.reset();
        }}
      >
        <input type="url" name="url" placeholder="Enter long URL" required />
        <button type="submit">Shorten</button>
      </form>
      {shortURL && (
        <div className="short-url">
          <p>Your shortened URL:</p>
          <a href={shortURL} target="_blank" rel="noopener noreferrer">
            {shortURL}
          </a>
        </div>
      )}
    </div>
  );
}

export default App;

