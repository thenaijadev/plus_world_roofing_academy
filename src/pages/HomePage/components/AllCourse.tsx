import "swiper/css";
import "swiper/css/bundle";
import { Navigation } from "swiper/modules";
import { Swiper } from "swiper/react";
import CourseCard from "../../../components/CourseCard/CourseCard";
import AllCourseData from "../../../components/CourseCard/CourseData";
import { SwiperNavButtons } from "../../../components/SwiperNavButtons/SwiperNavButtons";
const AllCourse = () => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={4}
      loop={true}
      // style={{  }}
      modules={[Navigation]}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="d-flex justify-content-around align-items-center gap-3 mb-5 m-auto"
      id="course-swiper"
    >
      <SwiperNavButtons />
      {AllCourseData.map(CourseCard)}
    </Swiper>
  );
};

export default AllCourse;
