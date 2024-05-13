import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { FormGroup, Input, Label } from "reactstrap";
import MyButton from "../../../components/MyButton/MyButton";
import Signup from "../signup/SignUp";
import "./login.css";
function Login() {
    const [isLogin, setIsLogin] = useState(true);
    function handleSubmit() { }
    return isLogin ? (_jsx("div", { className: "login", children: _jsx("div", { className: "form_card", children: _jsxs("form", { action: "", children: [_jsx("div", { className: "cancel-icon-container", children: _jsx(IoClose, { className: "cancel_icon" }) }), _jsxs("div", { className: "text-center welcome-text", children: [_jsx("h3", { children: "Welcome Back" }), _jsx("p", { children: "Let\u2019s get you started from where you left off." })] }), _jsxs(FormGroup, { children: [_jsx(Label, { for: "email", className: "fw-medium", children: "Email" }), _jsx(Input, { className: "border rounded-pill border-black", id: "email", name: "email", placeholder: "Enter email", type: "email" })] }), _jsxs(FormGroup, { children: [_jsx(Label, { for: "password", className: "fw-medium", children: "Password" }), _jsxs("div", { className: "position-relative d-flex", children: [_jsx(Input, { className: "border rounded-pill border-black", id: "password", name: "password", placeholder: "Enter password", type: "password" }), _jsx(FaEyeSlash, { className: "position-absolute me-3 eye-icon" })] }), _jsx("span", { className: "fw-light ", children: "Between 8 and 72 chaacters" })] }), _jsx("div", { className: "d-flex flex-column mt-4 pb-3", children: _jsx(MyButton, { name: "Join for Free", onClick: handleSubmit }) }), _jsxs("div", { className: "d-flex align-items-center justify-content-center px-3", children: [_jsx("div", { className: "border-top border-black w-50 col-5" }), _jsx("div", { className: "col-1 text-center", children: _jsx("span", { children: "or" }) }), _jsx("div", { className: "border-top border-black w-50 col-5" })] }), _jsxs("div", { className: "my-3 continue-btn d-flex flex-column", children: [_jsxs("div", { className: "mb-3 d-flex align-items-center  py-2 px-4 border border-black border-1 rounded-pill", children: [_jsx("div", { children: _jsx(FcGoogle, {}) }), _jsx("button", { className: "btn fw-medium w-100  py-0", children: "Continue with google" })] }), _jsxs("div", { className: "d-flex align-items-center  px-4 py-2 border border-black border-1 rounded-pill", children: [_jsx("div", { children: _jsx(IoLogoFacebook, {}) }), _jsx("button", { className: "btn fw-medium w-100 py-0", children: "Continue with Facebook" })] })] }), _jsxs("div", { className: "text-center new fw-medium", children: [_jsx("span", { className: "me-1", children: "New to Plusworld Academy?" }), _jsx("a", { href: "#", className: "sign-up-link text-decoration-none ", onClick: () => {
                                    setIsLogin(false);
                                }, children: "Sign Up" })] })] }) }) })) : (_jsx(Signup, {}));
}
export default Login;
