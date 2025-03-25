import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();

    const apiKey = "63fd08b40a55a7od498ecfac7t28e16f";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form className="mt-4" onSubmit={search}>
        <input
          type="search"
          placeholder="ie. sunset, happy"
          autoFocus={true}
          onChange={handleKeywordChange}
          className="search-input"
        />
        <input type="submit" value="Search" className="search-button ms-1" />
      </form>
      <Results result={results} />
    </div>
  );
}
