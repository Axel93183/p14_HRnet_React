import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employees: JSON.parse(localStorage.getItem("employees")) || [],
};

const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employees = [...state.employees, action.payload];
    },
    removeEmployee: (state, action) => {
      state.employees = state.employees.filter(
        (employee) => employee.id !== action.payload
      );

      const savedEmployees =
        JSON.parse(localStorage.getItem("employees")) || [];

      const updatedEmployees = savedEmployees.filter(
        (employee) => employee.id !== action.payload
      );

      localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    },
  },
});

export const { addEmployee, removeEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
