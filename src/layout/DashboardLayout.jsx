import { DashboardNavbar, DashboardSidebar } from "../components";

const DashboardLayout = ({ children }) => {
  return (
    <main className="relative bg-[#F9FAFB]">
      <DashboardNavbar />

      <div className="flex">
        <DashboardSidebar />
        <section className="flex min-h-screen flex-1 flex-col pt-10">
          <div className="w-full">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default DashboardLayout;
