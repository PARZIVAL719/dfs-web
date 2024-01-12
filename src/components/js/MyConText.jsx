import { createContext, useContext } from 'react';

const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  // Define your state and functions here
  const sharedValue = 'Hello from Context';

  return (
    <MyContext.Provider value={{ sharedValue }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);