import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState } from "react";
export const GlobalContext = createContext({
    tutorFormDisplay: false,
    loginFormDisplay: false,
    setTutorFormDisplay: () => { },
    setLoginFormDisplay: () => { },
});
export const GlobalProvider = ({ children }) => {
    const [tutorFormDisplay, setTutorFormDisplay] = useState(false);
    const [loginFormDisplay, setLoginFormDisplay] = useState(false);
    return (_jsx(GlobalContext.Provider, { value: {
            tutorFormDisplay,
            setTutorFormDisplay,
            loginFormDisplay,
            setLoginFormDisplay,
        }, children: children }));
};
