import React, { useState } from "react";
import EmployeeForm from "../EmployeeForm/EmployeeForm";
import ModalComponent from "../ModalComponent/ModalComponent";

/**
 * CreateEmployee Component - Main component to create an employee
 * @returns {JSX.Element} The CreateEmployee component
 */
const CreateEmployee = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  /**
   * Fonction pour fermer le modal
   */
  const closeModal = () => setModalOpen(false);

  /**
   * Fonction appelée lors de la soumission réussie du formulaire
   */
  const handleSuccess = () => {
    // Ouvrir le modal de confirmation
    setModalOpen(true);
  };

  return (
    <div className="container">
      <h1>Create Employee</h1>
      <EmployeeForm onSuccess={handleSuccess} />
      <ModalComponent isOpen={isModalOpen} onClose={closeModal} />
      <a href="/employee-list">List of employees</a>
    </div>
  );
};

export default CreateEmployee;
