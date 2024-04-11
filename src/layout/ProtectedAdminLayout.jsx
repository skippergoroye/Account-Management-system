import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedAdminLayout({ children }) {
  console.log("this is a protected admin route");
  return (
    <>
      <Outlet />
    </>
  );
}

export default ProtectedAdminLayout;




