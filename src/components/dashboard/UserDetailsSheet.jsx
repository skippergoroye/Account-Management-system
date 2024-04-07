import React, { useState } from "react";
import { CustomSheet } from "../CustomSheet";
import PropTypes from "prop-types";
import avatar from "../../assets/icons/avatar.svg";
import { Button } from "../ui/button";

function UserDetailsSheet({ isOpen, onClose }) {
  const [status, setStatus] = useState(true);

  return (
    <CustomSheet isOpen={isOpen} onClose={onClose}>
      <h2 className="text-lg font-semibold">Folaranmi Details</h2>
      <p className="mt-2 text-sm font-normal">
        Below is folaranmi personal details, you can reach folaranmi via this
        details.
      </p>
      <div className="flex flex-col items-center justify-center">
        <div className="h-[108px] w-[108px] overflow-hidden mt-10">
          <img src={avatar} alt="avatar" className="h-[108px] w-[108px]" />
        </div>
        <h1 className="mt-2">Olujobi Folaranmi</h1>
        <p className="mt-px text-sm text-muted">Level 2 User</p>
      </div>
      <div className="flex items-center justify-between mt-10">
        <p className="font-normal">Email address</p>
        <p className="font-normal text-right">folaranmi@gmail.com</p>
      </div>
      <div className="flex items-center justify-between mt-5">
        <p className="font-normal">Enrolled</p>
        <p className="font-normal text-right">May 12, 2024</p>
      </div>
      <div className="flex items-center justify-between mt-5">
        <p className="font-normal">Status</p>
        <p className="font-normal text-right">Active</p>
      </div>
      <div className="flex justify-end w-full mt-20">
        {!status ? (
          <Button
            onClick={() => {
              setStatus(!status);
            }}
            className="h-12 bg-green-500 hover:bg-green-700"
          >
            Unblock Folaranmi
          </Button>
        ) : (
          <Button
            onClick={() => {
              setStatus(!status);
            }}
            className="h-12 bg-red-500 hover:bg-red-700"
          >
            Block Folaranmi
          </Button>
        )}
      </div>
    </CustomSheet>
  );
}
UserDetailsSheet.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};
export default UserDetailsSheet;
