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

interface TabData {
  id: string;
  title: string;
}

const Testimonials = () => {
  const sliderRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [totalSlides, setTotalSlides] = useState<number>(0);

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
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
      <div className="relative overflow-x-hidden px-[11px] lg:px-[75px] mb-[5%] lg:mb-[2%] pb-[7%] lg:pb-[3%]">
      <h2 className="text-[#FEB13A] font-bold text-[32px] text-center">
      Testimonials
        </h2>
        <p className="text-[#707070] font-bold text-[25px] text-center lg:mb-8">Know what people tells about us</p>
        <div className="absolute z-20 right-0 bottom-0 lg:px-globalPadding px-[21px]">
          <div className="w-full flex gap-[15px]">
            <button
              className={`rounded-full w-[39px] h-[39px] flex items-center justify-center ${
                currentSlide === 0
                  ? "bg-[#FEB13A] text-white border border-[#FEB13A]"
                  : "bg-[#FEB13A] text-white border border-[#FEB13A]"
              }`}
              onClick={goToPreviousSlide}
            >
              <FaArrowAltCircleLeft className="text-[24px]" />
            </button>
            <button
              className={`text-white rounded-full w-[39px] h-[39px] flex items-center justify-center ${
                currentSlide === totalSlides - 1
                  ? "bg-transparent text-black border border-black"
                  : "bg-[#FEB13A] text-white border border-[#FEB13A]"
              }`}
              onClick={goToNextSlide}
            >
              <FaArrowAltCircleRight className="text-[24px]" />
            </button>
          </div>
        </div>

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
          {testimonialsData?.map((item: any, index: number) => (
            <div
              className="2xl:px-[51px] px-[11px]  mb-[9%] lg:my-[3%]"
              key={index}
            >
              <TestimonialsCard
                handleBtnClick={() => {
                  "/";
                }}
                data={item}
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Testimonials;
