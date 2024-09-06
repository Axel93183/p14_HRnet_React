import { useState } from "react";
import { Link } from "react-router-dom";
import EmployeeForm from "./../../components/EmployeeForm/EmployeeForm";
import ModalComponent from "react-modal-plugin-hrnet-agmx";
import "./CreateEmployee.css";

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
    <div className="container ">
      <h1>Create Employee</h1>
      <Link to={"/employee-list"} className="page-link">
        View Current Employees
      </Link>
      <EmployeeForm onSuccess={handleSuccess} />
      <ModalComponent isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default CreateEmployee;
