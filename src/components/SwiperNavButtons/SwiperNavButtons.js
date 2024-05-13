import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useSwiper } from "swiper/react";
import ArrowForwardCircular from "../ArrowForwardCircular/ArrowForwardCircular";
import ArrowLeftCircular from "../ArrowLeftCircular/ArrowLeftCircular";
import "./SwiperNavButtons.css";
export function SwiperNavButtons() {
    const swipernav = useSwiper();
    const back = _jsx(ArrowLeftCircular, {});
    const front = _jsx(ArrowForwardCircular, {});
    return (_jsxs("div", { className: "swiper-buttons", children: [_jsx("button", { className: "custom-prev-btn", onClick: () => swipernav.slideNext(), children: back }), _jsx("button", { className: "custom-next-btn", onClick: () => swipernav.slidePrev(), children: front })] }));
}
