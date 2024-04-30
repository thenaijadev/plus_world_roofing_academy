import React, { createContext, useState, ReactNode, } from 'react';

interface GlobalContextProps {
  tutorFormDisplay: boolean;
  setTutorFormDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GlobalContext = createContext<GlobalContextProps>({
  tutorFormDisplay: false,
  setTutorFormDisplay: () => {},
});

interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [tutorFormDisplay, setTutorFormDisplay] = useState<boolean>(false);

  return (
    <GlobalContext.Provider value={{ tutorFormDisplay, setTutorFormDisplay }}>
      {children}
    </GlobalContext.Provider>
  );
};
