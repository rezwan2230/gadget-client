/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth"
import Loading from "../../pages/Loading";


const PrivateRoute = ({children}) => {
    const {user, loading} = UseAuth();
    const location = useLocation()

    if(loading){
        return <Loading/>
    }
    if(user){
        return children
    }
    return <Navigate to='/' state={{from : location}} replace></Navigate>
}

export default PrivateRoute

