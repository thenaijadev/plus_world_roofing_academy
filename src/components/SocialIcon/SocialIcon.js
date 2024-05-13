import { jsx as _jsx } from "react/jsx-runtime";
import "./SocialIcon.css";
const SocialIcon = (props) => {
    return (_jsx("div", { className: "container d-flex align-items-center justify-content-center rounded-circle", children: _jsx("a", { href: props.link, children: _jsx("img", { src: props.image, alt: "social icon" }) }) }));
};
export default SocialIcon;
