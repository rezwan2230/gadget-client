/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth"
import UseUserData from "../../hooks/useUserData";
import Loading from "../../pages/Loading";

const SellerRoute = ({children}) => {
    const {user, loading} = UseAuth();
    const location = useLocation()
    const userData =  UseUserData()

    if(loading || !userData?.role){
        return <Loading/>
    }
    if(user && userData?.role ==="seller"){
        return children
    }
    return <Navigate to='/login' state={{from : location}} replace></Navigate>
}

export default SellerRoute
