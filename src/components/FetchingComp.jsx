import React from "react";
import DocumentImg from "../assets/PNG/documents.png";

function FetchingComp({ message = "Fetching..." }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src={DocumentImg}
        alt="Documents"
        className="mt-12 h-auto w-full max-w-[300px]"
      />
      <h3 className="mt-10 text-xl">{message}</h3>
    </div>
  );
}

export default FetchingComp;
