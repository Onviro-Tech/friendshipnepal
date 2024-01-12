import React, { useState, createContext } from "react";

// Define the shape of the context value with types
interface GlobalContextValue {
  navActive: string;
  setNavActive: React.Dispatch<React.SetStateAction<string>>;
}

export const GlobalContext = createContext<GlobalContextValue>({
  navActive: '',
  setNavActive: () => {},
});

export const GlobalContextProvider = (props:any) => {
  const [navActive, setNavActive] = useState<string>('');

  return (
    <GlobalContext.Provider
      value={{     
        navActive: navActive,
        setNavActive: setNavActive,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};