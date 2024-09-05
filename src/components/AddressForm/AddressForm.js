import React from "react";
import states from "../../data/states";
import FormField from "../Form/FormField";
import "./AddressForm.css";

const AddressForm = ({ control }) => {
  const stateOptions = states.map((state) => ({
    value: state.abbreviation,
    label: state.name,
  }));

  return (
    <fieldset className="address">
      <legend>Address</legend>

      <FormField
        name="street"
        label="Street"
        type="text"
        placeholder="Enter your street"
        required
        className="form-field"
        control={control}
      />

      <FormField
        name="city"
        label="City"
        type="text"
        placeholder="Enter your city"
        required
        className="form-field"
        control={control}
      />

      <FormField
        name="state"
        label="State"
        type="select"
        options={stateOptions}
        required
        className="form-field"
        control={control}
      />

      <FormField
        name="zipCode"
        label="Zip Code"
        type="number"
        placeholder="Enter your zip code"
        required
        className="form-field"
        control={control}
      />
    </fieldset>
  );
};

export default AddressForm;
