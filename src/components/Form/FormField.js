import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useFormContext } from "react-hook-form";
import "./FormField.css";

/**
 * FormField component.
 * Renders a form input or select field with a label, using `react-hook-form` for form management.
 *
 * @param {Object} props - The properties for the component.
 * @param {string} props.name - The name attribute for the input/select field, used for registration and error handling.
 * @param {string} props.label - The label to display for the input/select field.
 * @param {string} props.type - The type of the input field (e.g., email, password, text).
 * @param {string} [props.placeholder] - Placeholder text for the input field.
 * @param {boolean} [props.required] - Indicates if the field is required.
 * @param {Date} [props.defaultValue] - The default value for the input/select field.
 * @param {Function} [props.onInput] - Function to call when the input/select value changes.
 * @param {string} [props.error] - Optional error message to display.
 * @param {Array} [props.options] - Optional array of options for a select field.
 * @param {Date} [props.maxDate] - Optional max date for date picker.
 * @param {Date} [props.minDate] - Optional min date for date picker.
 * @returns {JSX.Element} The rendered FormField component with integrated form management and validation.
 */
const FormField = ({
  name,
  label,
  type,
  placeholder,
  required,
  defaultValue,
  onInput,
  error,
  options,
  maxDate,
  minDate,
}) => {
  const {
    register,
    setValue,
    watch,
    formState: { errors, isSubmitted },
  } = useFormContext();

  const fieldValue = watch(name);

  return (
    <div className="form-field">
      <label htmlFor={name}>{label}</label>
      {type === "select" ? (
        <select
          id={name}
          {...register(name, { required })}
          defaultValue={defaultValue}
          onInput={onInput}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : type === "date" ? (
        <div>
          <DatePicker
            id={name}
            selected={fieldValue || defaultValue}
            onChange={(date) => {
              setValue(name, date);
              if (onInput) onInput(date);
            }}
            maxDate={maxDate}
            minDate={minDate}
            showYearDropdown
            showMonthDropdown
            dropdownMode="select"
            dateFormat="dd/MM/yyyy"
          />
          {required && isSubmitted && !fieldValue && (
            <p className="error-message">{label} is required</p>
          )}
        </div>
      ) : (
        <input
          id={name}
          {...register(name, { required })}
          type={type}
          placeholder={placeholder}
          defaultValue={defaultValue}
          onInput={onInput}
        />
      )}
      {errors[name] && <p className="error-message">{label} is required</p>}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default FormField;
