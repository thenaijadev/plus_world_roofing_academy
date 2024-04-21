import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage/HomePage";
import Course from "../pages/Courses/Course";
import Contact from "../pages/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
        {path:'', element: <HomePage/>},
        {path:'courses', element: <Course/>},
        {path:'contact', element: <Contact/>},

    ]
  },
]);
