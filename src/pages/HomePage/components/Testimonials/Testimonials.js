import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "swiper/css";
import "swiper/css/bundle";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperNavButtons } from "../../../../components/SwiperNavButtons/SwiperNavButtons";
import "./testimonials.css";
import TestimonialData from "./TestimonialsData";
function Testimonial() {
    function card(props) {
        const { id, videoUrl, name, reason } = props;
        return (_jsxs(SwiperSlide, { className: "d-flex flex-column flex-md-row align-items-center sw", children: [_jsx("div", { children: _jsx("iframe", { width: "460", height: "265", className: "vid", src: videoUrl, title: "YouTube video player", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" }) }), _jsxs("div", { children: [_jsxs("h5", { className: "mb-5", children: ["\u201C", reason, "\u201D"] }), _jsx("p", { children: name })] })] }, id));
    }
    return (_jsxs(Swiper, { spaceBetween: 50, slidesPerView: 1, loop: true, modules: [Navigation], onSwiper: (swiper) => console.log(swiper), onSlideChange: () => console.log("slide change"), className: "d-flex align-items-center  px-5 justify-content-around z-3 sw", children: [_jsx(SwiperNavButtons, {}), TestimonialData.map(card)] }));
}
export default Testimonial;
