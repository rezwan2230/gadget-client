import { NavLink } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";

const UserDropdown = () => {
  const { user, logout } = UseAuth();

  const handleLogout = () => {
    logout();
  }; 
  return (
    <div className="navbar-end">
      <div className="dropdown dropdown-end"> 
        <div tabIndex={0} role="button">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src={`${user?.photoURL || "/profile.png"}`} />
            </div>
          </div>
        </div>
        <ul
          tabIndex={0}
          className="gap-2 dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li >
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
  );
};

export default UserDropdown;
