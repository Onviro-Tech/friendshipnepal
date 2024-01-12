import React, { useState } from "react";
import { FaRegClock, FaStar } from "react-icons/fa";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { ImPriceTag } from "react-icons/im";

interface Props {
  data: {
    imgA: any;
    cost: string;
    title: string;
    duration: string;
    days: string;
    rating: any;
  };
}
const ServiceCard = ({ data }: Props) => {
  const { imgA, cost, title, days, } = data;

  return (
    <div className="w-full">
      <div className="shadow-md overflow-hidden bg-white rounded-[24px]">
        <div className="w-full relative h-[255px] overflow-hidden rounded-t-[24px]">
          <img
            src={imgA}
            alt="Img"
            className="w-full h-[255px] rounded-t-[24px] hover:scale-110 ease-in-out duration-300 object-cover"
          />
        </div>
        <div className="p-4 flex flex-col gap-[7px] mb-3">
          <div className="flex justify-between gap-[24px] items-center">
            <div>
              <h2 className="font-semibold font-inter text-[18px] text-[#FFBA0A] whitespace-nowrap">
                {title}
              </h2>
              <div className="flex gap-[7px] font-inter items-center font-normal">
                <p className="font-inter text-[#858585]">{days}</p>
              </div>
            </div>
            <div className="flex gap-[16px] font-inter items-center font-normal text-[#2D3134] ">
              <div className="text-[17px]">
                <ImPriceTag />
              </div>
              <div>
                <p className="font-inter font-semibold text-[#2D3134]">
                  {cost}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
