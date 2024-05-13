import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Star } from "../../assets";
import "./ExpertAvatarCard.css";
const ExpertAvatarCard = (props) => {
    return (_jsxs("div", { className: "expert_card d-flex align-items-center mb-3 gap-2", children: [_jsx("img", { src: props.avatar, alt: "olivia_mia_avatar" }), _jsxs("div", { children: [_jsx("h6", { className: "mb-1", children: props.name }), _jsx("p", { className: "fw-medium mb-0", children: props.title }), _jsxs("div", { className: "d-flex mb-3 align-items-center gap-1", children: [_jsx("img", { src: Star, alt: "star" }), _jsx("span", { children: props.reviews })] })] })] }));
};
export default ExpertAvatarCard;
