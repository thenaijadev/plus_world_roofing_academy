import { ArrowFowardSmall } from "../../assets"
import IconButton from "../IconButon/IconButton"
import MyBadge from "../MyBadge/MyBadge"
import './CourseCard.css'

type Props = {
    review: string,
    title: string,
    author: string,
    amount: string
}

const CourseCard = (props: Props) => {
  return (
    <div className="card border border-black rounded-4 py-3 px-3">
              <div className="rounded-3 roof_top_container pe-3 pt-2">
                <div className="d-flex justify-content-end  ">
                  <MyBadge name="Expert"/>
                </div>
              </div>
              <div className="card-body px-2">
                <div className="d-flex justify-content-between align-items-center ">
                  <MyBadge name="Real Estate"/>
                  <p className="mb-0">{props.review}</p>
                </div>
                <h5 className="card-title my-3">{props.title}</h5>
                <p className="card-text">{props.author}</p>
                <div className="d-flex justify-content-between align-items-center enroll">
                   <IconButton title="Enroll Now" image={ArrowFowardSmall}/>
                  <p className="card-text"><small className="text-body-secondary">{props.amount}</small>
                  </p>
                </div>
              </div>
            </div>       
  )
}

export default CourseCard