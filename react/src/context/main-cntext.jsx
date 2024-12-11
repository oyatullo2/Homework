import { createContext, useState } from "react";

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <MainContext.Provider value={{ cart, setCart }}>
      {children}
    </MainContext.Provider>
  );
};
