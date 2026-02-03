import React from "react";
import { useTable } from "./TableContext";

const TableFooter = () => {
  const {
    rowsPerPage,
    handleRowsChange,
    currentPage,
    setCurrentPage,
    totalPages,
  } = useTable();

  return (
    <div className="flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-3">
        <label className="text-sm text-gray-700">Rows Per Page</label>
        <select
          value={rowsPerPage}
          onChange={handleRowsChange}
          className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={5}>5</option>
        </select>
      </div>

      <div className="flex items-center gap-3">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="px-3 py-1 text-sm rounded-md border disabled:opacity-50"
        >
          Prev
        </button>

        <span className="text-sm text-gray-700">
          Page {currentPage} of {totalPages}
        </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="px-3 py-1 text-sm rounded-md border disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TableFooter;
