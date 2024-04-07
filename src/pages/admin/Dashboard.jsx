import React, { useState } from "react";
import DashboardLayout from "../../layout/DashboardLayout";
import { Button } from "../../components/ui/button";
import Addmoney from "../../components/dashboard/Addmoney";
import RecentActivity from "../../components/dashboard/RecentActivity";
import TransactionList from "../../components/dashboard/TransactionList";
import PropsType from "prop-types";
import EditCash from "../../utils/editCash";
import UserList from "../../components/dashboard/UserList";

const AdminDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <DashboardLayout>
      <div className="grid grid-cols-3 gap-4 pr-4">
        <TopCard title={"Total Balance"} amount={33000000} isAmount={true} />
        <TopCard
          title={"Active Accounts"}
          textColor="text-green-500"
          amount={234000}
          isAmount={false}
        />
        <TopCard
          title={"Block Accounts"}
          textColor="text-red-500"
          amount={400}
          isAmount={false}
        />
      </div>
      <div className="grid grid-cols-2 gap-6 pr-4 mt-14">
        <UserList />
        {/* <TransactionList /> */}
      </div>
      <Addmoney isOpen={isOpen} onClose={() => setIsOpen(!isOpen)} />
    </DashboardLayout>
  );
};

export default AdminDashboard;

function TopCard({ title, amount, isAmount, textColor = "text-violet-600" }) {
  return (
    <div className="col-span-3 md:col-span-1 bg-white shadow-md rounded-lg h-[161px] flex flex-col justify-between p-8">
      <div className="flex items-center justify-between">
        <p className={`text-sm ${textColor} font-semibold`}>{title}</p>
        {/* <Button onClick={() => setIsOpen(!isOpen)}>ADD MONEY</Button> */}
      </div>
      <div className="flex items-center gap-2">
        <p className="text-xs">
          {isAmount && <span className="font-semibold">NGN</span>}{" "}
          <span className="text-2xl font-semibold">
            <EditCash amount={amount} />
          </span>
        </p>
      </div>
    </div>
  );
}

TopCard.propsType = {
  title: PropsType.string.isRequired,
  amount: PropsType.number.isRequired,
  isAmount: PropsType.bool,
  textColor: PropsType.string,
};
