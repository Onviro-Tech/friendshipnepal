import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { tabData, tripInfo } from "../datas/tripInfo";
import ServiceCard from "./ServiceCard";

interface TabData {
  id: string;
  title: string;
}

const ExploreSlider = () => {
  const sliderRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [totalSlides, setTotalSlides] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<string>("1");
  const [sliderData, setSliderData] = useState<any[]>([]); // Define the appropriate type for sliderData

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    afterChange: (current: number) => setCurrentSlide(current),
  };

  const goToPreviousSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  // Update the total number of slides whenever the slider content changes
  const handleSliderUpdate = () => {
    if (sliderRef.current) {
        const children = sliderRef.current.props.children;
        if (children && Array.isArray(children)) {
          setTotalSlides(children.length);
        }
      }
  };
 
  return (
    <>     
    <div className="relative overflow-x-hidden px-[11px] lg:px-[75px] mb-[3%] pb-[3%]">     
    <div className="bg-[#8F8F8F] absolute bottom-0 left-0 right-0 h-[48%] rounded-[15px]"></div> 
    <div className="flex lg:gap-[24px] gap-[15px] items-center justify-center font-normal text-center font-inter mb-8 mt-4">
          {tabData?.map((item: any, index: number) => (
            <p
              className={`border ${
                activeTab === item.id
                  ? "border-[#FFBA0A] bg-[#FFBA0A] text-white"
                  : "border-[#8F8F8F] bg-[#8F8F8F] text-white"
              }  rounded-full lg:px-[40px] px-[11px] lg:py-[11px] py-[5px] cursor-pointer`}
              key={index}
              onClick={() => setActiveTab(item.id)}
            >
              {item.title}
            </p>
          ))}
        </div>      
        <div className="absolute z-20 lg:right-8 right-1 lg:left-8 left-1 top-[41%]"> 
        <div className="w-full flex justify-between">
          <button
            className={`rounded-full w-[39px] h-[39px] flex items-center justify-center ${
              currentSlide === 0
                ? "bg-transparent text-[#FEB13A] border border-[#FEB13A]"
                : "bg-[#FEB13A] text-white border border-[#FEB13A]"
            }`}
            onClick={goToPreviousSlide}
          >
            <BiChevronLeft className="text-[24px]" />
          </button>
          <button
            className={`text-white rounded-full w-[39px] h-[39px] flex items-center justify-center ${
              currentSlide === totalSlides - 1
                ? "bg-transparent text-black border border-black"
                : "bg-[#FEB13A] text-white border border-[#FEB13A]"
            }`}
            onClick={goToNextSlide}
          >
            <BiChevronRight className="text-[24px]" />
          </button>
        </div>
      </div>

      <Slider
        {...settings}
        ref={(slider:any) => {
          if (slider) {
            sliderRef.current = slider;
            handleSliderUpdate();
          }
        }}
        className="flex items-center"
      >
        {tripInfo?.map((item: any, index: number) => (
          <div className="px-[11px]" key={index}>
            <ServiceCard data={item} />
          </div>
        ))}
      </Slider>
    </div>
    </>
  );
};

export default ExploreSlider;
