import React from "react";
import "./Filter.css";

const Filter = ({ setPageSize, pageSize }) => {
  return (
    <div>
      <label htmlFor="filter" name="filter">
        Show
        <select
          id="filter"
          name="filter"
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[10, 25, 50, 100].map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
        entries
      </label>
    </div>
  );
};

export default Filter;
