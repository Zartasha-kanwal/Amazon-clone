import React from "react";
import Scrollimg1 from "../Images/Mobilescroll-img1.jpg";
import Card2img1 from "../Images/Card2-img1.jpg";
import Card2img2 from "../Images/Card2-img2.jpg";
import Card2img3 from "../Images/Card2-img3.jpg";
import Card2img4 from "../Images/Card2-img4.jpg";
import Card3img1 from "../Images/Card3-img1.jpg";
import Card3img2 from "../Images/Card3-img2.jpg";
import Card3img3 from "../Images/Card3-img3.jpg";
import Card3img4 from "../Images/Card3-img4.jpg";
import scroll4img from "../Images/Card4img.jpg";
import Scroll5img from "../Images/Scroll5img.jpg";
import Scroll6img from "../Images/Scroll6img.jpg";
import Scroll7img from "../Images/Scroll7img.jpg";
import Scroll8img from "../Images/Scroll8img.jpg";
import Scroll9img from "../Images/Scroll9img.jpg";
import Scroll10img from "../Images/Scroll10img.jpg";

export default function MobileHerosection() {
  return (
    <div>
      <div className="relative overflow-x-auto snap-x snap-mandatory scrollbar-hide">
        <div className="flex gap-2 w-max py-3">
          {/* Invisible spacing element to create initial 5px gap */}
          <div className="pointer-events-none snap-start shrink-0 w-[5px]"></div>

          {/*scrollable cards */}

          <div
            className="shrink-0 w-[270px] h-[430px] bg-cover bg-center rounded-xl snap-start p-1"
            style={{ backgroundImage: `url(${Scrollimg1})` }}
          >
            <h1 className="font-extrabold text-3xl px-1 pt-1">
              Start looking sharp
            </h1>
          </div>

          <div className="shrink-0 w-[270px] h-[430px] bg-[#2162a1] rounded-xl p-1 snap-start">
            <h1 className="font-extrabold text-3xl px-1 py-[2px] pb-[6px] text-white leading-8">
              Shop deals ending soon
            </h1>
            <div className="grid grid-cols-2 gap-2 pb-2 px-1">
              <div className="relative p-1 rounded-md h-[170px] bg-white">
                <img
                  src={Card2img1}
                  className="h-[150px] w-[140px] rounded-md border-4 border-white  bg-white object-contain object-center"
                />
                <div className="h-[2px] absolute bottom-7">
                  <button className=" p-1 bg-[#CC0C39] text-white font-bold text-xs rounded-md">
                    29% off
                  </button>
                </div>
              </div>

              <div className="relative p-1 rounded-md h-[170px] bg-white">
                <img
                  src={Card2img2}
                  className="h-[150px] w-[140px] rounded-md border-4 border-white  bg-white object-contain object-center"
                />
                <div className="h-[2px] absolute bottom-7">
                  <button className=" p-1 bg-[#CC0C39] text-white font-bold text-xs rounded-md">
                    11% off
                  </button>
                </div>
              </div>

              <div className="relative p-1 rounded-md h-[170px] bg-white">
                <img
                  src={Card2img3}
                  className="h-[150px] w-[140px] rounded-md border-4 border-white  bg-white object-contain object-center"
                />
                <div className="h-[2px] absolute bottom-7">
                  <button className=" p-1 bg-[#CC0C39] text-white font-bold text-xs rounded-md">
                    50% off
                  </button>
                </div>
              </div>

              <div className="relative p-1 rounded-md h-[170px] bg-white">
                <img
                  src={Card2img4}
                  className="h-[150px] w-[140px] rounded-md border-4 border-white  bg-white object-contain object-center"
                />
                <div className="h-[2px] absolute bottom-7">
                  <button className=" p-1 bg-[#CC0C39] text-white font-bold text-xs rounded-md">
                    21% off
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="shrink-0 w-[270px] h-[430px] bg-sky-300 rounded-xl p-1 snap-start">
            <h1 className="font-extrabold text-3xl px-1 py-[2px] pb-[6px] text-black leading-8">
              Shop popular deals
            </h1>
            <div className="grid grid-cols-2 gap-2 pb-3 px-1">
              <div className="relative p-1 rounded-md h-[170px] bg-white">
                <img
                  src={Card3img1}
                  className="h-[150px] w-[140px] rounded-md border-4 border-white  bg-white object-contain object-center"
                />
                <div className="h-[2px] absolute bottom-7">
                  <button className=" p-1 bg-[#CC0C39] text-white font-bold text-xs rounded-md">
                    20% off
                  </button>
                </div>
              </div>

              <div className="relative p-1 rounded-md h-[170px] bg-white">
                <img
                  src={Card3img2}
                  className="h-[150px] w-[140px] rounded-md border-4 border-white  bg-white object-contain object-center"
                />
                <div className="h-[2px] absolute bottom-7">
                  <button className=" p-1 bg-[#CC0C39] text-white font-bold text-xs rounded-md">
                    10% off
                  </button>
                </div>
              </div>

              <div className="relative p-1 rounded-md h-[170px] bg-white">
                <img
                  src={Card3img3}
                  className="h-[150px] w-[140px] rounded-md border-4 border-white  bg-white object-contain object-center"
                />
                <div className="h-[2px] absolute bottom-7">
                  <button className=" p-1 bg-[#CC0C39] text-white font-bold text-xs rounded-md">
                    40% off
                  </button>
                </div>
              </div>

              <div className="relative p-1 rounded-md h-[170px] bg-white">
                <img
                  src={Card3img4}
                  className="h-[150px] w-[140px] rounded-md border-4 border-white  bg-white object-contain object-center"
                />
                <div className="h-[2px] absolute bottom-7">
                  <button className=" p-1 bg-[#CC0C39] text-white font-bold text-xs rounded-md">
                    15% off
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            className="shrink-0 w-[270px] h-[430px] bg-cover bg-center rounded-xl snap-start p-1"
            style={{ backgroundImage: `url(${scroll4img})` }}
          >
            <h1 className="font-extrabold text-3xl px-1 pt-1 text-white">
              Father's day gifts he'll love
            </h1>
          </div>

          <div
            className="shrink-0 w-[270px] h-[430px] bg-cover bg-center rounded-xl snap-start p-1"
            style={{ backgroundImage: `url(${Scroll5img})` }}
          >
            <h1 className="font-extrabold text-3xl px-1 pt-1 ">
              Kitchen must- haves
            </h1>
          </div>

          <div
            className="shrink-0 w-[270px] h-[430px] bg-cover bg-center rounded-xl snap-start p-1"
            style={{ backgroundImage: `url(${Scroll6img})` }}
          >
            <h1 className="font-extrabold text-3xl px-1 pt-1 ">
              All things beauty
            </h1>
          </div>

          <div
            className="shrink-0 w-[270px] h-[430px] bg-cover bg-center rounded-xl snap-start p-1"
            style={{ backgroundImage: `url(${Scroll7img})` }}
          >
            <h1 className="font-extrabold text-3xl px-1 pt-1 ">
              Shop for gamer Dad
            </h1>
          </div>

          <div
            className="shrink-0 w-[270px] h-[430px] bg-cover bg-center rounded-xl snap-start p-1"
            style={{ backgroundImage: `url(${Scroll8img})` }}
          >
            <h1 className="font-extrabold text-3xl px-1 pt-1 ">
              Toys for little ones
            </h1>
          </div>

          <div
            className="shrink-0 w-[270px] h-[430px] bg-cover bg-center rounded-xl snap-start p-1"
            style={{ backgroundImage: `url(${Scroll9img})` }}
          >
            <h1 className="font-extrabold text-3xl px-1 pt-1 ">
              Grilling gifts for Dad
            </h1>
          </div>

          <div
            className="shrink-0 w-[270px] h-[430px] bg-cover bg-center rounded-xl snap-start p-1"
            style={{ backgroundImage: `url(${Scroll10img})` }}
          >
            <h1 className="font-extrabold text-3xl px-1 pt-1 text-white ">
              Gifts for Dad under $25
            </h1>
          </div>
          {/* spacing element to create space for ending of 5px*/}
          <div className="pointer-events-none snap-start shrink-0 w-[5px]"></div>
        </div>
      </div>
      
    </div>
  );
}
