import React, { useState } from "react";

function URLForm({ onShorten }) {
  const [longURL, setLongURL] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (longURL.trim() === "") return;
    onShorten(longURL);
    setLongURL("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row gap-4 items-center"
    >
      <input
        type="url"
        placeholder="Enter long URL"
        value={longURL}
        onChange={(e) => setLongURL(e.target.value)}
        className="p-2 w-72 rounded text-black"
        required
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
      >
        Shorten
      </button>
    </form>
  );
}

export default URLForm;
