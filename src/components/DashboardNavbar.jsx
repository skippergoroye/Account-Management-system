import { Menu, User } from "lucide-react";
import React from "react";

const DashBoardNavbar = () => {
  return (
    <div className="bg-white sticky h-[82px] top-0 w-full px-5 md:px-14 z-20 flex items-center justify-between ">
      <div className="lg:hidden">
        <Menu />
      </div>
      <div className="hidden lg:block" />
      <div className="flex items-center gap-4">
        <p className="text-sm font-normal">Hi, Folaranmi</p>
        <div className="flex items-center justify-center border rounded-full w-11 h-11">
          <User />
        </div>
      </div>
    </div>
  );
};

export default DashBoardNavbar;
