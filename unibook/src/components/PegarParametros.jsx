import { useParams } from "react-router-dom";
import React from "react";

export default function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}
