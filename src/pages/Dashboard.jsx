import React from "react";
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

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="bg-white px-10 py-8 h-[95%] w-[97%] rounded-xl shadow-lg overflow-y-scroll">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <p>All users</p>
            <div className="bg-[#F0FDF4] px-3 rounded-md text-sm py-1">
              2,000
            </div>
          </div>
          <div className="w-[320px]">
            <Input
              className=""
              leftIcon={<Search />}
              placeholder="Search users"
            />
          </div>
        </div>
        <hr className="my-8" />
        <Table>
          <TableHeader className="rounded-md bg-gray-50 h-14">
            <TableRow>
              <TableHead className="w-[220px]">Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Enrolled</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_data, i) => (
              <TableRow key={_data + i}>
                <TableCell className="font-medium">
                  <div className="flex items-center justify-center gap-3">
                    <img src={avatar} />
                    <div>
                      <h6>James Olakunle</h6>
                      <p className="text-xs font-normal">@olakunle</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>james@gmail.com</TableCell>
                <TableCell>Active</TableCell>
                <TableCell className="">May 12, 2024</TableCell>
                <TableCell className="">
                  <Button
                    variant="link"
                    className="hover:bg-transparent text-violet-600"
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
