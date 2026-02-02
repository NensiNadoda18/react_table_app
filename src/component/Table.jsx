import React from "react";
import "../Style.css";

const data = [
  { id: 1, name: "Nensi", email: "nensinadoda@gmail.com", role: "Admin", status: "Active" },
  { id: 2, name: "Vensi", email: "vensinadoda@gmail.com", role: "User", status: "Inactive" },
  { id: 3, name: "Densi", email: "densinadoda@gmail.com", role: "Admin", status: "Inactive" },
  { id: 4, name: "Kensi", email: "kensinadoda@gmail.com", role: "User", status: "Active" },
  { id: 5, name: "Mensi", email: "mensinadoda@gmail.com", role: "Admin", status: "Inactive" },
];

const Table = () => {
  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow-lg border border-gray-200">
      <table className="min-w-full">
        <thead className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
          <tr>
            {["ID", "Name", "Email", "Role", "Status", "Action"].map((h) => (
              <th key={h} className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                {h}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {data.map((u) => (
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
      </table>

      <div className="flex items-center gap-3 px-6 py-4">
        <label className="text-sm text-gray-700">Rows Per Page</label>
        <select className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
          <option>10</option>
          <option>20</option>
          <option>30</option>
        </select>
      </div>
    </div>
  );
};

export default Table;
