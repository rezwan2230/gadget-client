import UseAuth from "../../hooks/UseAuth";

const Overview = () => {
    const {user} = UseAuth()
  return (
    <div className="flex justify-center w-full h-full">

        <h3 className="text-xl text-center"> {user.email}</h3>
    </div>
  )
}

export default Overview;


