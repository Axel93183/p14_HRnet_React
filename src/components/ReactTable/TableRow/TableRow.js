import React from "react";
import TableCell from "../TableCell/TableCell";
import "./TableRow.css";

const TableRow = ({ row, prepareRow }) => {
  prepareRow(row);
  const { key, ...rowProps } = row.getRowProps(); // Extraire la clé et les autres props
  return (
    <tr key={key} {...rowProps} className="table-row">
      {row.cells.map((cell) => (
        <TableCell key={cell.column.id} cell={cell} />
      ))}
    </tr>
  );
};

export default TableRow;
