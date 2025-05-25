import React, { useState } from "react";
import Amazonlogo from "../Images/Logo.png";
import { X } from "lucide-react";

const categories = [
  "Electronics",
  "Fashion",
  "Books",
  "Home & Kitchen",
  "Groceries",
  "Deals",
];

 function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="h-[48px] bg-[#232F3E] flex items-center justify-between px-4">
        <div className="flex flex-row items-center gap-3">
          <i
            className="fa-solid fa-bars text-white text-2xl"
            onClick={() => setIsOpen(true)}
          ></i>
          <img src={Amazonlogo} className="h-[35px]  w-[75px] mt-3" />
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
          className={`fixed top-0 left-0 h-full w-4/5 max-w-md bg-white shadow-lg z-40 transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-4 py-3  bg-[#232F3E] text-white">
            <h2 className="text-lg font-bold h-[44px]">
              {" "}
              <span className="text-sm">
                Sign in <i class="fa fa-angle-right text-xs"></i>
              </span>
              <i className="fa-regular fa-user text-xl"></i>
            </h2>
            <button onClick={() => setIsOpen(false)}>
              <X />
            </button>
          </div>
          <div className="bg-[#232F3E] px-[20px] pb-[20px] text-white text-start">
            <h4 className="text-[20px] font-bold px-1">Browse</h4>
            <h2 className="text-[28px] font-bold leading-4">Amazon</h2>
          </div>

          <div className="text-black text-[20px] font-bold px-[20px] flex flex-row items-center justify-between pt-[20px] pb-[13px] border-b-4 border-[#dcdcdc]">
            Amazon Home
            <i className="fa-solid fa-house"></i>
          </div>

          <div className="py-[15px] px-[20px] text-black text-[20px] font-bold text-start border-b-4 border-[#dcdcdc]">
            Trending
            <div className="py-[15px]  text-start font-normal text-[18px]">
              Movers & Shakers
            </div>
          </div>

          <div className="py-[15px] px-[20px] text-black text-[20px] font-bold text-start ">
            Top Departments
            <div className="py-[15px]  text-start font-normal text-[18px]">
              Home
            </div>
            <div className="py-[15px]  text-start font-normal text-[18px]">
              Health & Household
            </div>
            <div className="py-[15px]  text-start font-normal text-[18px]">
              Books
            </div>
            <div className="py-[15px]  text-start font-normal text-[18px]">
              PC
            </div>
            <div className="py-[15px]  text-start font-normal text-[18px]">
              See all
              <i className="fa-solid fa-angle-down px-1 text-[18px] text-[gray] group-hover:text-black"></i>
            </div>
          </div>
        </div>

        <div className="text-white flex items-center gap-1">
          <span className="text-sm">
            Sign in <i class="fa fa-angle-right text-[8px]"></i>
          </span>
          <i className="fa-regular fa-user text-2xl"></i>
          <i class="fa-solid fa-cart-shopping text-3xl pl-3"></i>
        </div>
      </div>


      {/* Input */}
      <div className="h-[48px] bg-[#232F3E] flex items-center px-4 ">
        <div className="w-full border border-white bg-white rounded-md flex flex-row">
          <input
            className=" pb-[9px] pt-[4.5px] w-full pl-[8px] rounded-md  focus:outline-none focus:border-sky-700 focus:rounded-tl-md focus:rounded-bl-md focus:border-2 font-normal text-md"
            placeholder="Search Amazon"
          />
          <div
            className="bg-[#f8c462] hover:bg-[#ebb44d] cursor-pointer p-2 px-3 flex items-center text-xl text-[#424242] rounded-tr-md rounded-br-md focus:border-sky-700 focus:border-2"
            tabIndex="0"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      </div>

     {/* Horizontal scroll */}
      <div className=" bg-[#232F3E] flex items-center ">
        <div className="flex items-center text-white cursor-pointer  overflow-x-auto py-[10px]">
          <button className="hover:text-[#a5afbb] px-4">Video</button>
          <button className="hover:text-[#a5afbb] px-4">Deals</button>
          <button className="hover:text-[#a5afbb] px-4 whitespace-nowrap">
            Amazon Basics
          </button>
          <button className="hover:text-[#a5afbb] px-4 whitespace-nowrap">
            Best Sellers
          </button>
          <button className="hover:text-[#a5afbb] px-4 whitespace-nowrap">
            Livestreams
          </button>
          <button className="hover:text-[#a5afbb] px-4">Music</button>
          <button className="hover:text-[#a5afbb] whitespace-nowrap">
            New Releases
          </button>
          <button className="hover:text-[#a5afbb] px-4">Home</button>
          <button className="hover:text-[#a5afbb] px-4">Books</button>
          <button className="hover:text-[#a5afbb] px-4">PC</button>
        </div>
      </div>
     
     {/* Deliver to pakistan*/}
      <div className="h-[44px] bg-[#37475A] px-4 text-white flex items-center gap-1">
        <i className="fa-solid fa-location-dot text-md"></i>
        <h7 className="text-sm">
          Deliver to Pakistan <i className="fa-solid fa-angle-down"></i>
        </h7>
      </div>
    </>
  );
}

export default React.memo (MobileNavbar);
