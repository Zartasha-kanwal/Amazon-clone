import React from "react";

export default function MobileFooter() {
  return (
    <div>
      <div
        className="py-1 bg-[#37475A] flex flex-col items-center justify-center text-white"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <i className="fa-solid fa-caret-up"></i>
        <span className="text-sm py-1">Top of page</span>
      </div>

      <div className="bg-[#232F3E] px-[20px] py-[25px] grid grid-cols-2">
        <div className="text-white ">
          <ul className=" flex flex-col gap-4 text-[15px] font-medium">
            <li>Amazon.com</li>
            <li>Your Lists</li>
            <li>Registry & Gift List</li>
            <li>Your Account</li>
            <li>Sell products on Amazon</li>
            <li>Recalls and Product Safety Alerts</li>
            <li>Customer Service</li>
          </ul>
        </div>

        <div className="text-white ">
          <ul className=" flex flex-col gap-4 text-[15px] font-medium">
            <li>Your Orders</li>
            <li>Gift Cards</li>
            <li>Find a Gift</li>
            <li>Browsing History</li>
            <li>Your Returns</li>
          </ul>
        </div>
      </div>

      <div className="bg-[#131A22]">
        
        <div className="pt-[25px] pb-[12px] flex items-center justify-center ">
          <div className="flex gap-3 flex-wrap items-center justify-center">
            <button className="px-2 py-2  text-[#DDDD] text-sm">
              <i className="fa-solid fa-globe mr-2"></i>
              English
            </button>
            <button className="px-2 py-2  text-[#DDDD] text-sm">
              <span className="text-white pr-2">$</span>
              <span>USD - U.S. Dollar</span>
            </button>
            <button className="px-2 py-2 text-[#DDDD] text-sm flex items-center gap-1">
              <img
                src="https://img.icons8.com/color/48/usa.png"
                className="w-[19px] h-[19px]"
              />
              <span>United States</span>
            </button>
          </div>
        </div>

        <div className="py-[25px] text-white">
          <h3 className="text-center text-[15px] font-medium">
            Already a customer? Sign in
          </h3>
        </div>

        <div className="text-white pb-[35px]">
          <div className=" flex justify-center gap-3 text-xs flex-wrap ">
            <span className="hover:underline cursor-pointer whitespace-nowrap">
              Conditions of Use
            </span>
            <span className="hover:underline cursor-pointer whitespace-nowrap">
              Privacy Notice
            </span>
            <span className="hover:underline cursor-pointer whitespace-nowrap">
              Consumer Health Data Privacy Disclosure
            </span>
            <span className="hover:underline cursor-pointer whitespace-nowrap">
              Your Ads Privacy Choices
            </span>
          </div>

          <div className="text-xs text-center whitespace-nowrap pt-1">
            © 1996-2025, Amazon.com, Inc. or its affiliates
          </div>
        </div>
      </div>
    </div>
  );
}
