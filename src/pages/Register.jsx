
import { Link } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";
import { useForm } from "react-hook-form";


export const Register = () => {

  const {createUser} = UseAuth();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    createUser(data.email, data.password);
  }



  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email", { required: true })}
                />
                {errors.email && <span className="text-red-500 font-light">This field is required</span>}
            </div> 
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password", { required: true, minLength:6 })}
                />
                {errors.password?.type=="required" && (
                <span className="text-red-500 font-light">Password is required</span>)}
                {errors.password?.type=="minLength" && (
                <span className="text-red-500 font-light">Password must have at least 6 characters</span>)}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="confirm password"
                className="input input-bordered"
                {...register("confirmPassword", { required: true, validate: (value)=>{
                  if(watch('password')!= value){
                    return "your password do not match"
                  }
                } },)}
              />
              {errors.confirmPassword && <span className="text-red-500 font-light">Both password must match</span>}
             
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-outline bg-black text-white">Register</button>
            </div>
          <p className="text-center mt-3 font-light">Already have an account? <Link to='/login' className="text-black underline">login</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};
