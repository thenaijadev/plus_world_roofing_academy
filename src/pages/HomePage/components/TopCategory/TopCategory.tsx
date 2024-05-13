import "swiper/css";
import "swiper/css/bundle";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperNavButtons } from "../../../../components/SwiperNavButtons/SwiperNavButtons";
import TopCategoryData from "./TopCategoryData";
import { NavLink } from "react-router-dom";
import './TopCategory.css'

function TopCategory() {
  interface TopCategoryDataTypes {
    id: number;
    img: string;
    type: string;
    amount: number;
    link: string
  }

  function card(props: TopCategoryDataTypes) {
    const { id,img, type, amount, link } = props;
    return (
      <SwiperSlide key={id}>
        <div className="top_category px-4 text-center d-flex flex-column align-items-center">
          <div className="category_icon d-flex  align-items-center justify-content-center rounded-circle mb-1">
            <img src={img} alt="real estate office" />
          </div>
          <NavLink className='text-black text-decoration-none' to={link}>
            <p className="mb-0 fw-bold">{type}</p>
          </NavLink>
          <p className="mb-0 fw-medium">({amount})</p>
        </div>
      </SwiperSlide>
    );
  }

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={4}
      loop={true}
      modules={[Navigation]}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="performance_metrics m-auto py-4 rounded-pill d-flex align-items-center justify-content-between px-5"
    >
      <SwiperNavButtons />
      {TopCategoryData.map(card)}
    </Swiper>
  );
}

export default TopCategory;
