import { SwiperSlide } from "swiper/react"
import { ArrowFowardSmall, Star } from "../../assets"
import IconButton from "../IconButon/IconButton"
import MyBadge from "../MyBadge/MyBadge"
import './CourseCard.css'

type Props = {
  title: string;
  author: string;
  amount: number;
  review: number
}

const CourseCard = (props: Props) => {
  return (
    <SwiperSlide className="card border border-black rounded-4 mb-5 py-3 px-3">
              <div className="rounded-3 roof_top_container pe-3 pt-2">
                <div className="d-flex justify-content-end  ">
                  <MyBadge name="Expert"/>
                </div>
              </div>
              <div className="card-body m-auto px-0">
                <div className="d-flex gap-3 align-items-center ">
                  <MyBadge name="Real Estate"/>
                  <div className="d-flex">
                    <img src={Star} alt="star" />
                    <p className="mb-0 fw-medium">{`${props.review} reviews`}</p>
                  </div>
                </div>
                <h5 className="card-title my-3">{props.title}</h5>
                <p className="card-text">{props.author}</p>
                <div className="d-flex justify-content-between align-items-center enroll">
                   <IconButton title="Enroll Now" image={ArrowFowardSmall}/>
                  <p className="card-text"><small className="text-body-secondary">{`N${props.amount}`}</small>
                  </p>
                </div>
              </div>
            </SwiperSlide>       
  )
}

export default CourseCard