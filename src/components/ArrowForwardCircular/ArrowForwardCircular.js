import { jsx as _jsx } from "react/jsx-runtime";
import { ArrowFoward } from "../../assets";
import './ArrowForwardCircular.css';
const ArrowForwardCircular = () => {
    return (_jsx("div", { className: "d-flex align-items-center justify-content-center rounded-circle arrow_forward_circle", children: _jsx("img", { src: ArrowFoward, alt: "arrow forward" }) }));
};
export default ArrowForwardCircular;
