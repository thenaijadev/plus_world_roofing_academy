import { useSwiper } from "swiper/react";
import ArrowForwardCircular from "../ArrowForwardCircular/ArrowForwardCircular";
import ArrowLeftCircular from "../ArrowLeftCircular/ArrowLeftCircular";
import "./SwiperNavButtons.css";

export function SwiperNavButtons() {
  const swipernav = useSwiper();
  const back = <ArrowLeftCircular />;
  const front = <ArrowForwardCircular />;
  return (
    <div className="swiper-buttons">
      <button className="custom-prev-btn" onClick={() => swipernav.slidePrev()}>
        {back}
      </button>
      <button className="custom-next-btn" onClick={() => swipernav.slidePrev()}>
        {front}
      </button>
    </div>
  );
}
