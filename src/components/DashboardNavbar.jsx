import { Menu, User } from "lucide-react";
import React, { useState } from "react";
import MobileSideBar from "./mobileSideBar";
import { useSelector } from "react-redux";

const DashBoardNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { userInfo } = useSelector((state) => state?.authUser);
  return (
    <div className="bg-white sticky h-[82px] top-0 w-full px-5 md:px-14 z-20 flex items-center justify-between ">
      <div className="lg:hidden">
        <Menu onClick={() => setIsOpen(!isOpen)} />
      </div>
      <div className="hidden lg:block" />
      <div className="flex items-center gap-4">
        <p className="text-sm font-normal">
          Hi, {userInfo?.role === "admin" ? "Admin" : userInfo?.firstName}
        </p>
        <div className="flex items-center justify-center border rounded-full w-11 h-11">
          <User />
        </div>
      </div>
      <MobileSideBar isOpen={isOpen} onClose={() => setIsOpen(!isOpen)} />
    </div>
  );
};

export default DashBoardNavbar;
