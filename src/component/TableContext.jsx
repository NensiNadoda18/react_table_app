/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext } from "react";

const TableContext = createContext(null);

export function useTable() {
  const context = useContext(TableContext);
  if (!context) {
    throw new Error("useTable must be used inside TableProvider");
  }
  return context;
}

export const TableProvider = TableContext.Provider;
