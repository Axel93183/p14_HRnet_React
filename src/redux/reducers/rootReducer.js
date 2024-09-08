import { combineReducers } from "@reduxjs/toolkit";
import employeeReducer from "../slices/employeeSlice";

const rootReducer = combineReducers({
  employees: employeeReducer,
});

export default rootReducer;
