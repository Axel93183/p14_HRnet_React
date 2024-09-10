import React from "react";
import "./Search.css";

const Search = ({ globalFilter, setGlobalFilter }) => {
  return (
    <div className="search-container">
      <label htmlFor="search">Search :</label>
      <input
        id="search"
        name="search"
        value={globalFilter || ""}
        onChange={(e) => setGlobalFilter(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
