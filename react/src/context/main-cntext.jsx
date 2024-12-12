import { createContext, useState } from "react";

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  return (
    <MainContext.Provider value={{ cart, favorites, setCart, setFavorites }}>
      {children}
    </MainContext.Provider>
  );
};
