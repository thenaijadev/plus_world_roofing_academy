import { Badge } from 'reactstrap'

type Props = {
    name: string,
    
}

const MyBadge = (props: Props) => {
  return (
    <Badge className="text-black px-3 py-1 " pill>{props.name}</Badge>

  )
}

export default MyBadge