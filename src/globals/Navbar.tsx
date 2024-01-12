import React from "react";
import "../styles/style.css";
import { Link } from "react-router-dom";
import { SearchInput } from "../components";
import NavBarList from "./NavBarList";
import ResponsiveNav from "./ResponsiveNav";

// import ResponsiveNavBar from "./ResponsiveNavBar";
// import { useGlobalContext } from "../context/useGlobalContext";

const Navbar = () => {
  // const {siteInfo} = useGlobalContext();

  return (
    <>
      {/*....Nav Section...*/}
      <nav className="w-full shadow-xl bg-white">
        <div className="w-full lg:block hidden lg:flex gap-[30px] justify-between px-[20px] 2xl:px-globalPadding py-[10px]">
          <div className="w-full flex gap-[21px] items-center">
            <div>
              <Link to="/">
                <img
                  src='./assets/mainLogo.png'
                  className="lg:w-fit object-contain"
                  alt="FriendshipNepalLogo"
                  style={{
                    width: "155px",
                    height: "101px",
                  }}
                />
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <NavBarList />
          </div>
          <div className="w-full flex flex-col gap-[16px] items-end justify-center">
            <SearchInput />
          </div>
        </div>
        <div className="lg:hidden block">
          <ResponsiveNav/>
          </div>
      </nav>
    </>
  );
};

export default Navbar;
