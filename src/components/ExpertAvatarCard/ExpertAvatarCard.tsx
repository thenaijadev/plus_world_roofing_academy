
type Props = {
    name: string,
    title: string,
    reviews:string,
    avatar: string,

    
}

const ExpertAvatarCard = (props: Props) => {
  return (
    <div className="d-flex align-items-center mb-3  gap-3">
                  <img src={props.avatar} alt="olivia_mia_avatar" />
                  <div>
                    <h6>{props.name}</h6>
                    <p>{props.title}</p>
                    <p>{props.reviews}</p>
                  </div>
                </div>
  )
}

export default ExpertAvatarCard