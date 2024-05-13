import { jsx as _jsx } from "react/jsx-runtime";
import { ArrowUp } from "../../assets";
import './BackToTopIcon.css';
const BackToTopIcon = () => {
    return (_jsx("div", { className: "position-fixed back_to_top bottom-0 end-0 m-4 d-flex align-items-center justify-content-center rounded-circle z-2", children: _jsx("a", { href: '#main', children: _jsx("img", { src: ArrowUp, alt: "arrow up" }) }) }));
};
export default BackToTopIcon;
