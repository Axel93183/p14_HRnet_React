# HRNet Employee Management Application

![logo wealth health](public/images/wealth-health.png)

This is a **React** application built for managing employees in a Human Resources system, featuring employee creation, listing, and sorting capabilities. It integrates **React**, **Redux**, and **react-table** to provide an efficient and user-friendly interface.

## Features

- **Create Employee**: Add new employees through a form that includes validation.
- **Employee List**: View a sortable, paginated table of employees.
- **Search & Filter**: Easily search for employees and filter the results.
- **Actions**: Edit or delete employees directly from the list.
- **Responsive Design**: Optimized for various screen sizes.
- **Modal Notifications**: Get confirmation notifications upon successful employee creation.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Redux**: State management for handling global application state.
- **React Router**: Used for navigating between pages.
- **react-table**: A flexible library to create a dynamic table with sorting and pagination.
- **React Hook Form**: Managing form inputs and validation.
- **Custom Plugin**: `react-modal-plugin-hrnet-agmx` for modal handling.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Axel93183/p14_HRnet_React.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the application:
   ```bash
   npm start
   ```

## Usage

### Create an Employee

Navigate to the **Create Employee** page. Fill in the required details in the form and submit. A modal will confirm the successful creation of the employee.

### View Employee List

Go to the **Current Employees** page to view the list of employees. You can sort columns by clicking on the headers, search for employees using the search bar, or delete/edit employees via the action buttons.

### Pagination & Entries

Control the number of entries displayed per page and navigate between pages using the pagination buttons.

## Project Structure

```
src/
│
├── components/
│   ├── AddressForm/
│   │   ├── AddressForm.css
│   │   └── AddressForm.js
│   │
│   ├── EmployeeForm/
│   │   ├── EmployeeForm.css
│   │   └── EmployeeForm.js
│   │
│   └── Form/
│       ├── Form.css
│       ├── Form.js
│       ├── FormField.css
│       └── FormField.js
│
├── data/
│   └── states.js
│
├── pages/
│   ├── CreateEmployee/
│   │   ├── CreateEmployee.css
│   │   └── CreateEmployee.js
│   │
│   └── EmployeeList/
│       ├── EmployeeList.css
│       └── EmployeeList.js
│
├── redux/
│   ├── reducers/
│   │   └── rootReducer.js
│   └── slices/
│       └── employeeSlice.js
│   └── store.js
│
├── types/
│   └── react-modal-plugin-hrnet-agmx.d.ts
│
├── App.css
├── App.js
├── App.test.js
├── index.css
├── index.js
├── logo.svg
├── reportWebVitals.js
└── setupTests.js
```

- **components/**: Contains reusable UI components such as forms (AddressForm, EmployeeForm, and Form).
- **data/**: Holds static data like `states.js` used for form dropdowns.
- **pages/**: Contains page-specific components for employee creation and list display.
- **redux/**: Contains Redux store setup, reducers, and slices for managing global state.
- **types/**: Stores type definitions for the custom modal plugin.

- **Root files**: Core application setup files, including entry points (`index.js`, `App.js`), styles, tests, and utilities.

## Performance Monitoring

For performance audits, it is recommended to run **Lighthouse** on both development and production builds.

1. Start the app in development mode:
   ```bash
   npm start
   ```
2. Run Lighthouse for performance insights and optimization opportunities.

## Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License.
