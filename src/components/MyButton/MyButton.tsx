type Props = {
    name: string
}

const MyButton = (props: Props) => {
  return (
    <button type="button" className="btn px-4 fw-bold explore rounded-pill">{props.name}</button>
  )
}

export default MyButton