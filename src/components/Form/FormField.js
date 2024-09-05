import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller, useFormContext } from "react-hook-form";
import "./FormField.css";

const FormField = ({
  name,
  label,
  type,
  placeholder,
  required,
  defaultValue,
  value,
  onInput,
  onChange,
  error,
  options,
  maxDate,
  minDate,
  control,
}) => {
  const {
    register,
    formState: { errors, isSubmitted },
  } = useFormContext();

  return (
    <div className="form-field">
      <label htmlFor={name}>{label}</label>
      {type === "select" ? (
        <select
          id={name}
          {...register(name, { required })}
          defaultValue={defaultValue}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : type === "date" ? (
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <div>
              <DatePicker
                id={name}
                selected={field.value || null}
                onChange={(date) => {
                  field.onChange(date);
                  if (onInput) onInput(date);
                }}
                maxDate={maxDate}
                minDate={minDate}
                showYearDropdown
                showMonthDropdown
                dropdownMode="select"
                dateFormat="dd/MM/yyyy"
              />
              {required && isSubmitted && !field.value && (
                <p className="error-message">{label} is required</p>
              )}
            </div>
          )}
        />
      ) : (
        <input
          id={name}
          {...register(name, { required })}
          type={type}
          placeholder={placeholder}
          defaultValue={defaultValue}
          onInput={onInput}
          onChange={onChange}
          value={value}
        />
      )}
      {errors[name] && <p className="error-message">{label} is required</p>}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default FormField;
