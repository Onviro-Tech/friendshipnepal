import React from "react";
import "../styles/style.css";
import Button from "./Button";
import { BsStopFill } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";

interface Props {
  data: {
    image: any;
    name: string;
    country: string;
    discription: string;
    summary: string;
  };
  handleBtnClick:any;
}

const TestimonialsCard = ({ data, handleBtnClick}: Props) => {
  const { summary, discription, image, name, country } = data;

  return (
    <div>
      <div className="w-full">
        <div className="shadow-md rounded-[24px]">    
          <div
            className="relative bg-white p-8 rounded-[24px] shadow-lg z-30">
                    {/* <div className="absolute bottom-[-29%] z-20 left-[50%] transform -translate-x-[50%] text-[151px] text-white ">
                        <AiFillCaretDown />
                      </div>  */}
            <div className="flex flex-col gap-[8px]">
              {/* <h2 className="font-medium font-inter text-[#2D3134] text-[21px]">
                {summary}
              </h2> */}
              <p className="font-inter font-normal text-[#2D3134] text-center px-2">
                {discription.length > 151
                  ? discription.slice(0, 151) + "..."
                  : discription}
              </p>

              <div className="hover:opacity-90 flex justify-end">
                {/* <Button btnName="Read More"
                                    handleOnclick={
                                        ()=> handleBtnClick(data) 
                                    }
                                    style="bg-transparent border-b-2 border-[#1C659A] font-semibold text-[#1C659A] font-inter p-0"/> */}
              </div>
              <div className="flex gap-[7px] flex-col justify-between items-center mt-4 mx-2">
                <div className="flex flex-col gap-[24px] items-center ">
                  <img
                    src={image}
                    alt="Image"
                    className="w-[58px] h-[58px] rounded-full object-cover"
                  />
               
                <div className="flex flex-col text-center">
                  <h2 className="text-[#2D3134] text-[21px] leading-[21px] font-medium font-inter">
                    {name}
                  </h2>
                  <p className="text-[#2D3134] font-normal font-inter">
                    {country}
                  </p>
                </div>
                </div>
                <Button btnName="Read More"
                                    handleOnclick={
                                        ()=> handleBtnClick(data) 
                                    }
                                    style="bg-transparent border-b-2 border-[#000] font-semibold text-[#000] font-inter p-0"/> 
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex justify-center mt-[25%]">
                  <img
                    src={image}
                    alt="Image"
                    className="w-[58px] h-[58px] rounded-full object-cover"
                  />
                </div>  */}
      </div>
    </div>
  );
};

export default TestimonialsCard;
