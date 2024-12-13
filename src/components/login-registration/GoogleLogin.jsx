import { useNavigate } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";
import { FcGoogle } from "react-icons/fc";

const GoogleLogin = () => {
  const { googleLogin } = UseAuth();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    googleLogin().then(()=>{
        navigate("/");
    });
  };
  return (
    <div>
      <div className="divider -mt-2 px-12">OR</div>
      <div>
        <button onClick={()=>handleGoogleLogin()}>
          <FcGoogle className="size-8" />
        </button>
      </div>
    </div>
  );
};

export default GoogleLogin;
