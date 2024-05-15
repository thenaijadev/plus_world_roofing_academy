import React, { createContext, ReactNode, useState } from "react";

interface GlobalContextProps {
  tutorFormDisplay: boolean;
  loginFormDisplay: boolean;
  shouldSearch: boolean;

  setTutorFormDisplay: React.Dispatch<React.SetStateAction<boolean>>;
  setLoginFormDisplay: React.Dispatch<React.SetStateAction<boolean>>;
  setShouldSearch: React.Dispatch<React.SetStateAction<boolean>>
}

export const GlobalContext = createContext<GlobalContextProps>({
  tutorFormDisplay: false,
  loginFormDisplay: false,
  shouldSearch: false,
  setTutorFormDisplay: () => {},
  setLoginFormDisplay: () => {},
  setShouldSearch: () => {}
});

interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [tutorFormDisplay, setTutorFormDisplay] = useState<boolean>(false);
  const [loginFormDisplay, setLoginFormDisplay] = useState<boolean>(false);
  const [shouldSearch, setShouldSearch] = useState<boolean>(false);

  return (
    <GlobalContext.Provider
      value={{
        tutorFormDisplay,
        setTutorFormDisplay,
        loginFormDisplay,
        setLoginFormDisplay,
        shouldSearch,
        setShouldSearch
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
