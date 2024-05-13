import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from "react";
import "./TutorForm.css";
import { TbLetterX } from "react-icons/tb";
import { GlobalContext } from "../../GlobalProvider";
const TutorForm = () => {
    const { setTutorFormDisplay, tutorFormDisplay } = useContext(GlobalContext);
    function handleTutorForm() {
        if (tutorFormDisplay) {
            setTutorFormDisplay(false);
        }
        else {
            setTutorFormDisplay(true);
        }
    }
    return (_jsx("div", { className: "tutor-form-container", children: _jsxs("form", { className: "tutor-form", children: [_jsx("div", { className: "cancel-icon-container", children: _jsx(TbLetterX, { className: "cancel-icon", onClick: handleTutorForm }) }), _jsx("h3", { children: "Enter Your details" }), _jsx("p", { className: "learn", children: "Teach what you know to thousand of students" }), _jsxs("div", { className: "input-field", children: [_jsx("label", { children: "Full name" }), _jsx("br", {}), _jsx("input", { type: "text", name: "full-name", placeholder: "Enter full name" })] }), _jsxs("div", { className: "input-field", children: [_jsx("label", { children: "Phone Number" }), _jsx("br", {}), _jsx("input", { type: "phone", name: "phone-number", placeholder: "Enter full name" })] }), _jsxs("div", { className: "input-field", children: [_jsx("label", { children: "Email" }), _jsx("br", {}), _jsx("input", { type: "email", name: "email", placeholder: "Enter full name" })] }), _jsxs("div", { className: "input-field", children: [_jsx("label", { children: "What do you want to teach?" }), _jsx("br", {}), _jsxs("select", { children: [_jsx("option", { children: "Roofing Technology" }), _jsx("option", { children: "Construction" }), _jsx("option", { children: "Facility Management" }), _jsx("option", { children: "Real Estate" }), _jsx("option", { children: "Construction Business and Project management" })] })] }), _jsxs("div", { className: "input-field", children: [_jsx("label", { children: "Years of experience" }), _jsx("br", {}), _jsx("input", { type: "number", placeholder: "0" })] }), _jsx("button", { children: "Submit" })] }) }));
};
export default TutorForm;
