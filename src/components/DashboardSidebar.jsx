import { sidebarLinks } from "../constants";
import { NavLink, useLocation } from 'react-router-dom';


const DashboardSidebar = () => {
  const { pathname } = useLocation();
  // const pathname = window.location.pathname;
  console.log(pathname)


  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 pt-28 text-black max-sm:hidden lg:w-[264px] bg-white">
      <div className="flex flex-1 flex-col gap-6">
        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);


          console.log(isActive)
          return (
            <NavLink
            to={item.route}
            key={item.label}
            className={`flex gap-4 items-center p-4 rounded-lg justify-start ${isActive ? 'bg-[#7C3AED]' : ''}`}
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
    </section>
  );
};

export default DashboardSidebar;
