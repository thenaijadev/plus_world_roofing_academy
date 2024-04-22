import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle'
import { SwiperNavButtons } from '../../../../components/SwiperNavButtons/SwiperNavButtons';
import { Navigation} from 'swiper/modules';
import TestimonialData from './TestimonialsData';


function Testimonial() {

  interface TestimonialDataTypes {
    personImg: string;
    name: string;
    reason: string;
}

  function card(props: TestimonialDataTypes){
    const {personImg, name,reason} = props
    return(
      <SwiperSlide 
       className="d-flex align-items-center"
      >
            
                <div>
                  <img src={personImg} alt="testimonial image" />
                </div>
                <div>
                  <h5 className="mb-5">“{reason}”</h5>
                  <p>{name}</p>
                </div>
    </SwiperSlide>
    )
  }

  return (
    <Swiper
    spaceBetween={50} 
    slidesPerView={1} 
    loop={true}
    modules={[Navigation]}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    className="d-flex align-items-center  px-5 justify-content-around z-3 "  >
      <SwiperNavButtons/>
      {TestimonialData.map(card)}
      
    </Swiper>
  );
}

export default Testimonial;