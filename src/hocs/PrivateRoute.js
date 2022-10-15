import React from "react";
import { Navigate} from "react-router-dom";

const PrivateRoute = ({ authed, children }) => {
    if (!authed) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default PrivateRoute;