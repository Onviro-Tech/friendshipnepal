import React, { useState } from "react";
import { FaRegClock, FaStar } from "react-icons/fa";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { ImPriceTag } from "react-icons/im";
import { PiMapPin } from "react-icons/pi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

interface Props {
  data: {
    img: any;
    cost: string;
    title: string;
    duration: string;
    location: string;
    rating: any;
  };
}
const TripCard = ({ data }: Props) => {
  const navigate = useNavigate();
  const { img, cost, title, duration, location, rating } = data;
  const [likeBtn, setLikeBtn] = useState<any>(true);
  const [unLikeBtn, setUnLikeBtn] = useState<any>(false);

  return (
    <div className="w-full">
      <div className="shadow-md overflow-hidden bg-white rounded-[24px]">
        <div className="w-full relative h-[255px] overflow-hidden rounded-t-[24px]">
          <img
            src={img}
            alt="Img"
            className="w-full h-[255px] rounded-t-[24px] hover:scale-110 ease-in-out duration-300 object-cover"
          />
          <div>
            <div
              onClick={() => {
                setLikeBtn(false);
                setUnLikeBtn(true);
              }}
            >
              <div className="absolute top-5 right-5 text-[28px] bg-white rounded-[7px] p-1 cursor-pointer">
                {likeBtn && <AiOutlineHeart fill="#BC371A" />}
              </div>
            </div>
            <div
              onClick={() => {
                setUnLikeBtn(false);
                setLikeBtn(true);
              }}
            >
              <div className="absolute top-5 right-5 text-[28px] bg-white rounded-[7px] p-1 cursor-pointer">
                {unLikeBtn && <AiFillHeart fill="#BC371A" />}
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 flex flex-col gap-[7px] mb-3">
          <div className="flex justify-between gap-[24px] items-center">
            <div>
              <h2 className="font-semibold font-inter text-[18px] text-[#2D3134] whitespace-nowrap">
                {title}
              </h2>
              <div className="flex gap-[7px] font-inter items-center font-normal">
                <div className="text-[17px] text-[#BC371A]">
                  <PiMapPin />
                </div>
                <div>
                  <p className="font-inter text-[#858585]">{location}</p>
                </div>
                {/* <p className="text-[#858585]">{location}</p> */}
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

          <div className="flex justify-between gap-[21px] items-between mt-3">
            <div className="flex gap-1">
              {[...Array(rating)].map((_, index) => (
                <FaStar
                  key={index}
                  color={index < rating ? "gold" : "gray"}
                  size={21}
                  style={{ cursor: "pointer" }}
                />
              ))}
            </div>
            <div className="flex gap-[11px] font-inter items-center font-normal text-[#2D3134] font-inter ">
              <div className="text-[17px] text-[#2D3134]">
                <FaRegClock />
              </div>
              <div className="text-[#2D3134] font-semibold">{duration}</div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between gap-[25px]">
          <div className="w-full hover:opacity-90">
            <Button
              handleOnclick={() => navigate("/")}
              btnName="Explore More"
              style="w-full rounded-b-[24px] bg-[#FEF8E3] border-t-2 border-[#FEB13A] font-semibold text-[#000] font-inter px-[16px] py-[11px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripCard;
