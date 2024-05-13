import { jsx as _jsx } from "react/jsx-runtime";
import { Badge } from 'reactstrap';
const MyBadge = (props) => {
    return (_jsx(Badge, { className: "text-black px-3 py-1 ", pill: true, children: props.name }));
};
export default MyBadge;
