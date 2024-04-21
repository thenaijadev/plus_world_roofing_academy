import { ArrowLeft } from "../../assets"
import './ArrowLeftCircular.css'

const ArrowLeftCircular = () => {
  return (
    <div className="p-2 rounded-circle arrow_forward_circle">
        <img src={ArrowLeft} alt="arrow left" />
    </div>
  )
}

export default ArrowLeftCircular