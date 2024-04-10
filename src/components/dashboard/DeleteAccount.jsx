import React from "react";
import PropTypes from "prop-types";
import { CustomModal } from "../CustomModal";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const DeleteAccount = ({ isOpen, onClose }) => {
  return (
    <CustomModal
      className={"w-[95%] md:max-w-lg"}
      isOpen={isOpen}
      onClose={onClose}
    >
      <h2 className="-mt-4 text-lg font-semibold">Are you absolutely sure?</h2>
      <p className="p-0 -mt-4 text-sm font-normal">
        This action cannot be undonde. This will permanently delete your account
        and remove your data from our servers.
      </p>
      <div className="flex justify-end">
        <Button variant="destructive">Yes, delete account</Button>
      </div>
    </CustomModal>
  );
};

DeleteAccount.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

export default DeleteAccount;
