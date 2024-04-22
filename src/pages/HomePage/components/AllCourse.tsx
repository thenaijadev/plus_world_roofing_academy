import { Swiper} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle'
import { Navigation} from 'swiper/modules';
import CourseCard from '../../../components/CourseCard/CourseCard'
import AllCourseData from '../../../components/CourseCard/CourseData'
import { SwiperNavButtons } from '../../../components/SwiperNavButtons/SwiperNavButtons'
const AllCourse = () => {
  return (
           <Swiper
    spaceBetween={50} 
    slidesPerView={5} 
    loop={true}
    modules={[Navigation]}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    className="d-flex justify-content-around align-items-center gap-3 mb-5 m-auto"
    >
      <SwiperNavButtons/>
      {AllCourseData.map(CourseCard)}
      
    </Swiper>
  )
}

export default AllCourse