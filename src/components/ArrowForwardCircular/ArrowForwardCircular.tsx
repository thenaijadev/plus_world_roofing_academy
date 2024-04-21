import { ArrowFoward } from "../../assets"
import './ArrowForwardCircular.css'


const ArrowForwardCircular = () => {
  return (
    <div className="d-flex align-items-center justify-content-center rounded-circle arrow_forward_circle">
        <img src={ArrowFoward} alt="arrow forward" />
    </div>
  )
}

export default ArrowForwardCircular