import React from "react";
import { removeEmployee } from "../../../redux/slices/employeeSlice";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return isNaN(date) ? "" : date.toLocaleDateString();
};

export const FirstNameColumn = {
  Header: "First Name",
  accessor: "firstName",
  sortType: "alphanumeric",
  defaultCanSort: true,
};

export const LastNameColumn = {
  Header: "Last Name",
  accessor: "lastName",
  sortType: "alphanumeric",
  defaultCanSort: true,
};

export const StartDateColumn = {
  Header: "Start Date",
  accessor: "startDate",
  Cell: ({ value }) => formatDate(value),
  sortType: (a, b) =>
    new Date(a.original.startDate) - new Date(b.original.startDate),
  defaultCanSort: true,
};

export const DepartmentColumn = {
  Header: "Department",
  accessor: "department",
  sortType: "alphanumeric",
  defaultCanSort: true,
};

export const DateOfBirthColumn = {
  Header: "Date of Birth",
  accessor: "dateOfBirth",
  Cell: ({ value }) => formatDate(value),
  sortType: (a, b) =>
    new Date(a.original.dateOfBirth) - new Date(b.original.dateOfBirth),
  defaultCanSort: true,
};

export const StreetColumn = {
  Header: "Street",
  accessor: "street",
  sortType: "alphanumeric",
  defaultCanSort: true,
};

export const CityColumn = {
  Header: "City",
  accessor: "city",
  sortType: "alphanumeric",
  defaultCanSort: true,
};

export const StateColumn = {
  Header: "State",
  accessor: "state",
  sortType: "alphanumeric",
  defaultCanSort: true,
};

export const ZipCodeColumn = {
  Header: "Zip Code",
  accessor: "zipCode",
  sortType: "alphanumeric",
  defaultCanSort: true,
};

export const ActionsColumn = (dispatch, handleEditEmployee) => ({
  Header: "Actions",
  Cell: ({ row }) => (
    <div className="actions-container">
      <button
        onClick={() => dispatch(removeEmployee(row.original.id))}
        className="delete-button"
      >
        🗑️
      </button>
      <button
        onClick={() => handleEditEmployee(row.original)}
        className="edit-button"
      >
        ✏️
      </button>
    </div>
  ),
  disableSortBy: true,
});
