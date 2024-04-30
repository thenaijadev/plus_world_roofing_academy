import { ArrowUp } from "../../assets"
import './BackToTopIcon.css'

const BackToTopIcon = () => {
  return (
    <div className="position-fixed back_to_top bottom-0 end-0 m-4 d-flex align-items-center justify-content-center rounded-circle z-2">
    <a href='#main'>
      <img src={ArrowUp} alt="arrow up" />
    </a>
  </div>
  )
}

export default BackToTopIcon