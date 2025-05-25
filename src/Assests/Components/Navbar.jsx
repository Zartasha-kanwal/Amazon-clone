import React, { useRef, useState, useEffect } from "react";
import Amazonlogo from "../Images/Logo.png";
import { X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [selected, setSelected] = useState("All");
  const [selectWidth, setSelectWidth] = useState(0);
  const spanRef = useRef();

  useEffect(() => {
    if (spanRef.current) {
      setSelectWidth(spanRef.current.offsetWidth + 32);
    }
  }, [selected]);
  return (
    <div>
      {/* Header for Desktop */}
      <header className="h-[60px] flex  items-center  flex-row xl:px-4 px-2 py-1 bg-[#0F1111] cursor-pointer">
        <div className="flex items-center justify-center flex-row xl:gap-[10px] gap-[8px] w-full">
          <div className="hover:border hover:border-white rounded-sm px-2">
            <img
              src={Amazonlogo}
              className="xl:h-[40px] h-[35px] xl:w-[95px] w-[75px] mt-2  "
            />
          </div>

          <div className="text-white flex flex-row py-1 lg:px-2 gap-1 hover:border hover:border-white rounded-sm ">
            <div className="flex items-end py-1">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div className=" text-sm leading-tight">
              {" "}
              <h7 className="text-xs font-semibold text-[#bebdbd] whitespace-nowrap">
                Deliver to
              </h7>
              <h5 className="text-md whitespace-nowrap">Pakistan</h5>
            </div>
          </div>

          {/* Input*/}

          <div className="relative  flex  flex-row w-[20rem] lg:w-[40rem]  xl:w-[45rem] 2xl:w-[70rem] ">
            {/* Hidden span to measure the selected option's text width */}
            <span
              ref={spanRef}
              className="invisible absolute whitespace-nowrap text-xs font-normal px-2 py-2"
            >
              {selected}
            </span>

            <select
              className="py-[10px] px-2 rounded-tl-md rounded-bl-md text-xs border border-gray-300 focus:outline-none focus:border-orange-500 focus:border-2"
              style={{ width: `${selectWidth}px` }}
              onChange={(e) => setSelected(e.target.value)}
              value={selected}
            >
              <option hidden>All</option>
              <option>All departments</option>
              <option>Arts and crafts</option>
              <option>Automotive</option>
              <option>Baby</option>
              <option>Beauty and personal care</option>
              <option>Books</option>
              <option>Boy's Fashion</option>
              <option>Computer</option>
              <option>Deals</option>
              <option>Digital Music</option>
              <option>Electronics</option>
              <option>Girl's Fashion</option>
              <option>Health and household</option>
              <option>Home and kitchen</option>
              <option>Industrial and scientific</option>
              <option>Kindal store</option>
              <option>Luggage</option>
              <option>Men's Fashion</option>
              <option>Movies and TV</option>
              <option>Music,CD's and vinyl</option>
              <option>Pet supply</option>
              <option>Women's Fashion</option>
            </select>

            <div className="w-full">
              <input
                className="pb-[9px] pt-[4.5px] w-full pl-[8px] border border-gray-300 focus:outline-none focus:border-orange-500 focus:border-2 font-normal text-md"
                placeholder="Search Amazon"
              />
            </div>

            <div
              className="bg-[#f8c462] hover:bg-[#ebb44d] cursor-pointer px-3 flex items-center text-xl text-[#424242] rounded-tr-md rounded-br-md focus:border-orange-500 focus:border-2"
              tabIndex="0"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
         
         {/* Right icons*/}
         
          <div className="flex flex-row">
            <div class="flex items-end justify-end  gap-[2px] pl-2 pt-[16px] pb-1  hover:border hover:border-white rounded-sm">
              <img
                width="18"
                height="32"
                src="https://img.icons8.com/color/48/usa.png"
                alt="usa"
              />

              <span className="text-white font-semibold text-[12px]">EN</span>
            </div>

            <i className="fa-solid fa-caret-down text-[#bcbaba] pt-[22px] ml-[3px] text-xs"></i>
          </div>

          <div className="flex flex-row ">
            <div className=" text-white pl-2 pr-1 pt-[16px] pb-1 hover:border hover:border-white rounded-sm">
              <h5 className="text-xs font-medium text-start leading-[8px] whitespace-nowrap">
                Hello, Sign in
              </h5>
              <h4 className="text-sm font-bold text-start whitespace-nowrap">
                Account & Lists
              </h4>
            </div>

            <i className="fa-solid fa-caret-down text-[#bcbaba] pt-[27px] ml-[3px] text-xs"></i>
          </div>

          <div className=" text-white pl-2 pr-1 py-[10px] hover:border hover:border-white rounded-sm flex items-center flex-col">
            <h5 className="text-xs font-medium text-start leading-[8px] whitespace-nowrap">
              Returns
            </h5>
            <h4 className="lg:text-sm text-xs font-bold text-start whitespace-nowrap">
              & orders
            </h4>
          </div>

          <div className="text-white pl-[10px] pr-1 lg:py-[7px] py-[5px] hover:border hover:border-white rounded-sm flex items-center flex-row gap-2">
            <i className="fa-solid fa-cart-shopping lg:text-3xl text-2xl"></i>
            <span className="font-bold ">Cart</span>
          </div>
        </div>
      </header>

      {/* Navbar for Desktop*/}
      <nav className="bg-[#232F3E] text-white flex  flex-row gap-1 px-4 h-[39px] cursor-pointer ">
        <div className="flex flex-row gap-3">
          <div
            className="flex gap-1 items-center text-sm font-semibold px-1 py-[5px] hover:border hover:border-white rounded-sm"
            onClick={() => setIsOpen(true)}
          >
            <i className="fa-solid fa-bars text-lg "></i>All
          </div>
          {/* Overlay */}
          {isOpen && (
            <div
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black bg-opacity-50 z-30"
            />
          )}

          {/* Sidebar */}
          <div
            className={`fixed top-0 left-0 h-full w-2/3 max-w-sm bg-white shadow-lg z-40 transition-transform duration-300 text-black overflow-y-auto ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b bg-[#2E2F3E] ">
              <h2 className="text-xl font-bold text-white px-4">
                {" "}
                <i className="fa-solid fa-circle-user text-2xl mr-1"></i> Hello,
                Sign in
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white text-[10rem] "
              >
                <X />
              </button>
            </div>

            <div className="text-start py-3 font-bold text-lg pl-8">
              Digital Content & Devices
            </div>
            <ul className="cursor-pointer text-sm font-medium text-[#414141] border border-b border-t-0 border-[#d3d3d3] border-x-0 pb-1">
              <li className="w-full py-[10px] text-start hover:bg-gray-200 flex flex-row justify-between items-center group">
                <a className="pl-8">Prime video</a>{" "}
                <i className="fa-solid fa-angle-right px-8 text-md text-[gray] group-hover:text-black"></i>
              </li>
              <li className="w-full py-[10px] text-start hover:bg-gray-200 flex flex-row justify-between items-center group">
                <a className="pl-8">Amazon music</a>{" "}
                <i className="fa-solid fa-angle-right px-8 text-md text-[gray] group-hover:text-black"></i>
              </li>
              <li className="w-full py-[10px] text-start hover:bg-gray-200 flex flex-row justify-between items-center group">
                <a className="pl-8">Kindle E-readers & Books</a>{" "}
                <i className="fa-solid fa-angle-right px-8 text-md text-[gray] group-hover:text-black"></i>
              </li>
              <li className="w-full py-[10px] text-start hover:bg-gray-200 flex flex-row justify-between items-center group">
                <a className="pl-8">Amazon Appstore</a>{" "}
                <i className="fa-solid fa-angle-right px-8 text-md text-[gray] group-hover:text-black"></i>
              </li>
            </ul>

            <div className="text-start py-3 font-bold text-lg pl-8">
              Shop by Department
            </div>
            <ul className="cursor-pointer text-sm font-medium text-[#414141] border border-b border-t-0 border-[#d3d3d3] border-x-0 pb-1">
              <li className="w-full py-[10px] text-start hover:bg-gray-200 flex flex-row justify-between items-center group">
                <a className="pl-8">Electronics</a>{" "}
                <i className="fa-solid fa-angle-right px-8 text-md text-[gray] group-hover:text-black"></i>
              </li>
              <li className="w-full py-[10px] text-start hover:bg-gray-200 flex flex-row justify-between items-center group">
                <a className="pl-8">Computer</a>{" "}
                <i className="fa-solid fa-angle-right px-8 text-md text-[gray] group-hover:text-black"></i>
              </li>
              <li className="w-full py-[10px] text-start hover:bg-gray-200 flex flex-row justify-between items-center group">
                <a className="pl-8">Smart Home</a>{" "}
                <i className="fa-solid fa-angle-right px-8 text-md text-[gray] group-hover:text-black"></i>
              </li>
              <li className="w-full py-[10px] text-start hover:bg-gray-200 flex flex-row justify-between items-center group">
                <a className="pl-8">Art & Craft</a>{" "}
                <i className="fa-solid fa-angle-right px-8 text-md text-[gray] group-hover:text-black"></i>
              </li>
              <li className="w-full py-[10px] text-start hover:bg-gray-200 group">
                <a className="pl-8">See All</a>{" "}
                <i className="fa-solid fa-angle-down px-1 text-md text-[gray] group-hover:text-black"></i>
              </li>
            </ul>

            <div className="text-start py-3 font-bold text-lg pl-8">
              Programs & Features
            </div>
            <ul className="cursor-pointer text-sm font-medium text-[#414141] border border-b border-t-0 border-[#d3d3d3] border-x-0 pb-1">
              <li className="w-full py-[10px] text-start hover:bg-gray-200 flex flex-row justify-between items-center group">
                <a className="pl-8">Gift Cards</a>{" "}
                <i className="fa-solid fa-angle-right px-8 text-md text-[gray] group-hover:text-black"></i>
              </li>
              <li className="w-full py-[10px] text-start hover:bg-gray-200 flex flex-row justify-between items-center">
                <a className="pl-8">Shop By Interest</a>{" "}
              </li>
              <li className="w-full py-[10px] text-start hover:bg-gray-200 flex flex-row justify-between items-center group">
                <a className="pl-8">Amazon live</a>{" "}
                <i className="fa-solid fa-angle-right px-8 text-md text-[gray] group-hover:text-black"></i>
              </li>
              <li className="w-full py-[10px] text-start hover:bg-gray-200 flex flex-row justify-between items-center group">
                <a className="pl-8">International Shopping</a>{" "}
                <i className="fa-solid fa-angle-right px-8 text-md text-[gray] group-hover:text-black"></i>
              </li>
              <li className="w-full py-[10px] text-start hover:bg-gray-200 group">
                <a className="pl-8">See All</a>{" "}
                <i className="fa-solid fa-angle-down px-1 text-md text-[gray] group-hover:text-black"></i>
              </li>
            </ul>

            <div className="text-start py-3 font-bold text-lg pl-8">
              Help & Settings
            </div>
            <ul className="cursor-pointer text-sm font-medium text-[#414141] border border-b border-t-0 border-[#d3d3d3] border-x-0 pb-1">
              <li className="w-full py-[10px] text-start hover:bg-gray-200 flex flex-row justify-between items-center ">
                <a className="pl-8">Your Account</a>{" "}
              </li>
              <li className="w-full py-[10px] text-start hover:bg-gray-200 flex flex-row  items-center">
                <i class="fa-solid fa-globe pl-8"></i>
                <a className="pl-2">English</a>{" "}
              </li>
              <li className="w-full py-[10px] text-start hover:bg-gray-200 flex flex-row justify-between items-center group">
                <a className="pl-8">United States</a>{" "}
              </li>
              <li className="w-full py-[10px] text-start hover:bg-gray-200 flex flex-row justify-between items-center group">
                <a className="pl-8">Customer service</a>{" "}
              </li>
              <li className="w-full py-[10px] text-start hover:bg-gray-200 group">
                <a className="pl-8">Sign in</a>{" "}
              </li>
            </ul>
          </div>

          <div className="flex gap-1 items-center text-sm font-medium px-1 py-[5px] hover:border hover:border-white rounded-sm">
            Today's deals
          </div>

          <div className="flex gap-1 items-center text-sm font-medium px-1 py-[5px] hover:border hover:border-white rounded-sm">
            Registry
          </div>
          <div className="flex gap-1 items-center text-sm font-medium px-1 py-[5px] hover:border hover:border-white rounded-sm">
            Prime Video
          </div>
          <div className="flex gap-1 items-center text-sm font-medium px-1 py-[5px] hover:border hover:border-white rounded-sm">
            Gift Cards
          </div>
          <div className="flex gap-1 items-center text-sm font-medium px-1 py-[5px] hover:border hover:border-white rounded-sm">
            Customer service
          </div>
          <div className="flex gap-1 items-center text-sm font-medium px-1 py-[5px] hover:border hover:border-white rounded-sm">
            Sell
          </div>
        </div>
      </nav>
    </div>
  );
}
