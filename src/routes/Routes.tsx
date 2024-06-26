import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Contact from "../pages/Contact/Contact";
import Course from "../pages/Courses/Course";
import HomePage from "../pages/HomePage/HomePage";
// import Login from "../pages/login/login";
import ComingSoon from "../pages/ComingSoon/ComingSoon";
import SearchResult from "../pages/searchResult/searchResult";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "courses", element: <Course /> },
      { path: "contact", element: <Contact /> },
      {path: "search", element: <SearchResult/>},
      { path: "coming-soon", element: <ComingSoon redirectPath="/" /> },
    ],
  },
]);
