import React, { useState } from "react";
import "./main.css";

function Search() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <>
      <div className="content-search">
        <input
          className="content-input"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
        <div>
          <button className="content-button" type="submit">
            Submit
          </button>
        </div>
      </div>
      {inputValue}
    </>
  );
}

export default Search;
