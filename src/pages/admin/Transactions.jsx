import React, { useState } from "react";
import DashboardLayout from "../../layout/DashboardLayout";

import { Search } from "lucide-react";
import { Input } from "../../components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
// import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import UserDetailsSheet from "../../components/dashboard/UserDetailsSheet";

const AdminTransactions = () => {
  const [isOpen, setIsOpen] = useState(false);

  const data = [
    {
      id: "m5gr84i9",
      amount: 316,
      status: "success",
      email: "ken99@yahoo.com",
      name: "Folaranmi Olujobi",
    },
    {
      id: "3u1reuv4",
      amount: 242,
      status: "success",
      email: "Abe45@gmail.com",
      name: "Folaranmi Olujobi",
    },
    {
      id: "derv1ws0",
      amount: 837,
      status: "processing",
      email: "Monserrat44@gmail.com",
      name: "Folaranmi Olujobi",
    },
    {
      id: "5kma53ae",
      amount: 874,
      status: "success",
      email: "Silas22@gmail.com",
      name: "Folaranmi Olujobi",
    },
    {
      id: "bhqecj4p",
      amount: 721,
      status: "failed",
      email: "carmella@hotmail.com",
      name: "Folaranmi Olujobi",
    },
  ];
  return (
    <DashboardLayout>
      <div className="bg-white px-5 lg:px-10 py-8 h-[95%] w-[97%] rounded-xl shadow-lg overflow-y-scroll hideScrollbar">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-4">
            <p>All Transaction</p>
            <div className="bg-[#F0FDF4] px-3 rounded-md text-sm py-1">
              1,000
            </div>
          </div>
          <div className="w-full md:w-[320px]">
            <Input
              className=""
              leftIcon={<Search />}
              placeholder="Search for transaction"
            />
          </div>
        </div>
        <hr className="my-8" />
        <Table>
          <TableHeader className="rounded-md bg-gray-50 h-14">
            <TableRow>
              <TableHead className=" md:w-[220px]">STATUS</TableHead>
              <TableHead>NAME</TableHead>
              <TableHead>EMAIL</TableHead>
              <TableHead>AMOUNT</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.length ? (
              data.map((row, i) => (
                <TableRow key={i}>
                  <TableCell>{row?.status}</TableCell>
                  <TableCell>{row?.name}</TableCell>
                  <TableCell>{row?.email}</TableCell>
                  <TableCell>
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "NGN",
                    }).format(row.amount) ?? 0}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <UserDetailsSheet isOpen={isOpen} onClose={() => setIsOpen(!isOpen)} />
    </DashboardLayout>
  );
};

export default AdminTransactions;
