import React from "react";
import { useTable } from "./TableContext";

const TableBody = () => {
  const { currentData } = useTable();

  return (
    <tbody className="divide-y divide-gray-200">
      {currentData.map((u) => (
        <tr key={u.id} className="hover:bg-indigo-50 transition">
          <td className="px-6 py-4 text-sm text-gray-700">{u.id}</td>
          <td className="px-6 py-4 text-sm text-gray-700">{u.name}</td>
          <td className="px-6 py-4 text-sm text-gray-700">{u.email}</td>
          <td className="px-6 py-4 text-sm text-gray-700">{u.role}</td>

          <td className="px-6 py-4">
            <span
              className={`px-3 py-1 text-xs font-medium rounded-full ${
                u.status === "Active"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {u.status}
            </span>
          </td>

          <td className="px-6 py-4">
            <button className="px-3 py-1 text-sm rounded-md bg-blue-100 text-blue-700 hover:bg-blue-200 transition">
              Edit
            </button>
            <button className="ml-2 px-3 py-1 text-sm rounded-md bg-red-100 text-red-700 hover:bg-red-200 transition">
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
