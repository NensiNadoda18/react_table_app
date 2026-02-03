import React, { useMemo, useState } from "react";
import "../Style.css";
import { TableProvider } from "./TableContext";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";

const DATA = [
  { id: 1, name: "Nensi", email: "nensinadoda@gmail.com", role: "Admin", status: "Active" },
  { id: 2, name: "Vensi", email: "vensinadoda@gmail.com", role: "User", status: "Inactive" },
  { id: 3, name: "Densi", email: "densinadoda@gmail.com", role: "Admin", status: "Inactive" },
  { id: 4, name: "Kensi", email: "kensinadoda@gmail.com", role: "User", status: "Active" },
  { id: 5, name: "Mensi", email: "mensinadoda@gmail.com", role: "Admin", status: "Inactive" },
];

const Table = () => {
  const [rowsPerPage, setRowsPerPage] = useState(2);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("asc"); 

  const toggleSort = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    setCurrentPage(1);
  };

  const sortedData = useMemo(() => {
    const copy = [...DATA];
    copy.sort((a, b) => (sortOrder === "asc" ? a.id - b.id : b.id - a.id));
    return copy;
  }, [sortOrder]);

  const totalPages = useMemo(
    () => Math.ceil(sortedData.length / rowsPerPage),
    [sortedData.length, rowsPerPage]
  );

  const currentData = useMemo(() => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    return sortedData.slice(startIndex, startIndex + rowsPerPage);
  }, [sortedData, currentPage, rowsPerPage]);

  const handleRowsChange = (e) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const value = {
    currentData,
    rowsPerPage,
    setRowsPerPage,
    currentPage,
    setCurrentPage,
    totalPages,
    handleRowsChange,
    sortOrder,
    toggleSort,
  };

  return (
    <TableProvider value={value}>
      <div className="overflow-x-auto bg-white rounded-xl shadow-lg border border-gray-200">
        <table className="min-w-full">
          <TableHeader />
          <TableBody />
        </table>
        <TableFooter />
      </div>
    </TableProvider>
  );
};

export default Table;
