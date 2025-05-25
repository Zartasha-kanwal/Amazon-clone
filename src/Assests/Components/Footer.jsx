import React from "react";
import Amazonlogo from "../Images/Logo.png";
function Footer() {
  return (
    <div>
      <div
        className="bg-[#37475A] hover:bg-[#4d627b] cursor-pointer py-3 text-white text-center lg:text-sm text-xs whitespace-nowrap"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Back to Top
      </div>

      <div className="bg-[#232F3E]">
        <div className="grid grid-cols-4 lg:gap-[8rem] gap-[5rem] text-white py-9 lg:px-[9rem] px-[5rem]">
          <ul className="font-bold flex flex-col gap-2">
            Get to Know Us
            <li className="text-sm font-normal cursor-pointer hover:underline">
              Careers
            </li>
            <li className="text-sm font-normal cursor-pointer hover:underline">
              Blog
            </li>
            <li className="text-sm font-normal cursor-pointer hover:underline">
              About Amazon
            </li>
            <li className="text-sm font-normal cursor-pointer hover:underline">
              Investor Relations
            </li>
            <li className="text-sm font-normal cursor-pointer hover:underline">
              Amazon Devices
            </li>
            <li className="text-sm font-normal cursor-pointer hover:underline">
              Amazon Science
            </li>
          </ul>

          <ul className="font-bold whitespace-nowrap flex flex-col gap-2">
            Make Money with Us
            <li className="text-sm font-normal cursor-pointer hover:underline">
              Sell products on Amazon
            </li>
            <li className="text-sm font-normal cursor-pointer hover:underline">
              Sell on Amazon Business
            </li>
            <li className="text-sm font-normal cursor-pointer hover:underline">
              Sell apps on Amazon
            </li>
            <li className="text-sm font-normal cursor-pointer hover:underline">
              Become an Affiliate
            </li>
            <li className="text-sm font-normal cursor-pointer hover:underline">
              Advertise Your Products
            </li>
            <li className="text-sm font-normal cursor-pointer hover:underline">
              Self-Publish with Us
            </li>
            <li className="text-sm font-normal cursor-pointer hover:underline">
              Host an Amazon Hub
            </li>
            <li className="text-sm font-normal cursor-pointer hover:underline whitespace-normal">
              › See More Make Money with Us
            </li>
          </ul>

          <ul className="font-bold flex flex-col gap-2 ">
            Amazon Payment Products
            <li className="text-sm font-normal cursor-pointer hover:underline">
              Amazon Business Card
            </li>
            <li className="text-sm font-normal cursor-pointer hover:underline">
              Shop with Points
            </li>
            <li className="text-sm font-normal cursor-pointer hover:underline">
              Reload Your Balance
            </li>
            <li className="text-sm font-normal cursor-pointer hover:underline">
              Amazon Currency Converter
            </li>
          </ul>

          <ul className="font-bold flex flex-col gap-2">
            Let Us Help You
            <li className="text-sm font-normal cursor-pointer hover:underline">
              Amazon and COVID-19
            </li>
            <li className="text-sm font-normal cursor-pointer hover:underline">
              Your Account
            </li>
            <li className="text-sm font-normal cursor-pointer hover:underline">
              Your Orders
            </li>
            <li className="text-sm font-normal cursor-pointer hover:underline">
              Shipping Rates & Policies
            </li>
            <li className="text-sm font-normal cursor-pointer hover:underline">
              Returns & Replacements
            </li>
            <li className="text-sm font-normal cursor-pointer hover:underline">
              Manage Your Content and Devices
            </li>
            <li className="text-sm font-normal cursor-pointer hover:underline">
              Help
            </li>
          </ul>
        </div>

        <div className="border-t border-[#838181dd] pt-5 pb-11">
          <div className="flex gap-20 items-center lg:w-3/6 w-4/6 mx-auto">
            <div>
              <img
                src={Amazonlogo}
                className="xl:h-[35px] h-[35px] xl:w-[85px] w-[65px] px-1 mt-5"
              />
            </div>
            <div className="flex gap-2">
              <button className="px-2 py-2 border border-[#DDDD] rounded-sm text-[#DDDD] text-sm">
                <i className="fa-solid fa-globe mr-2"></i>
                English
                <select className="bg-transparent outline-none"></select>
              </button>
              <button className="px-2 py-2 border border-[#DDDD] rounded-sm text-[#DDDD] text-sm">
                <span className="text-white pr-2">$</span>
                <span>USD - U.S. Dollar</span>
              </button>
              <button className="px-2 py-2 border border-[#DDDD] rounded-sm text-[#DDDD] text-sm flex items-center gap-1">
                <img
                  src="https://img.icons8.com/color/48/usa.png"
                  className="w-[19px] h-[19px]"
                />
                <span>United States</span>
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[#131A22] py-[30px]">
          
          <div className="flex  gap-[2rem] lg:px-[9rem] px-[3rem]">
            <div className="flex flex-col gap-y-4">
              <div className="group">
                <ul className="text-white text-xs group-hover:underline cursor-pointer">
                  {" "}
                  Amazon Music
                  <li className="text-[#DDDD] group-hover:underline ">
                    Stream millions of songs
                  </li>
                </ul>
              </div>

              <div className="group">
                <ul className="text-white text-xs group-hover:underline cursor-pointer">
                  {" "}
                  Amazon Business
                  <li className="text-[#DDDD] group-hover:underline ">
                    Everything For Your Business
                  </li>
                </ul>
              </div>

              <div className="group">
                <ul className="text-white text-xs group-hover:underline cursor-pointer">
                  {" "}
                  IMDbPro
                  <li className="text-[#DDDD] group-hover:underline ">
                    Get Info Entertainment Professionals Need
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-y-4">
              <div className="group">
                <ul className="text-white text-xs group-hover:underline cursor-pointer">
                  {" "}
                  Amazon Ads
                  <li className="text-[#DDDD] group-hover:underline ">
                    Reach customers wherever they spend their time
                  </li>
                </ul>
              </div>

              <div className="group">
                <ul className="text-white text-xs group-hover:underline cursor-pointer">
                  {" "}
                  AmazonGlobal
                  <li className="text-[#DDDD] group-hover:underline ">
                    Ship Orders Internationally
                  </li>
                </ul>
              </div>

              <div className="group">
                <ul className="text-white text-xs group-hover:underline cursor-pointer">
                  {" "}
                  Kindle Direct
                  <li className="text-[#DDDD] group-hover:underline ">
                    Publishing Indie Digital & Print Publishing Made Easy
                  </li>
                </ul>
              </div>

              <div className="group">
                <ul className="text-white text-xs group-hover:underline cursor-pointer">
                  {" "}
                  eero WiFi
                  <li className="text-[#DDDD] group-hover:underline ">
                    Stream 4K Video in Every Room
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-y-4">
              <div className="group">
                <ul className="text-white text-xs group-hover:underline cursor-pointer">
                  {" "}
                  6pm
                  <li className="text-[#DDDD] group-hover:underline ">
                    Score deals on fashion brands
                  </li>
                </ul>
              </div>

              <div className="group">
                <ul className="text-white text-xs group-hover:underline cursor-pointer">
                  {" "}
                  Amazon Web Services
                  <li className="text-[#DDDD] group-hover:underline ">
                    Scalable Cloud Computing Services
                  </li>
                </ul>
              </div>

              <div className="group">
                <ul className="text-white text-xs group-hover:underline cursor-pointer">
                  {" "}
                  Prime Video Direct
                  <li className="text-[#DDDD] group-hover:underline ">
                    Video Distribution Made Easy
                  </li>
                </ul>
              </div>

              <div className="group">
                <ul className="text-white text-xs group-hover:underline cursor-pointer">
                  {" "}
                  Blink
                  <li className="text-[#DDDD] group-hover:underline ">
                    Smart Security for Every Home
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-y-4">
              <div className="group">
                <ul className="text-white text-xs group-hover:underline cursor-pointer">
                  {" "}
                  AbeBooks
                  <li className="text-[#DDDD] group-hover:underline ">
                    Books, art & collectibles
                  </li>
                </ul>
              </div>

              <div className="group">
                <ul className="text-white text-xs group-hover:underline cursor-pointer">
                  {" "}
                  Audible
                  <li className="text-[#DDDD] group-hover:underline ">
                    Listen to Books & Original Audio Performances
                  </li>
                </ul>
              </div>

              <div className="group">
                <ul className="text-white text-xs group-hover:underline cursor-pointer">
                  {" "}
                  Shopbop
                  <li className="text-[#DDDD] group-hover:underline ">
                    Designer Fashion Brands
                  </li>
                </ul>
              </div>

              <div className="group">
                <ul className="text-white text-xs group-hover:underline cursor-pointer">
                  {" "}
                  Neighbors App
                  <li className="text-[#DDDD] group-hover:underline ">
                    Real-Time Crime & Safety Alerts
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-y-4">
              <div className="group">
                <ul className="text-white text-xs group-hover:underline cursor-pointer">
                  {" "}
                  ACX
                  <li className="text-[#DDDD] group-hover:underline ">
                    Audiobook Publishing Made Easy
                  </li>
                </ul>
              </div>

              <div className="group">
                <ul className="text-white text-xs group-hover:underline cursor-pointer">
                  {" "}
                  Box Office Mojo
                  <li className="text-[#DDDD] group-hover:underline ">
                    Find Movie Box Office Data
                  </li>
                </ul>
              </div>

              <div className="group">
                <ul className="text-white text-xs group-hover:underline cursor-pointer">
                  {" "}
                  Woot!
                  <li className="text-[#DDDD] group-hover:underline ">
                    Deals and Shenanigans
                  </li>
                </ul>
              </div>

              <div className="group">
                <ul className="text-white text-xs group-hover:underline cursor-pointer">
                  {" "}
                  Amazon Subscription Boxes
                  <li className="text-[#DDDD] group-hover:underline ">
                    Top subscription boxes – right to your door
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-y-4">
              <div className="group">
                <ul className="text-white text-xs group-hover:underline cursor-pointer">
                  {" "}
                  Sell on Amazon
                  <li className="text-[#DDDD] group-hover:underline ">
                    Start a Selling Account
                  </li>
                </ul>
              </div>

              <div className="group">
                <ul className="text-white text-xs group-hover:underline cursor-pointer">
                  {" "}
                  Goodreads
                  <li className="text-[#DDDD] group-hover:underline ">
                    Book reviews & recommendations
                  </li>
                </ul>
              </div>

              <div className="group">
                <ul className="text-white text-xs group-hover:underline cursor-pointer">
                  {" "}
                  Zappos
                  <li className="text-[#DDDD] group-hover:underline ">
                    Shoes & Clothing
                  </li>
                </ul>
              </div>

              <div className="group">
                <ul className="text-white text-xs group-hover:underline cursor-pointer">
                  {" "}
                  PillPack
                  <li className="text-[#DDDD] group-hover:underline ">
                    Pharmacy Simplified
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-y-4">
              <div className="group">
                <ul className="text-white text-xs group-hover:underline cursor-pointer">
                  {" "}
                  Veeqo
                  <li className="text-[#DDDD] group-hover:underline ">
                    Shipping Software Inventory Management
                  </li>
                </ul>
              </div>

              <div className="group">
                <ul className="text-white text-xs group-hover:underline cursor-pointer">
                  {" "}
                  IMDb
                  <li className="text-[#DDDD] group-hover:underline ">
                    Movies, TV & Celebrities
                  </li>
                </ul>
              </div>

              <div className="group">
                <ul className="text-white text-xs group-hover:underline cursor-pointer">
                  {" "}
                  Ring
                  <li className="text-[#DDDD] group-hover:underline ">
                    Smart Home Security Systems
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-white pt-[35px]">
            <div className=" flex justify-center gap-3 text-xs mx-auto w-3/6 ">
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
    </div>
  );
}

export default React.memo(Footer);
