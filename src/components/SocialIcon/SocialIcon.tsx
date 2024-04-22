import './SocialIcon.css'

type Props = {
    imgage: string
}

const SocialIcon = (props: Props) => {
  return (
    <div className='container d-flex align-items-center justify-content-center rounded-circle'>
        <img src={props.imgage} alt="social icon" />
    </div>
  )
}

export default SocialIcon