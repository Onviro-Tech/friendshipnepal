import React from "react";
import TripCard from "./TripCard";
import { tripInfo } from "../datas/tripInfo";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const HotDeals = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="px-globalPadding flex justify-center">
        <h2 className="w-max text-[#FEB13A] font-bold text-[32px] text-center lg:mb-3">
          Hot Deals
        </h2>
      </div>
      <div className="px-[11px] lg:px-globalPadding grid grid-cols-1 lg:grid-cols-3 gap-[41px] lg:gap-[72px] mt-8">
        {tripInfo?.slice(0, 6).map((item: any,index: number) => (
          <TripCard key={index} data={item} />
        ))}
      </div>
      <div className="hover:opacity-90 my-8 flex justify-center">
        <Button
          handleOnclick={() => navigate("/")}
          btnName="View All Trips"
          style="bg-transparent border-b-2 border-[#2D3134] font-semibold text-[#2D3134] font-inter px-[16px] "
        />
      </div>
    </>
  );
};

export default HotDeals;
