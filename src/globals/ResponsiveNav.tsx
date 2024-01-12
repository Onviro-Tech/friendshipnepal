import React, {useState} from "react";
import {RxCross2} from "react-icons/rx";
import {IoIosArrowDropdown} from "react-icons/io";
import {FaBars} from "react-icons/fa";
import {Link} from "react-router-dom";
import { navItems } from "../datas/navItems";

const ResponsiveNav = () => {
    const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
    const [isDropdownActive, setIsDropdownActive] = useState<boolean>(false);
    const [dropdownId, setDropdownId] = useState<any>();
    const [isSubDropdownActive, setIsSubDropdownActive] = useState<boolean>(false);
    const [subDropdownId, setSubDropdownId] = useState<any>();
    const [isSubDropdownActiveA, setIsSubDropdownActiveA] = useState<boolean>(false);
    const [subDropdownIdA, setSubDropdownIdA] = useState<any>();

    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };
    return (
        <div>
            <div className="flex justify-end">
                {/* Mobile menu */}
                {
                showMobileMenu && (
                    <div style={
                            {
                                zIndex: 99,
                                animation: "sidebarAnimate linear 0.2s"
                            }
                        }
                        className="w-[80%] h-[100%] fixed top-[0px] right-0 flex flex-col gap-[30px] overflow-y-scroll scrollbar-hide bg-white transition ease-out delay-1000">
                        {/*....Cross...*/}
                        <div onClick={
                                () => setShowMobileMenu(false)
                            }
                            className="bg-[#FEB13A] cursor-pointer absolute top-[20px] right-[20px] w-[30px] h-[30px] rounded-full shadow-lg flex justify-center items-center">
                            <RxCross2 className="text-xl text-white"/>
                        </div>

                        {/*...Nav Item..*/}
                        <div className="w-full flex flex-col items-start px-2 pt-2 pb-3 font-semibold font-inter mt-[70px]">
                            {
                            navItems.map((item:any, index:number) => (
                                <div key={index}>
                                    {
                                    item.Catagories ?. length > 0 ? (
                                        <div onClick={
                                                () => {
                                                    setIsDropdownActive((prev) => !prev);
                                                    setDropdownId(index);
                                                }
                                            }
                                            className={`flex ${isDropdownActive && dropdownId === index ? 'text-[#FEB13A]' : 'text-black'} items-center justify-between gap-[10px] px-3 py-2 rounded-md font-medium `}>
                                            <div>
                                            <Link to={item ?. link}>
                                                <p>{
                                                    item.menuTitle
                                                }</p>
                                                </Link>
                                            </div>
                                            <div>
                                                <IoIosArrowDropdown/>
                                            </div>
                                        </div>
                                    ) : (
                                        <Link to={
                                                item.link
                                            }
                                            key={index}
                                            onClick={
                                                () => setShowMobileMenu(false)
                                            }
                                            className={`block px-3 py-2 rounded-md font-medium`}>
                                            {
                                            item.menuTitle
                                        } </Link>
                                    )
                                }
                                    {
                                    isDropdownActive && dropdownId === index && item.Catagories ?. map((item:any, index:number) => (
                                        <div key={index}>
                                            {
                                            item.subCatagories ?. length > 0 ? (
                                                <div onClick={
                                                        () => {
                                                            setIsSubDropdownActive((prev) => !prev);
                                                            setSubDropdownId(index);
                                                        }
                                                    }
                                                    className={`flex items-center ${isSubDropdownActive && subDropdownId === index ? 'text-[#FEB13A]' : 'text-black'} justify-between gap-[10px] px-3 py-2 pl-[20px] rounded-md font-medium`}>
                                                   <Link to={item ?. link}>
                                                        <p>{
                                                            item.menuTitle
                                                        }</p>
                                                    </Link>
                                                    <div>
                                                        <IoIosArrowDropdown/>
                                                    </div>
                                                </div>
                                            ) : (
                                                <Link to={
                                                        item.link
                                                    }
                                                    onClick={
                                                        () => setShowMobileMenu(false)
                                                    }
                                                    className="block px-3 py-2 pl-[20px] rounded-md text-slate-500 font-medium ">
                                                    <p>{
                                                        item.menuTitle
                                                    } </p>

                                                </Link>
                                            )
                                        }
                                        
                                        {
                                    isSubDropdownActive && subDropdownId === index && item.subCatagories ?. map((item:any, index:number) => (
                                        <div key={index}>
                                        {
                                        item.subCatagories ?. length > 0 ? (
                                            <div onClick={
                                                    () => {
                                                        setIsSubDropdownActiveA((prev) => !prev);
                                                        setSubDropdownIdA(index);
                                                    }
                                                }
                                                className={`flex items-center ${isSubDropdownActiveA && subDropdownIdA === index ? 'text-[#FEB13A]' : 'text-black'} justify-between gap-[10px] px-3 py-2 pl-[30px] rounded-md font-medium`}>
                                               <Link to={item ?. link}>
                                                    <p>{
                                                        item.menuTitle
                                                    }</p>
                                                </Link>
                                                <div>
                                                    <IoIosArrowDropdown/>
                                                </div>
                                            </div>
                                        ) : (
                                            <Link to={
                                                    item.link
                                                }
                                                onClick={
                                                    () => setShowMobileMenu(false)
                                                }
                                                className="block px-3 py-2 pl-[20px] rounded-md text-slate-500 font-medium">
                                                <p>{
                                                    item.menuTitle
                                                } </p>

                                            </Link>
                                        )
                                    }
                                    
                                    {
                                isSubDropdownActiveA && subDropdownIdA === index && item.subCatagories ?. map((item:any, index:number) => (
                                    <Link to={
                                        item.link
                                    }
                                    key={index}
                                    onClick={
                                        () => setShowMobileMenu(false)
                                    }
                                    className="block px-3 py-2 pl-[40px] rounded-md text-slate-500 font-medium ">
                                    <p>{
                                        item.menuTitle
                                    } </p>

                                </Link>
                                ))}
                                     </div>
                                    ))}
                                         </div>

                                    ))
                                } </div>
                            ))
                        } </div>
                    </div>
                )
            }
                <div className="w-full lg:hidden flex items-center py-2">
                    <div>
                        <Link to="/">
                            <img src='./assets/mainLogo.png'
                                className="lg:w-fit object-contain"
                                alt="logo"
                                style={
                                    {
                                        width: '155px',
                                        height: '82px'
                                    }
                                }/>
                        </Link>
                    </div>

                </div>
                {/* Responsive Button */}
                <button onClick={toggleMobileMenu}
                    className="text-end py-4 px-5 lg:hidden hover:text-gray-300 focus:outline-none">
                    <FaBars className="h-6 w-6"/>
                </button>
            </div>
        </div>
    )
}

export default ResponsiveNav
