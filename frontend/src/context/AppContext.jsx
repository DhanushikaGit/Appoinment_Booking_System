import { createContext } from 'react';
import { doctors } from '../assets/assets'; // Verify this path and ensure doctors is an array

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const currencySymbol = 'Rs';

  const value = {
    doctors: doctors || [], // Fallback to empty array
    currencySymbol,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;