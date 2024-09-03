import React from "react";
import states from "../../data/states";
import FormField from "../Form/FormField";

/**
 * AddressForm Component - Form to input address details
 * @returns {JSX.Element} The AddressForm component
 */
const AddressForm = () => {
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
      />

      <FormField
        name="city"
        label="City"
        type="text"
        placeholder="Enter your city"
        required
      />

      <FormField
        name="state"
        label="State"
        type="select"
        options={stateOptions}
        required
      />

      <FormField
        name="zipCode"
        label="Zip Code"
        type="number"
        placeholder="Enter your zip code"
        required
      />
    </fieldset>
  );
};

export default AddressForm;
