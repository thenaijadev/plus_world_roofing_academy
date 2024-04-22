import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle'
import { SwiperNavButtons } from '../../../../components/SwiperNavButtons/SwiperNavButtons';
import { Navigation} from 'swiper/modules';
import TopCategoryData from "./TopCategoryData"

function TopCategory() {

  interface TopCategoryDataTypes {
    img: string;
    type: string;
    amount: number;
}

  function card(props: TopCategoryDataTypes){
    const {img, type,amount} = props
    return(
      <SwiperSlide>
      <div className=" px-4 text-center d-flex flex-column align-items-center">
      <div className="category_icon d-flex align-items-center justify-content-center rounded-circle mb-1">
        <img src={img} alt="real estate office" />
      </div>
      <p className="mb-0 fw-bold">{type}</p>
      <p className="mb-0 fw-medium">({amount})</p>
    </div>
    </SwiperSlide>
    )
  }

  return (
    <Swiper
    spaceBetween={50} 
    slidesPerView={5} 
    loop={true}
    modules={[Navigation]}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    className="performance_metrics m-auto py-4 rounded-pill d-flex align-items-center justify-content-between px-5"
    >
      <SwiperNavButtons/>
      {TopCategoryData.map(card)}
      
    </Swiper>
  );
}

export default TopCategory;