import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import AddressForm from "../AddressForm/AddressForm";
import Form from "../Form/Form";
import FormField from "../Form/FormField";
import "./EmployeeForm.css"; // Optionnel

/**
 * EmployeeForm Component - Form to input employee details
 * @param {Object} props - The properties for the component.
 * @param {Function} props.onSuccess - Callback function to call on successful submission.
 * @returns {JSX.Element} The EmployeeForm component
 */
const EmployeeForm = ({ onSuccess }) => {
  const today = new Date();

  /**
   * Fonction appelée lors de la soumission du formulaire
   * @param {Object} data - Les données du formulaire
   */
  const handleEmployeeSubmit = (data) => {
    // Enregistrer les données dans le localStorage ou ailleurs
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    employees.push(data);
    localStorage.setItem("employees", JSON.stringify(employees));

    // Appeler la fonction de succès, si elle est fournie
    if (onSuccess) {
      onSuccess();
    }
  };

  return (
    <Form onSubmit={handleEmployeeSubmit}>
      <FormField
        name="firstName"
        label="First Name"
        type="text"
        placeholder="Enter your first name"
        required
      />

      <FormField
        name="lastName"
        label="Last Name"
        type="text"
        placeholder="Enter your last name"
        required
      />

      <FormField
        name="dateOfBirth"
        label="Date of Birth"
        type="date"
        required
        maxDate={today}
      />

      <FormField
        name="startDate"
        label="Start Date"
        type="date"
        required
        maxDate={today}
      />

      <AddressForm />

      <FormField
        name="department"
        label="Department"
        type="select"
        options={[
          { value: "Sales", label: "Sales" },
          { value: "Marketing", label: "Marketing" },
          { value: "Engineering", label: "Engineering" },
          { value: "Human Resources", label: "Human Resources" },
          { value: "Legal", label: "Legal" },
        ]}
        required
      />

      <button type="submit">Save</button>
    </Form>
  );
};

export default EmployeeForm;
