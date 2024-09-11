import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("employees")) || [];

const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      const updatedEmployees = [...state, action.payload];
      localStorage.setItem("employees", JSON.stringify(updatedEmployees));
      return updatedEmployees;
    },
    removeEmployee: (state, action) => {
      const updatedEmployees = state.filter(
        (employee) => employee.id !== action.payload
      );
      localStorage.setItem("employees", JSON.stringify(updatedEmployees));
      return updatedEmployees;
    },
  },
});

export const { addEmployee, removeEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
