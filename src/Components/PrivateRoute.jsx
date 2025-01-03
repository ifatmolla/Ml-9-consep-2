import { useContext } from "react";
import { Authcontext } from "./Authprovider";
import { Navigate } from "react-router-dom";

const PrivateRoute = () => {
    const {user, loading} = useContext(Authcontext)
    if(loading){
        return <h1>loading......</h1>
    }
    if(!user){
        return <Navigate to="/login"></Navigate>
    }
    return children
};

export default PrivateRoute;