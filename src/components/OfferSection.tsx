import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { tabData, tripInfo } from "../datas/tripInfo";
import ServiceCard from "./ServiceCard";
import TestimonialsCard from "./TestimonialsCard";
import { testimonialsData } from "../datas/testimonialsData";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { offerSlidex } from "../datas/offerSlidex";
import Button from "./Button";

interface TabData {
  id: string;
  title: string;
}

const OfferSection = () => {
  const sliderRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [totalSlides, setTotalSlides] = useState<number>(0);

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
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
      <div className="relative overflow-x-hidden px-[11px] lg:px-[75px] pb-[3%]">
        <Slider
          {...settings}
          ref={(slider: any) => {
            if (slider) {
              sliderRef.current = slider;
              handleSliderUpdate();
            }
          }}
          className="flex items-center"
        >
          {offerSlidex?.map((item: any, index: number) => (
            <div
              className="2xl:px-[51px] px-[11px]"
              key={index}              
            >
           
              <div className="w-full py-[11%] px-[11px] mt-4 lg:mt-8 flex justify-center rounded-[16px]" style={{
                backgroundImage: `linear-gradient(rgb(7 7 7 / 36%), rgb(7 7 7 / 41%) 20%), url(${item?.image})`,
                backgroundRepeat: "no-repeat",
                objectFit: "cover",
                width: "100%",
                backgroundAttachment: "fixed",
                backgroundSize: "100% 100%",
              }}>
                <div className="tracking-widest flex flex-col lg:flex-row justify-evenly items-center gap-[17px] py-8 lg:py-0 lg:gap-[51px] rounded-[10px] px-8" style={{
                     backgroundColor: 'rgb(30 30 30 / 70%)',
                     backdropFilter:'blur(51px)',
                }}>
                  <div className="px-8 cursor-pointer text-white">
                    <p>{item?.destination}</p>
                  </div>
                  <div className="lg:px-8 lg:py-4 lg:border-l-2 cursor-pointer text-white">
                    <p>{item?.days} </p>
                  </div>
                  <div className="lg:px-8 lg:py-4 lg:border-l-2 cursor-pointer text-white">
                    <p>{item?.price} </p>
                  </div>
                  <div className="lg:px-8 lg:my-4 lg:border-l-2 cursor-pointer text-white">
                    <Button
                      btnName="Sign Up"
                      handleOnclick={() => {
                        ("");
                      }}
                      style="bg-[#FEF8E3] tracking-widest text-black font-inter px-[51px] py-4 rounded-[10px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default OfferSection;
