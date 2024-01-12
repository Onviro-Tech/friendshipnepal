import React from "react";
import { PiMapPin } from "react-icons/pi";
import {
  BsSignpostFill,
  BsTelephone,
} from "react-icons/bs";
import { AiFillFacebook, AiFillTwitterSquare, AiOutlineMail} from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaFax } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/*....Footer Section...*/}
      <div className="w-full lg:px-globalPadding px-[11px] bg-[#5E5E5E] lg:pt-8">
        <div className="w-full flex flex-col lg:flex-row justify-between gap-[32px] border-b pt-8 pb-8">
          <div className="flex flex-col gap-[21px]">
            <div className="w-full rounded-[5px] flex items-center justify-center lg:justify-end">
              <img
                src="./assets/mainLogo.png"
                alt="FriendshipNepalLogo"
                className="rounded-[5px] w-[181px] h-[128px] object-contain"
              />              
            </div>
            <div className="flex gap-[21px] text-white text-[32px] justify-center">
                <Link to={'/'}><AiFillFacebook /></Link>
                <Link to={'/'}><AiFillTwitterSquare /></Link>
              </div>
          </div>
          <div>
            <ul className="flex flex-col gap-[7px] lg:items-start items-center">
                <li><h2 className="font-inter text-[#FEB13A] font-semibold tracking-widest pb-1">Company</h2></li>
                <li><Link to={'/'}><p className="text-white font-inter">Home</p></Link></li>
                <li><Link to={'/'}><p className="text-white font-inter">About Us</p></Link></li>
                <li><Link to={'/'}><p className="text-white font-inter">Blog</p></Link></li>
                <li><Link to={'/'}><p className="text-white font-inter">Contact</p></Link></li>
                <li><Link to={'/'}><p className="text-white font-inter">Destination</p></Link></li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-[7px] lg:items-start items-center">
                <li><h2 className="font-inter text-[#FEB13A] font-semibold tracking-widest pb-1">Quick Contact</h2></li>
                <li><Link to={'/'} className="text-white font-inter flex gap-[11px] items-center"><PiMapPin/> <p>Nepal - Thamel  Kathmandu</p></Link></li>
                <li><Link to={'/'} className="text-white font-inter flex gap-[11px] items-center"><BsSignpostFill/> <p>G.P.O.BOX: 8974 CPC 449</p></Link></li>
                <li><Link to={'/'} className="text-white font-inter flex gap-[11px] items-center"><FaFax /> <p>FAX: 977 1 4212203</p></Link></li>
                <li><Link to={'/'} className="text-white font-inter flex gap-[11px] items-center"><AiOutlineMail/> <p>Email: info@friendshipnepal.com</p></Link></li>
                <li><Link to={'/'} className="text-white font-inter flex gap-[11px] items-center"><BsTelephone/> <p>Contact:+977 9851081841</p></Link></li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-[7px] lg:items-start items-center">
                <li><h2 className="font-inter text-[#FEB13A] font-semibold tracking-widest pb-1">Destinations</h2></li>
                <li><Link to={'/'}><p className="text-white font-inter">Bhutan</p></Link></li>
                <li><Link to={'/'}><p className="text-white font-inter">India</p></Link></li>
                <li><Link to={'/'}><p className="text-white font-inter">China</p></Link></li>
                <li><Link to={'/'}><p className="text-white font-inter">Tibet</p></Link></li>
                <li><Link to={'/'}><p className="text-white font-inter">Nepal</p></Link></li>
            </ul>
          </div>
          <div>
            <ul>
                <li><h2 className="font-inter text-[#FEB13A] font-semibold tracking-widest pb-2 text-center">Services</h2></li>
                <div className="flex gap-[18px] justify-center">
                <div className="flex flex-col gap-[7px]">
                <li><Link to={'/'}><p className="text-white font-inter">Jungle safarri</p></Link></li>
                <li><Link to={'/'}><p className="text-white font-inter">sightseeing</p></Link></li>
                <li><Link to={'/'}><p className="text-white font-inter">Paragliding</p></Link></li>
                <li><Link to={'/'}><p className="text-white font-inter">White Water</p></Link></li>
                <li><Link to={'/'}><p className="text-white font-inter">Link exchange</p></Link></li>
                <li><Link to={'/'}><p className="text-white font-inter">Rafting</p></Link></li>
                </div>
                <div className="flex flex-col gap-[7px]">
                <li><Link to={'/'}><p className="text-white font-inter">Volentering</p></Link></li>
                <li><Link to={'/'}><p className="text-white font-inter">Tour</p></Link></li>
                <li><Link to={'/'}><p className="text-white font-inter">Heli tour</p></Link></li>
                <li><Link to={'/'}><p className="text-white font-inter">Mountain Biking</p></Link></li>
                <li><Link to={'/'}><p className="text-white font-inter">Photography</p></Link></li>
                <li><Link to={'/'}><p className="text-white font-inter">Bungy jumping</p></Link></li>
                </div>
                </div>               
            </ul>
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-between py-5 2xl:lg:px-16 gap-[8px] border-b">
          <div>
            <div className="w-full flex flex-col">
              <div className="flex justify-center">
                <h2 className="text-[20px] leading-[24px] text-white font-semibold font-inter">
                  Affiliated with
                </h2>
              </div>
              <div className="flex gap-[18px] justify-center mt-2">
                <Link to={'/'}><img
                  src="./assets/natta.png"
                  alt="natta Image"
                  className="h-[71px] w-[60px] object-contain"
                /></Link>
                <Link to={'/'}><img
                  src="./assets/nma.png"
                  alt="nma Image"
                  className="h-[71px] w-[60px] object-contain"
                /></Link>
                <Link to={'/'}><img
                  src="./assets/uftaa.png"
                  alt="uftaa Image"
                  className="h-[71px] w-[60px] object-contain"
                /></Link>
                <Link to={'/'}><img
                  src="./assets/taan.png"
                  alt="taan Image"
                  className="h-[71px] w-[60px] object-contain"
                /></Link>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full flex flex-col">
              <div className="flex justify-center">
                <h2 className="text-[20px] leading-[24px] text-white font-semibold font-inter">
                Payment with
                </h2>
              </div>
              <div className="w-full flex gap-[18px] justify-center mt-2">
                <Link to={'/'}><img
                  src="./assets/visa.png"
                  alt="visaCard Image"
                  className="lg:h-[66px] h-auto lg:w-[77px] w-[55px] object-contain"
                /></Link>
                <Link to={'/'}><img
                  src="./assets/paypal.png"
                  alt="paypal Image"
                  className="lg:h-[66px] h-auto lg:w-[77px] w-[55px] object-contain"
                /></Link>
                <Link to={'/'}><img
                  src="./assets/masteCard.png"
                  alt="masterCard Image"
                  className="lg:h-[66px] lg:w-[77px] h-auto w-[55px] object-contain"
                /></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5 flex justify-center">
          <h2 className="text-white font-semibold font-inter text-center">
            © 2018 Privacy Policy
          </h2>
        </div>
      </div>
    </>
  );
};

export default Footer;
