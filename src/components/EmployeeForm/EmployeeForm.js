import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addEmployee } from "../../redux/slices/employeeSlice";
import AddressForm from "../AddressForm/AddressForm";
import Form from "../Form/Form";
import FormField from "../Form/FormField";
import "./EmployeeForm.css";

const EmployeeForm = ({ onSuccess }) => {
  const [startDate, setStartDate] = useState(null);
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [formError, setFormError] = useState("");
  const today = new Date();

  const dispatch = useDispatch();

  const validateDates = (newDate, type) => {
    if (type === "startDate") {
      setStartDate(newDate);

      if (dateOfBirth && newDate < dateOfBirth) {
        return;
      }
    }

    if (type === "dateOfBirth") {
      setDateOfBirth(newDate);

      if (startDate && newDate > startDate) {
        return;
      }
    }
  };

  const handleEmployeeSubmit = (data, methods) => {
    const { reset, clearErrors } = methods;

    if (!startDate || !dateOfBirth) {
      setFormError("Please fill in all required fields.");
      return;
    }

    const employeeData = {
      id: uuidv4(),
      ...data,
      startDate: startDate ? startDate.toISOString() : "",
      dateOfBirth: dateOfBirth ? dateOfBirth.toISOString() : "",
    };

    dispatch(addEmployee(employeeData));
    console.log("Data sent to redux store :", employeeData);

    if (onSuccess) {
      onSuccess();
    }

    clearErrors();
    reset();
    setFormError("");
  };

  return (
    <Form onSubmit={handleEmployeeSubmit} className="employee-form">
      {formError && <p className="error-message">{formError}</p>}
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
        onInput={(date) => validateDates(date, "dateOfBirth")}
      />
      <FormField
        name="startDate"
        label="Start Date"
        type="date"
        required
        maxDate={today}
        minDate={dateOfBirth}
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
      {formError && <p className="error-message">{formError}</p>}
    </Form>
  );
};

export default EmployeeForm;
