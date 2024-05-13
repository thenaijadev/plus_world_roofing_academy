import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SwiperSlide } from "swiper/react";
import { ArrowFowardSmall, Star } from "../../assets";
import IconButton from "../IconButon/IconButton";
import MyBadge from "../MyBadge/MyBadge";
import "./CourseCard.css";
const CourseCard = (props) => {
    return (_jsxs(SwiperSlide, { className: "card border border-black rounded-4 mb-5 py-3 px-3", style: { transform: "scale(1)" }, children: [_jsx("div", { className: "rounded-3 roof_top_container pe-3 pt-2", children: _jsx("div", { className: "d-flex justify-content-end  ", children: _jsx(MyBadge, { name: "Expert" }) }) }), _jsxs("div", { className: "card-body m-auto px-0", children: [_jsxs("div", { className: "d-flex gap-3 align-items-center ", children: [_jsx(MyBadge, { name: "Real Estate" }), _jsxs("div", { className: "d-flex", children: [_jsx("img", { src: Star, alt: "star" }), _jsx("p", { className: "mb-0 fw-medium", children: `${props.review} reviews` })] })] }), _jsx("h5", { className: "card-title my-3", children: props.title }), _jsx("p", { className: "card-text", children: props.author }), _jsxs("div", { className: "d-flex justify-content-between align-items-center enroll", children: [_jsx(IconButton, { title: "Enroll Now", image: ArrowFowardSmall }), _jsx("p", { className: "card-text", children: _jsx("small", { className: "text-body-secondary", children: `N${props.amount}` }) })] })] })] }, props.id));
};
export default CourseCard;
