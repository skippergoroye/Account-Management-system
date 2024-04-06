import React from "react";
import PropTypes from "prop-types";
import { CustomModal } from "../CustomModal";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

function Addmoney({ isOpen, onClose }) {
  return (
    <CustomModal
      className={"w-[95%] md:max-w-lg"}
      isOpen={isOpen}
      onClose={onClose}
    >
      <h2 className="-mt-4 text-lg font-semibold">Add Money</h2>
      <p className="p-0 -mt-4 text-sm font-normal">
        Boost your financial power. Add money effortlessly and watch your
        savings soar!
      </p>
      <div className="flex items-center gap-4 mt-4">
        <p className="">Amount</p>
        <Input placeholder="Enter amount" className="h-11" />
      </div>
      <div className="flex justify-end">
        <Button>Continue</Button>
      </div>
    </CustomModal>
  );
}
Addmoney.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};
export default Addmoney;
