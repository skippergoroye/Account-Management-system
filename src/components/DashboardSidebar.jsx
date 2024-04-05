import { sidebarLinks } from "../constants";
import { NavLink, useLocation } from 'react-router-dom';


const DashboardSidebar = () => {
  const { pathname } = useLocation();
  // const pathname = window.location.pathname;



  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 pt-28 text-black max-sm:hidden lg:w-[264px] bg-white">
      <div className="flex flex-1 flex-col gap-6">
        <div className="ml-10 -mt-10 sm:hidden lg:flex">
          <h1 className="text-lg text-[#444C66]">Howdy Folaranmi,</h1>
        </div>
        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);


          console.log(isActive)
          return (
            <NavLink
            to={item.route}
            key={item.label}
            className={`flex gap-4 items-center p-3 lg:ml-5 ml-1 lg:w-[160px] w-10 rounded-lg justify-start ${isActive ? 'bg-[#ede9ff] text-[#7c3aed]' : ''}`}
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
