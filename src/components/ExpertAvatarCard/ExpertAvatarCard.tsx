import { Star } from "../../assets";
import "./ExpertAvatarCard.css";
type Props = {
  name: string;
  title: string;
  reviews: string;
  avatar: string;
};

const ExpertAvatarCard = (props: Props) => {
  return (
    <div className="d-flex align-items-center mb-3 gap-2">
      <img src={props.avatar} alt="olivia_mia_avatar" />
      <div>
        <h6 className="mb-1">{props.name}</h6>
        <p className="fw-medium mb-0">{props.title}</p>
        <div className="d-flex mb-3 align-items-center gap-1">
          <img src={Star} alt="star" />
          <span>{props.reviews}</span>
        </div>
      </div>
    </div>
  );
};

export default ExpertAvatarCard;
