import React from "react";
import "./TableCell.css";

const TableCell = ({ cell }) => {
  const { key, ...cellProps } = cell.getCellProps(); // Extraire la clé et les autres props
  return (
    <td key={key} {...cellProps} className="table-cell">
      {cell.render("Cell")}
    </td>
  );
};

export default TableCell;
