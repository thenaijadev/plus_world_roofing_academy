import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from 'reactstrap';
import './IconButton.css';
const IconButton = (props) => {
    return (_jsxs(Button, { className: "rounded-pill text-black fw-medium see_insturctor_btn border-0", children: [props.title, " ", _jsx("img", { src: props.image, alt: "arrow forward", className: 'ms-3' })] }));
};
export default IconButton;
