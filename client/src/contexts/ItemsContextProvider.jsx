import React, { createContext, useState } from "react";

export const ItemsContext = createContext();

const ItemsContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  return (
    <ItemsContext.Provider value={{ items, setItems }}>
      {children}
    </ItemsContext.Provider>
  );
};

export default ItemsContextProvider;
