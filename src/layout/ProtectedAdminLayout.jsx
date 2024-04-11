import React from "react";
import { Outlet } from "react-router-dom";

function ProtectedAdminLayout({ children }) {
  console.log("this is a protected admin route");
  return (
    <>
      <Outlet />
    </>
  );
}

export default ProtectedAdminLayout;




