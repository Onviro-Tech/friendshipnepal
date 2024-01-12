import React, { useState } from "react";
import "../styles/style.css";
import { Link } from "react-router-dom";
import { navItems } from "../datas/navItems";
import { BiChevronRight } from "react-icons/bi";
import { BsStopFill } from "react-icons/bs";
import { useGlobalContext } from "../context/useGlobalContext";

const NavBarList = () => {
  const [activeNavItemIndex, setActiveNavItemIndex] = useState<any>();
  const [activeNavItemIndexA, setActiveNavItemIndexA] = useState<any>();
  const [activeNavItemIndexB, setActiveNavItemIndexB] = useState<any>();

  const { navActive } = useGlobalContext();

  return (
    <div>
      <div
        onMouseLeave={() => {
          setActiveNavItemIndex(null);
          setActiveNavItemIndexA(null);
          setActiveNavItemIndexB(null);
        }}
        className="flex gap-[32px] font-semibold font-inter text-[#000000] cursor-pointer uppercase tracking-wider"
      >
        {navItems.map((item: any, index) => (
          <div key={index} className="font-inter font-semibold">
            {item?.Catagories?.length > 0 ? (
              <div
                onMouseEnter={() => setActiveNavItemIndex(index)}
                className={`whitespace-nowrap ${
                  navActive === item?.slug && "font-bold border-b-4 border-[#FEB13A]"
                } relative flex flex-col items-center`}
              >
                <p>{item?.menuTitle}</p>
                {activeNavItemIndex === index &&
                  item?.Catagories?.length > 0 && (
                    <div
                      className="relative"
                      onMouseLeave={() => {
                        setActiveNavItemIndex(null);
                        setActiveNavItemIndexA(null);
                        setActiveNavItemIndexB(null);
                      }}
                    >
                      {/* <div className="absolute top-0 left-0 rotate-45 text-[8px] z-40 border-l border-t border-[#A3A3A3] text-white bg-white">
                        <BsStopFill />
                      </div> */}
                      <div>
                        <div className="w-max absolute left-[50%] transform -translate-x-[50%] bg-white flex flex-col text-dark text-start font-[16px] z-30 border border-[#A3A3A3] shadow-lg">
                          {item?.Catagories.map((item: any, index: number) => (
                            <div
                              onMouseEnter={() => {
                                setActiveNavItemIndexA(index);
                              }}
                              key={index}
                              className={`relative hover:text-#000000 text-[#2D3134] py-[15px] px-[10px] flex justify-between gap-[20px] border-b border-[#2D3134]`}
                            >
                              <Link to={item?.link}>
                                <p>{item.menuTitle}</p>
                              </Link>
                              {item?.subCatagories && (
                                <p className="text-[21px]">
                                  <BiChevronRight />
                                </p>
                              )}
                              {activeNavItemIndexA === index &&
                                item.subCatagories?.length > 0 && (
                                  <div
                                    onMouseLeave={() => {
                                      setActiveNavItemIndexA(null);
                                      setActiveNavItemIndexB(null);
                                    }}
                                    className="w-max absolute top-0 right-[-103%] bg-white flex flex-col text-dark text-start font-[16px] z-30 border border-[#A3A3A3] shadow-lg"
                                  >
                                    {/* <div className="absolute top-[11%] left-[-2.5%] rotate-45 text-[7px] z-40 border-l border-b border-[#A3A3A3] text-white bg-white">
                                      <BsStopFill />
                                    </div> */}
                                    {item?.subCatagories?.map(
                                      (item: any, index: number) => (
                                        <div
                                          key={index}
                                          onMouseEnter={() => {
                                            setActiveNavItemIndexB(index);
                                          }}
                                          className={`relative hover:text-#000000 text-[#2D3134] py-[15px] px-[10px] flex justify-between gap-[20px] border-b border-[#2D3134]`}
                                        >
                                          <Link to={item?.link}>
                                            <p>{item.menuTitle}</p>
                                          </Link>
                                          {item?.subCatagories && (
                                            <p className="text-[21px]">
                                              <BiChevronRight />
                                            </p>
                                          )}
                                          {activeNavItemIndexB === index &&
                                            item.subCatagories?.length > 0 && (
                                              <div
                                                onMouseLeave={() =>
                                                  setActiveNavItemIndexB(null)
                                                }
                                                className="w-max absolute top-0 right-[-103%] bg-white flex flex-col text-dark text-start font-[16px] z-30 border border-[#A3A3A3] shadow-lg"
                                              >
                                                {/* <div className="absolute top-[11%] left-[-3%] rotate-45 text-[7px] z-40 border-l border-b border-[#A3A3A3] text-white bg-white">
                                                  <BsStopFill />
                                                </div> */}
                                                {item?.subCatagories?.map(
                                                  (
                                                    item: any,
                                                    index: number
                                                  ) => (
                                                    <Link
                                                      key={index}
                                                      to={item?.link}
                                                      className={`hover:text-#000000 text-[#2D3134] py-[15px] px-[10px] gap-[20px] border-b border-[#2D3134]`}
                                                    >
                                                      <p>{item.menuTitle}</p>
                                                    </Link>
                                                  )
                                                )}
                                              </div>
                                            )}
                                        </div>
                                      )
                                    )}
                                  </div>
                                )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
              </div>
            ) : (
              <Link
                onMouseEnter={() => setActiveNavItemIndex(index)}
                to={item?.link}
                className={`whitespace-nowrap ${
                  navActive === item?.slug && "font-bold border-b-4 border-[#FEB13A]"
                } hover:text-#000000 relative flex flex-col items-center pb-[2.5%]`}
              >
                <p> {item?.menuTitle} </p>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavBarList;
