import React, { useState } from "react";
import DashboardLayout from "../layout/DashboardLayout";
import avatar from "../assets/icons/avatar.svg";

import { Search } from "lucide-react";
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

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <DashboardLayout>
      <div className="w-[495px] bg-white rounded-lg h-[161px] flex "></div>
      <div className="grid grid-cols-2 gap-6 mt-14">
        <div className="col-span-1 bg-white rounded-lg h-[400px]"></div>
        <div className="col-span-1 bg-white rounded-lg h-[400px]"></div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
