import { sidebarLinks } from "../constants";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/PNG/logo.png";
import { LayoutGrid, Settings, Users } from "lucide-react";

const DashboardSidebar = () => {
  const { pathname } = useLocation();
  // const pathname = window.location.pathname;
  console.log(pathname);
  const ICONS = {
    Dashboard: <LayoutGrid />,
    Users: <Users />,
    Settings: <Settings />,
  };

  return (
    <div className="col-span-3 bg-white">
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
    </div>
  );
};

export default DashboardSidebar;

{
  /* <section className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 pt-28 text-black max-sm:hidden lg:w-[264px] bg-white">
      <div className="flex flex-col flex-1 gap-6">
        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);


          console.log(isActive)
          return (
            <NavLink
            to={item.route}
            key={item.label}
            className={`flex gap-4 items-center p-3 ml-5 rounded-lg justify-start ${isActive ? 'bg-[#7C3AED] w-[160px]' : ''}`}
          >
            <img
              src={item.imgURL}
              alt={item.label}
              width={24}
              height={24}
            />
            <p className="text-lg font-semibold max-lg:hidden">
              {item.label}
            </p>
          </NavLink>
          )
        })}

      </div>
    </section> */
}
