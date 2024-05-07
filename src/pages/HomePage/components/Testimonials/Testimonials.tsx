import "swiper/css";
import "swiper/css/bundle";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperNavButtons } from "../../../../components/SwiperNavButtons/SwiperNavButtons";
import "./testimonials.css";
import TestimonialData from "./TestimonialsData";

function Testimonial() {
  interface TestimonialDataTypes {
    videoUrl: string;
    name: string;
    reason: string;
  }

  function card(props: TestimonialDataTypes) {
    const { videoUrl, name, reason } = props;
    return (
      <SwiperSlide className="d-flex flex-column flex-md-row align-items-center sw">
        <div>
          <iframe
            width="460"
            height="265"
            className="vid"
            src={videoUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div>
          <h5 className="mb-5">“{reason}”</h5>
          <p>{name}</p>
        </div>
      </SwiperSlide>
    );
  }

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      modules={[Navigation]}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="d-flex align-items-center  px-5 justify-content-around z-3 sw"
    >
      <SwiperNavButtons />
      {TestimonialData.map(card)}
    </Swiper>
  );
}

export default Testimonial;
