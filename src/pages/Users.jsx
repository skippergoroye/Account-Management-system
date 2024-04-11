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
import { Button } from "../components/ui/button";
import UserDetailsSheet from "../components/dashboard/UserDetailsSheet";
import FetchingComp from "../components/FetchingComp";
import { useSelector } from "react-redux";
import { useGetAllUsersQuery } from "../features/api/users";

const Users = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { users } = useSelector((state) => state?.users);

  const { isLoading } = useGetAllUsersQuery();

  return (
    <DashboardLayout>
      <div className="bg-white px-5 lg:px-10 pb-8 h-[95%] w-[97%] rounded-xl shadow-lg overflow-y-scroll hideScrollbar">
        <div className="sticky top-0 z-10 pt-8 bg-white">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-4">
              <p>All users</p>
              <div className="bg-[#F0FDF4] px-3 rounded-md text-sm py-1">
                {users.length}
              </div>
            </div>
            <div className="w-full md:w-[320px]">
              <Input
                className=""
                leftIcon={<Search />}
                placeholder="Search users"
              />
            </div>
          </div>
          <hr className="my-8" />
        </div>
        {isLoading ? (
          <div className="w-full centered">
            <FetchingComp message="Fetching Users..." />
          </div>
        ) : (
          <Table>
            <TableHeader className="rounded-md bg-gray-50 h-14">
              <TableRow>
                <TableHead className=" md:w-[220px]">Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Enrolled</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>

            <TableBody className>
              {users.map((_data, i) => (
                <TableRow key={_data + i}>
                  <TableCell className="font-medium ">
                    <div className="flex w-[180px] md:w-full  gap-3">
                      {/* <div className="w-12 h-12 overflow-hidden rounded-full shrink-0">
                        <img src={avatar} className="object-cover w-12 h-12" />
                      </div> */}
                      <div>
                        <h6>
                          {_data?.firstName} {_data?.lastName}
                        </h6>
                        {/* <p className="text-xs font-normal">{@olakunle}</p> */}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{_data?.email}</TableCell>
                  <TableCell>
                    {_data?.isActive ? "Verified" : "Not verified"}
                  </TableCell>
                  <TableCell className="">May 12, 2024</TableCell>
                  {/* <TableCell className="">
                  <Button
                    variant="link"
                    onClick={() => setIsOpen(!isOpen)}
                    className="hover:bg-transparent text-violet-600"
                  >
                    View
                  </Button>
                </TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
      <UserDetailsSheet isOpen={isOpen} onClose={() => setIsOpen(!isOpen)} />
    </DashboardLayout>
  );
};

export default Users;
