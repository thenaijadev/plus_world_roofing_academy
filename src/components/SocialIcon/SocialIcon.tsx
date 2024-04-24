import "./SocialIcon.css";

type Props = {
  imgage: string;
  link: string;
};

const SocialIcon = (props: Props) => {
  return (
    <div className="container d-flex align-items-center justify-content-center rounded-circle">
      <a href={props.link}>
        <img src={props.imgage} alt="social icon" />
      </a>
    </div>
  );
};

export default SocialIcon;
