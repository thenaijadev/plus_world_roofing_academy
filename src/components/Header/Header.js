import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Input } from "reactstrap";
import { ArrowDown, CartIcon, CategoryIcon, FavouriteIcon, Logo, Menu, SearchIcon, } from "../../assets";
import { GlobalContext } from "../../GlobalProvider";
import MyButton from "../MyButton/MyButton";
import "./Header.css";
const Header = () => {
    const { setTutorFormDisplay, tutorFormDisplay } = useContext(GlobalContext);
    const { setLoginFormDisplay, loginFormDisplay } = useContext(GlobalContext);
    // const  navRef = useRef();
    const showNavbar = () => {
        // navRef.current.classList.toggle('nav-mobile-display')
    };
    function handleTutorForm() {
        if (tutorFormDisplay) {
            setTutorFormDisplay(false);
        }
        else {
            setTutorFormDisplay(true);
        }
    }
    function handleLoginFormDisplay() {
        if (loginFormDisplay) {
            setLoginFormDisplay(false);
        }
        else {
            setLoginFormDisplay(true);
        }
    }
    return (_jsxs(_Fragment, { children: [_jsxs("nav", { className: "d-flex nav px-5 py-3 justify-content-between align-items-center", children: [_jsx("img", { src: Logo, alt: "logo" }), _jsx("div", { className: "d-none hamburger_menu p-1 ", children: _jsx("button", { onClick: showNavbar, children: _jsx("img", { src: Menu, alt: "menu icon" }) }) }), _jsxs("div", { className: "menu_list d-flex justify-content-between gap-5 align-items-center", children: [_jsx("div", { className: "d-flex align-items-center", children: _jsxs("ul", { className: "d-flex align-items-center w-100 gap-4 mb-0", children: [_jsx("li", { className: "", children: _jsx(NavLink, { className: "fw-bold", to: "/", children: "Home" }) }), _jsx("li", { children: _jsx(NavLink, { className: "fw-bold", to: "courses", children: "Courses" }) }), _jsx("li", { children: _jsx(NavLink, { className: "fw-bold", to: "contact", children: "Contact" }) })] }) }), _jsxs("div", { className: "d-flex gap-2 align-items-center ", children: [_jsxs("div", { className: "d-flex align-items-center border-black border rounded-pill ps-3 pe-1 py-1", children: [_jsxs("div", { className: "d-flex gap-2 align-items-center border-end px-2 border-black border-2 fw-bold", children: [_jsx("img", { src: CategoryIcon, alt: "category" }), _jsx("p", { className: "mb-0", children: "Category" }), _jsx("img", { src: ArrowDown, alt: "down arrow" })] }), _jsx(Input, { placeholder: "Search For Course, teachers" }), _jsx("div", { className: "badge_icon p-2 rounded-circle d-flex align-items-center justify-content-center border-black border", children: _jsx("img", { src: SearchIcon, alt: "favourite icon" }) })] }), _jsx("p", { className: "fw-bold mb-0 tutor-button", onClick: handleTutorForm, children: "Be a Tutor" }), _jsxs("div", { className: "d-flex gap-2", children: [_jsx("div", { className: " p-2 rounded-circle d-flex align-items-center justify-content-center border-black border", children: _jsx("img", { src: FavouriteIcon, alt: "favourite icon" }) }), _jsx("div", { className: " p-2 rounded-circle d-flex align-items-center justify-content-center border-black border", children: _jsx("img", { src: CartIcon, alt: "favourite icon" }) })] }), _jsx(MyButton, { onClick: handleLoginFormDisplay, name: "Login" })] })] })] }), _jsx("nav", { className: "nav-mobile nav-mobile-display d-none bg-white w-50 position-relative", children: _jsxs("div", { className: "position-absolute px-3 py-4 w-100 gap-4 d-flex flex-column align-items-start bg-white", children: [_jsxs("ul", { className: "d-flex ps-0 flex-column align-items-center gap-4 mb-0", children: [_jsx("li", { children: _jsx(NavLink, { className: "fw-bold", to: "/", children: "Home" }) }), _jsx("li", { children: _jsx(NavLink, { className: "fw-bold", to: "courses", children: "Courses" }) }), _jsx("li", { children: _jsx(NavLink, { className: "fw-bold", to: "contact", children: "Contact" }) })] }), _jsx("p", { className: "fw-bold mb-0 tutor-button", onClick: handleTutorForm, children: "Be a Tutor" }), _jsxs("div", { className: "d-flex gap-2", children: [_jsx("div", { className: " p-2 rounded-circle d-flex align-items-center justify-content-center border-black border", children: _jsx("img", { src: FavouriteIcon, alt: "favourite icon" }) }), _jsx("div", { className: " p-2 rounded-circle d-flex align-items-center justify-content-center border-black border", children: _jsx("img", { src: CartIcon, alt: "favourite icon" }) })] }), _jsx(MyButton, { onClick: handleLoginFormDisplay, name: "Login" })] }) })] }));
};
export default Header;
