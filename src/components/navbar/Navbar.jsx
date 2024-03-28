import { NavLink } from "react-router-dom";

const Navbar = () => {
  const routes = [
    { name: "Home", route: "/" },
    { name: "Listed Books", route: "/listedBooks" },
    { name: "Pages to Read", route: "/pagesToRead" },
    { name: "FAQ", route: "/faq" },
    { name: "Contact Us", route: "/contactUs" },
  ];
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm gap-2 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {routes.map((route, i) => (
              <li key={i}>
                <NavLink
                  to={route.route}
                  className={({ isActive }) =>
                    isActive ? "text-green-500 border-2 border-green-500" : ""
                  }
                >
                  {route.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl font-bold">Book Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2 px-1">
          {routes.map((route, i) => (
            <li key={i} className="bg-white">
              <NavLink
                to={route.route}
                className={({ isActive }) =>
                  isActive
                    ? "text-green-500 border-2 focus:bg-transparent border-green-500"
                    : ""
                }
              >
                {route.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <a className="btn bg-green-500 text-white">Sign In</a>
        <a className="btn bg-blue-400 text-white">Sign Up</a>
      </div>
    </div>
  );
};

export default Navbar;
