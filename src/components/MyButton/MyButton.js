import { jsx as _jsx } from "react/jsx-runtime";
const MyButton = (props) => {
    return (_jsx("button", { type: "button", className: "btn px-4 fw-bold explore rounded-pill", onClick: props.onClick, children: props.name }));
};
export default MyButton;
