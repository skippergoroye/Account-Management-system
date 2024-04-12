import React, { useState } from "react";
import DashboardLayout from "../layout/DashboardLayout";
import avatar from "../assets/icons/avatar.svg";

import { Search, User } from "lucide-react";
import { Input } from "../components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import UserDetailsSheet from "../components/dashboard/UserDetailsSheet";
import Addmoney from "../components/dashboard/Addmoney";
import RecentActivity from "../components/dashboard/RecentActivity";
import TransactionList from "../components/dashboard/TransactionList";
import Payment from "../components/dashboard/Payment"


const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <DashboardLayout>
      <div className="w-[96%] lg:w-[495px] bg-white rounded-lg h-[161px] flex flex-col justify-between p-8">
        <div className="flex items-center justify-between">
          <p className="text-sm text-violet-600">Total Balance</p>
          <Button onClick={() => setIsOpen(!isOpen)}><Payment/></Button>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-sm">
            NGN <span className="text-2xl font-semibold">0.00</span>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 pr-4 mt-14">
        <RecentActivity />
        <TransactionList />
      </div>
      <Addmoney isOpen={isOpen} onClose={() => setIsOpen(!isOpen)} />
    </DashboardLayout>
  );
};

export default Dashboard;
