import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import "./Form.css";

/**
 * Form component.
 * Renders a form that integrates with `react-hook-form` for managing form state and submission.
 * The component uses `FormProvider` to provide form methods context to child components.
 *
 * @param {Object} props - The props for the component.
 * @param {Function} props.onSubmit - Function to call when the form is submitted.
 * @param {React.ReactNode} props.children - Form fields and other elements to be rendered inside the form.
 * @param {string} [props.className] - Optional CSS class name to apply to the form.
 * @param {string} [props.error] - Optional error message to display.
 * @returns {JSX.Element} The rendered Form component with integrated form management and validation.
 */
const Form = ({ onSubmit, children, className, error }) => {
  const methods = useForm();

  const formClass = className ? className : "form";

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className={formClass}>
        {children}
        {error && <p className="error-message">{error}</p>}
      </form>
    </FormProvider>
  );
};

export default Form;
