import { useParams } from "react-router-dom";

export default function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}
