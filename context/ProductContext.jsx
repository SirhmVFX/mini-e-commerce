"use client";

import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <ProductContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </ProductContext.Provider>
  );
};
