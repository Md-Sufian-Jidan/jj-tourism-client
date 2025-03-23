import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    let location = useLocation();

    if (loading) return <span className="loading loading-spinner loading-xl"></span>
    if(user) return children;
    return <Navigate state={location?.pathname} to={'/login'} />
};

export default PrivateRoute;