import React, { createContext, ReactNode, useState } from "react";

interface GlobalContextProps {
  tutorFormDisplay: boolean;
  loginFormDisplay: boolean;

  setTutorFormDisplay: React.Dispatch<React.SetStateAction<boolean>>;
  setLoginFormDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GlobalContext = createContext<GlobalContextProps>({
  tutorFormDisplay: false,
  loginFormDisplay: false,
  setTutorFormDisplay: () => {},
  setLoginFormDisplay: () => {},
});

interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [tutorFormDisplay, setTutorFormDisplay] = useState<boolean>(false);
  const [loginFormDisplay, setLoginFormDisplay] = useState<boolean>(false);

  return (
    <GlobalContext.Provider
      value={{
        tutorFormDisplay,
        setTutorFormDisplay,
        loginFormDisplay,
        setLoginFormDisplay,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
