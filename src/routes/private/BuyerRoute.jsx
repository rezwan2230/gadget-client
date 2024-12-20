/* eslint-disable react/prop-types */
import { NavLink, useLocation } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";
import UseUserData from "../../hooks/useUserData";
import Loading from "../../pages/Loading";

const BuyerRoute = ({ children }) => {
  const userData = UseUserData();
  const { user, loading } = UseAuth();
  const location = useLocation();

  if (loading || !userData?.role) {
    return <Loading />;
  }
  if (user && userData?.role == "buyer") {
    return children;
  }
  return <NavLink to="/login" state={{ form: location }} replace></NavLink>;
};

export default BuyerRoute;
