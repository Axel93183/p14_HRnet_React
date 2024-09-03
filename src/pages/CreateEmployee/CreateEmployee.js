import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalComponent from "../../components/ModalComponent/ModalComponent";
import EmployeeForm from "./../../components/EmployeeForm/EmployeeForm";

/**
 * CreateEmployee Component - Main component to create an employee
 * @returns {JSX.Element} The CreateEmployee component
 */

const CreateEmployee = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const closeModal = () => setModalOpen(false);

  const handleSuccess = () => {
    setModalOpen(true);
  };

  return (
    <div className="container">
      <h1>Create Employee</h1>
      <EmployeeForm onSuccess={handleSuccess} />
      <ModalComponent isOpen={isModalOpen} onClose={closeModal} />
      <Link to={"/employee-list"}>List of employees</Link>
    </div>
  );
};

export default CreateEmployee;
