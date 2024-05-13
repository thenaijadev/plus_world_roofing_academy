import { jsx as _jsx } from "react/jsx-runtime";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Contact from "../pages/Contact/Contact";
import Course from "../pages/Courses/Course";
import HomePage from "../pages/HomePage/HomePage";
// import Login from "../pages/login/login";
import ComingSoon from "../pages/ComingSoon/ComingSoon";
export const router = createBrowserRouter([
    {
        path: "/",
        element: _jsx(App, {}),
        children: [
            { path: "", element: _jsx(HomePage, {}) },
            { path: "courses", element: _jsx(Course, {}) },
            { path: "contact", element: _jsx(Contact, {}) },
            // { path: "login", element: <Login /> },
            { path: "coming-soon", element: _jsx(ComingSoon, { redirectPath: "/" }) },
        ],
    },
]);
