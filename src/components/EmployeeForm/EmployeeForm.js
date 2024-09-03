import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import AddressForm from "../AddressForm/AddressForm";
import Form from "../Form/Form";
import FormField from "../Form/FormField";
import "./EmployeeForm.css";

/**
 * EmployeeForm Component - Form to input employee details
 * @param {Object} props - The properties for the component.
 * @param {Function} props.onSuccess - Callback function to call on successful submission.
 * @returns {JSX.Element} The EmployeeForm component
 */
const EmployeeForm = ({ onSuccess }) => {
  const [startDate, setStartDate] = useState(null);
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [dateError, setDateError] = useState("");
  const today = new Date();

  /**
   * Function to validate dates and update errors
   * @param {Date} newDate - The newly selected date
   * @param {string} type - The type of date ("startDate" or "dateOfBirth")
   */
  const validateDates = (newDate, type) => {
    let errorMessage = "";

    if (type === "startDate") {
      setStartDate(newDate);
    }

    if (type === "dateOfBirth") {
      setDateOfBirth(newDate);
      if (newDate > startDate) {
        errorMessage = "Date of Birth cannot be after Start Date.";
      }
    }

    setDateError(errorMessage);
  };

  /**
   * Function called when the form is submitted
   * @param {Object} data - The form data
   */
  const handleEmployeeSubmit = (data) => {
    if (dateError) {
      return;
    }

    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    employees.push(data);
    localStorage.setItem("employees", JSON.stringify(employees));

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
        maxDate={startDate}
        error={dateError}
        onInput={(date) => validateDates(date, "dateOfBirth")}
      />

      <FormField
        name="startDate"
        label="Start Date"
        type="date"
        required
        maxDate={today}
        minDate={dateOfBirth}
        error={dateError}
        onInput={(date) => validateDates(date, "startDate")}
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
