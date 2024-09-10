import {
  ActionsColumn,
  CityColumn,
  DateOfBirthColumn,
  DepartmentColumn,
  FirstNameColumn,
  LastNameColumn,
  StartDateColumn,
  StateColumn,
  StreetColumn,
  ZipCodeColumn,
} from "./TableColumnDefinitions";

export const getColumns = (dispatch, handleEditEmployee) => [
  FirstNameColumn,
  LastNameColumn,
  StartDateColumn,
  DepartmentColumn,
  DateOfBirthColumn,
  StreetColumn,
  CityColumn,
  StateColumn,
  ZipCodeColumn,
  ActionsColumn(dispatch, handleEditEmployee),
];
