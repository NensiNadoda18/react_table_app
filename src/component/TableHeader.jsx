import React from "react";
import { useTable } from "./TableContext";

const TableHeader = () => {
  const { sortOrder, toggleSort } = useTable();

  return (
    <thead className="bg-gradient-to-r from-indigo-500 to-indigo-900 text-white">
      <tr>
        <th
          onClick={toggleSort}
          className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider cursor-pointer select-none"
        >
          ID {sortOrder === "asc" ? "↑" : "↓"}
        </th>

        <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
          Name
        </th>
        <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
          Email
        </th>
        <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
          Role
        </th>
        <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
          Status
        </th>
        <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
          Action
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
