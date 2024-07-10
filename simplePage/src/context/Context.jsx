import React, { createContext, useState, useContext } from 'react';

const StateContext = createContext();

export const useStateContext = () => useContext(StateContext);

export const StateProvider = ({ children }) => {
  const [buttonClicked, setButtonClicked] = useState(false);

  const toggleButton = () => {
    setButtonClicked(!buttonClicked);
  };

  return (
    <StateContext.Provider value={{ buttonClicked, toggleButton }}>
      {children}
    </StateContext.Provider>
  );
};
