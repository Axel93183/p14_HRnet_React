import { useState } from "react";
import ModalComponent from "react-modal-plugin-hrnet-agmx";
import { Link } from "react-router-dom";
import EmployeeForm from "./../../components/EmployeeForm/EmployeeForm";
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
      <img src="/images/wealth-health.png" alt="logo wealth health" />
      <div className="page-header">
        <h1>HRNet</h1>
        <h2>Create Employee</h2>
      </div>
      <Link to={"/employee-list"} className="page-link">
        View Current Employees
      </Link>
      <EmployeeForm onSuccess={handleSuccess} />
      <Link to={"/employee-list"} className="page-link">
        View Current Employees
      </Link>
      <ModalComponent isOpen={isModalOpen} onClose={closeModal} className="">
        <h2>Employee Created!</h2>
        <p>Your employee was successfully added to the list.</p>
        <button onClick={closeModal}>Close</button>
      </ModalComponent>
    </div>
  );
};

export default CreateEmployee;
