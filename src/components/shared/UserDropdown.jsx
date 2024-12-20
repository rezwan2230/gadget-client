import { NavLink } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";
import UseUserData from "../../hooks/useUserData";
const UserDropdown = () => {
  const { user, logout } = UseAuth();
  const userData = UseUserData();
  console.log(userData?.wishlist?.length);


  const handleLogout = () => {
    logout();
  };
  return (
    <div className="navbar-end">
      <div className="flex justify-center items-center gap-7">
        <div className="">
        <div className="badge badge-secondary">{userData?.wishlist?.length}</div>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button">
            <div className="avatar flex justify-center items-center gap-7">
              <div className="w-12 rounded-full">
                <img src={`${user?.photoURL || "/profile.png"}`} />
              </div>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="gap-2 dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/dashboard/overview">Dashboard</NavLink>
            </li>
            <li>
              <button
                className="btn btn-sm btn-primary btn-outline"
                onClick={() => handleLogout()}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserDropdown;
