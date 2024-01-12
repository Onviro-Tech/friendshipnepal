import React, { useEffect } from "react";
import { useGlobalContext } from "../context/useGlobalContext";
import {
  AboutSection,
  ExploreSlider,
  HotDeals,
  OfferSection,
  SearchForm,
  Testimonials,
} from "../components";

const Home = () => {
  const { setNavActive }: any = useGlobalContext();

  // Setting the nav state
  useEffect(() => {
    setNavActive("home");
  }, []);
  return (
    <>
      <div
        className=" flex items-center justify-center px-[11px] lg:px-globalPadding flex-col py-8 lg:py-[15%]"
        style={{
          backgroundImage: `linear-gradient(rgb(7 7 7 / 36%), rgb(7 7 7 / 41%) 20%), url(./assets/bannerImg.png)`,
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
          width: "100%",
          backgroundAttachment: "fixed",
          backgroundSize: "100% 100%",
        }}
      >
        <h1 className="text-white font-semibold lg:text-[32px] font-inter text-center tracking-widest">
          THERE ARE PLENTY OF PLACES <br /> THAT ARE WORTH SEEING
        </h1>
        <SearchForm />
      </div>
      <div>
        <AboutSection />
      </div>
      <div>
        <HotDeals />
      </div>
      <div>
        <OfferSection />
      </div>
      <div className="px-[11px] lg:px-globalPadding z-30">
        <h2 className="text-[#FEB13A] font-bold text-[32px] text-center lg:mb-3">
        Explore With us
        </h2>
        <ExploreSlider />
      </div>
      <div>
        <Testimonials />
      </div>
    </>
  );
};

export default Home;
