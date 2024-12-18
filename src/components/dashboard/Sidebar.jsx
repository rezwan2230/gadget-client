
import { NavLink } from "react-router-dom";
import { GrOverview } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { RiLogoutCircleRLine } from "react-icons/ri";
import UseUserData from "../../hooks/useUserData";
import { MdOutlineInventory2 } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import UseAuth from "../../hooks/UseAuth";

const sellerRoutes = [
  {
    id:1,
    route : "/dashboard/my-products",
    title : "My Products",
    icon : <MdOutlineInventory2 />
  },
  {
    id:2,
    route : "/dashboard/add-products",
    title : "Add Products",
    icon :<IoIosAddCircleOutline />
  },
]

const Sidebar = () => {
  const {logout} = UseAuth()
  const userData = UseUserData()

  return (
    <div className="bg-gray-200 border-r border-black min-h-screen px-8 py-12">
        <h1 className="text-3xl font-bold mb-8">Gadget Shop</h1>
      <ul className="flex flex-col gap-4">
        <li className="p-2 border border-black rounded-md hover:bg-slate-300">
          <NavLink to="/dashboard/overview" className="flex gap-3 items-center">
          <GrOverview className="size-5"/>
          <p className="text-xl">Overview</p>
          </NavLink>
        </li>

      {
        userData?.role=="seller" && sellerRoutes.map((route)=><li key={route.id} className="p-2 border border-black rounded-md hover:bg-slate-300">
        <NavLink to={route.route} className="flex gap-3 items-center">
        <span className="size-5">{route.icon}</span>
        <p className="text-xl">{route.title}</p>
        </NavLink>
      </li>)
      }

        <li className="p-2 border border-black rounded-md hover:bg-slate-300">
          <NavLink to="/" className="flex gap-3 items-center">
          <IoHomeOutline  className="size-5"/>
          <p className="text-xl">Home</p>
          </NavLink>
        </li>

        <li className="p-2 border border-black rounded-md hover:bg-slate-300" onClick={()=>logout()}>
          <NavLink to="/" className="flex gap-3 items-center">
          <RiLogoutCircleRLine className="size-5"/>
          <p className="text-xl">Logout</p>
          </NavLink>
        </li>

      </ul>
    </div>
  );
};

export default Sidebar;
