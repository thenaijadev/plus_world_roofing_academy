import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { IoClose } from "react-icons/io5";
import { Input } from "reactstrap";
import './OTPModal.css';
import { FcClock } from "react-icons/fc";
import MyButton from "../../../components/MyButton/MyButton";
import { useState } from "react";
const OTPModal = () => {
    const [otp, setOtp] = useState(new Array(6).fill(''));
    function handleChange(e, index) {
        if (isNaN(e.target.value))
            return false;
        setOtp([...otp.map((data, indx) => {
                indx === index ? e.target.value : data;
            })]);
        if (e.target.value && e.target.nextSibling) {
            e.target.nextSibling.focus();
        }
    }
    function handleSubmit() { }
    return (_jsx("div", { className: "otp", children: _jsx("div", { className: "form_card", children: _jsxs("form", { children: [_jsx("div", { className: "cancel-icon-container", children: _jsx(IoClose, { className: "cancel_icon" }) }), _jsxs("div", { className: "text-center welcome-text", children: [_jsx("h3", { children: "OTP Verification" }), _jsx("p", { children: "We emailed you a security code at kelvinmesh@gmail.com. It may take a moment to arrive" })] }), _jsx("div", { className: "d-flex align-items-center justify-content-between gap-3 ", children: otp.map((data, i) => {
                            return _jsx(Input, { className: "border-black border text-center fs-3 otp-input", value: data, onChange: (e) => handleChange(e, i), maxLength: 1, type: "text", autoComplete: "off" });
                        }) }), _jsxs("div", { className: "d-flex align-items-center justify-content-center my-2 gap-2", children: [_jsx(FcClock, {}), _jsx("span", { children: "Expires In :" }), _jsx("span", { className: "coloured-text", children: "0:13" })] }), _jsx("div", { className: "d-flex flex-column mt-4 pb-3", children: _jsx(MyButton, { name: "Join for Free", onClick: handleSubmit }) }), _jsxs("div", { className: "text-center", children: [_jsx("span", { children: "Didn\u2019t get a code? " }), _jsx("span", { className: "coloured-text", children: "Resend" })] })] }) }) }));
};
export default OTPModal;
