import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useSortBy, useTable } from "react-table";
import { removeEmployee } from "../../redux/slices/employeeSlice";
import "./EmployeeList.css";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return isNaN(date) ? "" : date.toLocaleDateString();
};

const EmployeeList = () => {
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const employees = useSelector((state) => state.employees.employees);
  const dispatch = useDispatch();

  const data = React.useMemo(() => employees, [employees]);

  const columns = React.useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "firstName",
        sortType: "alphanumeric",
      },
      {
        Header: "Last Name",
        accessor: "lastName",
        sortType: "alphanumeric",
      },
      {
        Header: "Start Date",
        accessor: "startDate",
        Cell: ({ value }) => formatDate(value),
        sortType: (a, b) =>
          new Date(a.original.startDate) - new Date(b.original.startDate),
      },
      {
        Header: "Department",
        accessor: "department",
        sortType: "alphanumeric",
      },
      {
        Header: "Date of Birth",
        accessor: "dateOfBirth",
        Cell: ({ value }) => formatDate(value),
        sortType: (a, b) =>
          new Date(a.original.dateOfBirth) - new Date(b.original.dateOfBirth),
      },
      {
        Header: "Street",
        accessor: "street",
        sortType: "alphanumeric",
      },
      {
        Header: "City",
        accessor: "city",
        sortType: "alphanumeric",
      },
      {
        Header: "State",
        accessor: "state",
        sortType: "alphanumeric",
      },
      {
        Header: "Zip Code",
        accessor: "zipCode",
        sortType: "alphanumeric",
      },
      {
        Header: "Actions",
        Cell: ({ row }) => (
          <button
            onClick={() => dispatch(removeEmployee(row.original.id))}
            className="delete-button"
          >
            🗑️
          </button>
        ),
      },
    ],
    [dispatch]
  );

  const tableInstance = useTable({ columns, data }, useSortBy);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  const handleEntriesChange = (event) => {
    setEntriesPerPage(Number(event.target.value));
  };

  return (
    <div className="container">
      <h2>Current Employees</h2>
      <Link to="/" className="page-link">
        Home
      </Link>
      <div className="dataTables_length" id="employee-table_length">
        <label>
          Show{" "}
          <select
            name="employee-table_length"
            aria-controls="employee-table"
            value={entriesPerPage}
            onChange={handleEntriesChange}
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>{" "}
          entries
        </label>
      </div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  key={column.id}
                  className={
                    column.isSorted
                      ? column.isSortedDesc
                        ? "sorted-desc"
                        : "sorted-asc"
                      : ""
                  }
                >
                  <span>
                    {column.render("Header")}
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <span> 🔽 </span>
                      ) : (
                        <span> 🔼 </span>
                      )
                    ) : (
                      <span> ↕️ </span>
                    )}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {rows.slice(0, entriesPerPage).map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row.id}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} key={cell.column.id}>
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
