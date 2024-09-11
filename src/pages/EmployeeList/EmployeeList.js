import React from "react";
import { Link } from "react-router-dom";
import Table from "../../components/ReactTable/Table/Table";
import "./EmployeeList.css";

const EmployeeList = () => {
  const handleEditEmployee = (employee) => {
    console.log("Edit employee:", employee);
  };

  return (
    <div className="container employee-list-container">
      <img src="/images/wealth-health.png" alt="logo wealth health" />
      <div className="page-header">
        <h1>HRNet</h1>
        <h2>Current Employees</h2>
      </div>
      <Link to="/" className="page-link">
        Home
      </Link>
      <Table handleEditTable={handleEditEmployee} />
    </div>
  );
};

export default EmployeeList;
