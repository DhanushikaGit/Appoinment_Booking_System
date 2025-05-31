import { createContext } from 'react';
import { doctors } from '../assets/assets';

export const AppContext = createContext();
const currencySymbol ="Rs"


const AppContextProvider = ({ children }) => {
  const value = {
    doctors,currencySymbol, // Added currencySymbol to the context
  };

  return (
    <AppContext.Provider value={value}>
      {children} {/* Fixed typo and use correct children prop */}
    </AppContext.Provider>
  );
};

export default AppContextProvider;