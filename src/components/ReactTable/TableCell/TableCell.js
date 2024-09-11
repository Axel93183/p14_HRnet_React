import React from "react";
import "./TableCell.css";

const TableCell = ({ cell }) => {
  const { key, ...cellProps } = cell.getCellProps();
  return (
    <td key={key} {...cellProps} className="table-cell">
      {cell.render("Cell")}
    </td>
  );
};

export default TableCell;
