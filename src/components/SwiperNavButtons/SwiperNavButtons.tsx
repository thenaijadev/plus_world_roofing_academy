import { useSwiper } from "swiper/react";
import './SwiperNavButtons.css'
import ArrowForwardCircular from "../ArrowForwardCircular/ArrowForwardCircular";
import ArrowLeftCircular from "../ArrowForwardCircular/ArrowForwardCircular";

export function SwiperNavButtons () {
    const swipernav = useSwiper()
    const back =<ArrowLeftCircular/>
    const front= <ArrowForwardCircular/>
    return(
        <div className="swiper-buttons">
        <button className="custom-prev-btn" onClick={()=>swipernav.slidePrev()}>{back}</button>
        <button className="custom-next-btn" onClick={()=>swipernav.slideNext()}>{front}</button>
        </div>
    )
}