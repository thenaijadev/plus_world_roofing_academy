import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import './ComingSoon.css';
import { useLocation } from 'react-router-dom';
const ComingSoon = (props) => {
    const location = useLocation();
    const [secondsRemaining, setSecondsRemaining] = useState(3);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setSecondsRemaining(prevSeconds => Math.max(0, prevSeconds - 1));
            if (secondsRemaining === 0 && location.pathname !== props.redirectPath) {
                window.location.href = props.redirectPath;
            }
        }, 1000);
        return () => clearInterval(intervalId);
    }, [secondsRemaining, location.pathname, props.redirectPath]);
    return (_jsx("div", { children: _jsx("div", { className: "coming-soon-container d-flex justify-content-center align-items-center", children: _jsxs("div", { className: 'w-50 h-50 m-auto coming-soon-card text-center p-3 rounded-4 d-flex justify-content-center align-items-center flex-column', children: [_jsx("h1", { className: "coming-soon", children: "Coming soon" }), _jsxs("h6", { children: ["This page will be redirected in ", secondsRemaining, " seconds"] })] }) }) }));
};
export default ComingSoon;
