import { jsx as _jsx } from "react/jsx-runtime";
import { ArrowLeft } from "../../assets";
import './ArrowLeftCircular.css';
const ArrowLeftCircular = () => {
    return (_jsx("div", { className: "d-flex align-items-center justify-content-center rounded-circle arrow_forward_circle", children: _jsx("img", { src: ArrowLeft, alt: "arrow left" }) }));
};
export default ArrowLeftCircular;
