import React from "react";
import Button from "./Button";
import { useNavigate } from 'react-router-dom';

const AboutSection = () => {
  const navigate = useNavigate();
  return (
    <div className="px-[11px] lg:px-[15%] my-5 lg:my-[65px]">
      <div className="flex justify-between gap-[32px] bg-[#FDF3CD] p-3 lg:p-[4%] flex-col lg:flex-row font-inter rounded-[25px] shadow">
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-[#FEB13A] font-semibold text-[32px] tracking-wider uppercase">About US</h2>
          <p className="text-[#353430] pt-3">
            Friendship Nepal Tours and Travels (P) Ltd, located in Kathmandu
            Nepal, is a professional tour operator-travel agent handling
            individual and group escorted tour arrangements. Friendship Nepal
            Tours offers tours to Nepal, Tibet, Bhutan and India with highly
            trained team of individuals with over two decades of experience in
            the travel industry.The company is active in the Department of
            Tourism, Govt. of Nepal, Nepal Ass...            
          </p>
          <Button btnName="Read More" handleOnclick={()=> navigate('/')} style="font-bold border-b-2 w-max border-black font-inter mt-3" />
        </div>
        <div className="flex items-center">
            <img src="./assets/aboutBannerImg.png" alt="aboutBannerImg" className="w-[340px] h-[340px] rounded-full object-cover"/>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
