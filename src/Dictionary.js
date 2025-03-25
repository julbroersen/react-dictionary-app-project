import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  function search(event) {
    event.preventDefault();
    alert(`Searching for the definition of ${keyword}`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="ie. sunset, happy"
          autoFocus={true}
          onChange={handleKeywordChange}
          className="search-input"
        />
        <input type="submit" value="Search" className="search-button ms-1" />
      </form>
    </div>
  );
}
