import React from "react";

function ShortURL({ shortURL }) {
  return (
    <div className="mt-6 bg-gray-800 p-4 rounded text-center">
      <p className="text-lg">Your shortened URL:</p>
      <a
        href={shortURL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 underline"
      >
        {shortURL}
      </a>
    </div>
  );
}

export default ShortURL;

