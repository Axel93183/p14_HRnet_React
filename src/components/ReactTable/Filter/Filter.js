import React from "react";
import "./Filter.css";

const Filter = ({ setPageSize, pageSize }) => {
  return (
    <select
      name="filter"
      value={pageSize}
      onChange={(e) => setPageSize(Number(e.target.value))}
    >
      {[10, 25, 50, 100].map((size) => (
        <option key={size} value={size}>
          Show {size} pages
        </option>
      ))}
    </select>
  );
};

export default Filter;
