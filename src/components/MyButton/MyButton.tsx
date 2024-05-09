type Props = {
  name: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const MyButton = (props: Props) => {
  return (
    <button
      type="button"
      className="btn px-4 fw-bold explore rounded-pill"
      onClick={props.onClick}
    >
      {props.name}
    </button>
  );
};

export default MyButton;
