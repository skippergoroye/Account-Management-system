import { User } from "lucide-react";
import React from "react";

const DashBoardNavbar = () => {
  return (
    <div className="bg-white sticky h-[82px] top-0 w-full pr-14 z-20 flex items-center justify-end gap-4">
      <div className="flex items-center">
        <p className="text-sm font-normal">Hi, Folaranmi</p>
      </div>
      <div className="flex items-center justify-center border rounded-full w-11 h-11">
        <User />
      </div>
    </div>
  );
};

export default DashBoardNavbar;
