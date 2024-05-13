import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "swiper/css";
import "swiper/css/bundle";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperNavButtons } from "../../../../components/SwiperNavButtons/SwiperNavButtons";
import TopCategoryData from "./TopCategoryData";
import { NavLink } from "react-router-dom";
import './TopCategory.css';
function TopCategory() {
    function card(props) {
        const { id, img, type, amount, link } = props;
        return (_jsx(SwiperSlide, { children: _jsxs("div", { className: "top_category px-4 text-center d-flex flex-column align-items-center", children: [_jsx("div", { className: "category_icon d-flex  align-items-center justify-content-center rounded-circle mb-1", children: _jsx("img", { src: img, alt: "real estate office" }) }), _jsx(NavLink, { className: 'text-black text-decoration-none', to: link, children: _jsx("p", { className: "mb-0 fw-bold", children: type }) }), _jsxs("p", { className: "mb-0 fw-medium", children: ["(", amount, ")"] })] }) }, id));
    }
    return (_jsxs(Swiper, { spaceBetween: 50, slidesPerView: 4, loop: true, modules: [Navigation], onSwiper: (swiper) => console.log(swiper), onSlideChange: () => console.log("slide change"), className: "performance_metrics m-auto py-4 rounded-pill d-flex align-items-center justify-content-between px-5", children: [_jsx(SwiperNavButtons, {}), TopCategoryData.map(card)] }));
}
export default TopCategory;
