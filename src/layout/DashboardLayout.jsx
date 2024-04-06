import { DashboardNavbar, DashboardSidebar } from "../components";

const DashboardLayout = ({ children, isSettings }) => {
  return (
    <main className="bg-[#f9fafb] relative h-screen w-screen grid grid-cols-12">
      <DashboardSidebar />
      <div className="h-screen col-span-9 col-start-4 overflow-hidden pb-14">
        <DashboardNavbar />
        <div
          className={`${
            !isSettings ? "pl-16 pt-10" : "pt-0"
          } overflow-y-scroll h-full hideScrollbar`}
        >
          {children}
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
