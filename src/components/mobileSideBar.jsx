import React, { useEffect, useState } from "react";
import { CustomSheet } from "./CustomSheet";
import PropTypes from "prop-types";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { adminSidebarLinks, sidebarLinks } from "../constants";
import Logo from "../assets/PNG/logo.png";
import { ICONS } from "./DashboardSidebar";
import { useSelector } from "react-redux";

function MobileSideBar({ isOpen, onClose }) {
  const { pathname } = useLocation();
  const [route, setRoute] = useState([]);
  const { userInfo } = useSelector((state) => state?.authUser);

  useEffect(() => {
    let route;
    if (pathname.includes("/backoffice")) {
      route = adminSidebarLinks;
    } else {
      route = sidebarLinks;
    }
    setRoute(route);
    return () => {
      setRoute([]);
    };
  }, []);

  return (
    <CustomSheet side="left" isOpen={isOpen} onClose={onClose}>
      <div className="relative h-screen col-span-3 bg-white lg:block">
        <div className="flex items-center mt-7">
          <img src={Logo} alt="Logo" className="h-[20px] md:h-[34px]" />
        </div>
        <p className="mt-2">
          Howdy {userInfo?.role === "admin" ? "Admin" : userInfo?.firstName},
        </p>
        <div className="w-full mx-auto mt-14">
          {route.map((item) => {
            const isActive = pathname === item.route;
            // || pathname.startsWith(`${item.route}/`);

            return (
              <NavLink
                to={item.route}
                key={item.label}
                className={`flex gap-4 items-center pl-5 py-4 w-full rounded-lg justify-start ${
                  isActive ? "bg-violet-100 w-[160px]" : ""
                }`}
              >
                <div
                  className={`${
                    isActive ? "text-violet-600" : "text-gray-500"
                  }`}
                >
                  {ICONS[item.label]}
                </div>
                <p
                  className={`${
                    isActive
                      ? "text-violet-600 font-semibold"
                      : "text-gray-500 font-normal"
                  } text-lg`}
                >
                  {item.label}
                </p>
              </NavLink>
            );
          })}
        </div>
        <Button
          variant="ghost"
          className="absolute flex items-center gap-4 left-2 hover:bg-transparent bottom-20"
        >
          <LogOut />
          Logout
        </Button>
      </div>
    </CustomSheet>
  );
}
MobileSideBar.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};
export default MobileSideBar;
