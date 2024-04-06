import { sidebarLinks } from "../constants";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/PNG/logo.png";
import { LayoutGrid, LogOut, Settings, Users } from "lucide-react";
import { Button } from "./ui/button";

const DashboardSidebar = () => {
  const { pathname } = useLocation();

  return (
    <div className="relative hidden col-span-3 bg-white lg:block">
      <div className="flex items-center justify-center mt-7">
        <img src={Logo} alt="Logo" className="h-[20px] md:h-[34px]" />
      </div>
      <p className="mt-2 text-center">Howdy Folaranmi,</p>
      <div className="w-10/12 mx-auto mt-14">
        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);

          console.log(isActive);
          return (
            <NavLink
              to={item.route}
              key={item.label}
              className={`flex gap-4 items-center pl-5 py-4 w-full rounded-lg justify-start ${
                isActive ? "bg-violet-100 w-[160px]" : ""
              }`}
            >
              <div
                className={`${isActive ? "text-violet-600" : "text-gray-500"}`}
              >
                {ICONS[item.label]}
              </div>
              <p
                className={`${
                  isActive
                    ? "text-violet-600 font-semibold"
                    : "text-gray-500 font-normal"
                } text-lg  max-lg:hidden`}
              >
                {item.label}
              </p>
            </NavLink>
          );
        })}
      </div>
      <Button
        variant="ghost"
        className="absolute flex items-center gap-4 left-16 hover:bg-transparent bottom-10"
      >
        <LogOut />
        Logout
      </Button>
    </div>
  );
};

export default DashboardSidebar;
export const ICONS = {
  Dashboard: <LayoutGrid />,
  Users: <Users />,
  Settings: <Settings />,
};
