import React from "react";

function TransactionList() {
  return (
    <div className="col-span-2 md:col-span-1 pt-7 px-6 bg-white rounded-lg h-[400px]">
      <h3>Latest Transactions</h3>
      <hr className="my-6" />
      <div className="h-4/6">
        <div className="flex flex-col items-center justify-center h-full">
          <h6 className="text-sm font-normal">
            You don’t have any transaction history
          </h6>
          <p className="text-xs font-normal">
            when you make a transaction it will show up here
          </p>
        </div>
      </div>
    </div>
  );
}

export default TransactionList;
