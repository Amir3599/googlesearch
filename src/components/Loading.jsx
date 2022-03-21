import React from "react";
import { Circles } from "react-loader-spinner";

export const Loading = () => {
  return (
    <div className="flex justify-center items-center my-14 ">
      <Circles color="#00BFFF" width={80} height={80} />
    </div>
  );
};
