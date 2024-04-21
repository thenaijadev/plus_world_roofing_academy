import { Button } from 'reactstrap'

type Props = {
    title: string,
    image: string
}

const IconButton = (props: Props) => {
  return (
    <Button className="rounded-pill text-black fw-medium see_insturctor_btn border-0">{props.title} <img src={props.image} alt="arrow forward" className='ms-3' /></Button>
  )
}

export default IconButton