import { useState } from "react";
import UseAuth from "./UseAuth";
import { useEffect } from "react";
import axios from "axios";

const UseUserData = () => {
  const { user, loading } = UseAuth();
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const fetchUserData = async () => {
      const res = await axios.get(`http://localhost:4000/user/${user.email}`);
      setUserData(res.data);
    };
    if (user?.email && !loading) {
      fetchUserData();
    }
  }, [user, loading]);

  return userData;
};

export default UseUserData;
