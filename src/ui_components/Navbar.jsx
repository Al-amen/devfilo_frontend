import React from "react";
import { FaHamburger } from "react-icons/fa";
import { Switch } from "@/components/ui/switch";
import ResponsiveNavBar from "@/ui_components/ResponsiveNavBar";
import { Link, NavLink } from "react-router-dom";

export const Navbar = ({
  darkMode,
  handleDarkMode,
  isAuthenticated,
  username,
  setIsAuthenticated,
  setUsername,
}) => {
  const [showNavBar, setShowNavBar] = React.useState(false);
  const toggleNavBar = () => {
    setShowNavBar(!showNavBar);
  };

  function logout() {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    setIsAuthenticated(false);
    setUsername(null);
  }
  console.log("isAuthenticated", isAuthenticated);

  return (
    <>
      <nav className="max-container padding-x py-6 flex justify-between items-center  gap-6 sticky top-0 z-10 bg-[#FFFFFF] dark:bg-[#141624]">
        <Link to="/" className="text-[#141624] text-2xl dark:text-[#FFFFFF]">
          DevFolio
        </Link>
        <ul className="flex items-center  justify-end gap-9 text-[#3B3C4A] lg:flex-1 max-md:hidden dark:text-[#FFFFFF]">
          {isAuthenticated ? (
            <>
              <li>
                <NavLink
                  to={`/profile/${username}`}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Hi, {username}
                </NavLink>
              </li>
              <li onClick={logout} className="cursor-pointer">
                Logout
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to="/signin"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Login
                </NavLink>
              </li>

              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/signup"
                >
                  Register
                </NavLink>
              </li>
            </>
          )}

          <li className="font-semibold">
            <NavLink
              to="/create"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Create Post
            </NavLink>
          </li>
        </ul>

        <Switch checked={darkMode} onCheckedChange={handleDarkMode} />
        <FaHamburger
          className="text-2xl cursor-pointer hidden max-md:block dark:text-white"
          onClick={toggleNavBar}
        />
      </nav>

      {showNavBar && (
        <ResponsiveNavBar
          isAuthenticated={isAuthenticated}
          username={username}
          logout={logout}
        />
      )}
    </>
  );
};
