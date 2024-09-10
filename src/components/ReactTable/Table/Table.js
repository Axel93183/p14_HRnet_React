import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useFilters,
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import Filter from "../Filter/Filter";
import Pagination from "../Pagination/Pagination";
import Search from "../Search/Search";
import { getColumns } from "../TableColumns/TableColumns";
import TableRow from "../TableRow/TableRow";
import "./Table.css";

const Table = ({ handleEditTable }) => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees.employees);

  const columns = React.useMemo(
    () => getColumns(dispatch, handleEditTable),
    [dispatch, handleEditTable]
  );
  const data = React.useMemo(() => employees, [employees]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, globalFilter },
    setGlobalFilter,
  } = useTable(
    { columns, data },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  return (
    <>
      <div className="top-table-container">
        <Search globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />
        <Filter setPageSize={setPageSize} pageSize={pageSize} />
      </div>
      <table {...getTableProps()} className="table">
        <thead>
          {headerGroups.map((headerGroup) => {
            const { key, ...headerGroupProps } =
              headerGroup.getHeaderGroupProps();
            return (
              <tr key={key} {...headerGroupProps}>
                {headerGroup.headers.map((column) => {
                  const { key, ...columnProps } = column.getHeaderProps(
                    column.getSortByToggleProps()
                  );
                  return (
                    <th key={key} {...columnProps}>
                      {column.render("Header")}
                      <span>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? " 🔽"
                            : " 🔼"
                          : ""}
                      </span>
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.length === 0 ? (
            <tr>
              <td colSpan={columns.length} style={{ textAlign: "center" }}>
                No data available in table
              </td>
            </tr>
          ) : (
            page.map((row) => (
              <TableRow key={row.id} row={row} prepareRow={prepareRow} />
            ))
          )}
        </tbody>
      </table>
      <Pagination
        pageIndex={pageIndex}
        pageCount={pageCount}
        canPreviousPage={canPreviousPage}
        canNextPage={canNextPage}
        gotoPage={gotoPage}
        nextPage={nextPage}
        previousPage={previousPage}
        pageOptions={pageOptions}
      />
    </>
  );
};

export default Table;
