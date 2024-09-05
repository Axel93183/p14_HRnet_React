import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import "./Form.css";

const Form = ({ onSubmit, children, className, error }) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit((data) => onSubmit(data, methods))}
        className={`form ${className}`}
      >
        {children}
        {error && <p className="error-message">{error}</p>}
      </form>
    </FormProvider>
  );
};

export default Form;
