import React from "react";
import { useRef } from "react";
import Cleaningtools from "../Images/CleaningTool_2x._SY232_CB563137408_.jpg";
import Homestorage from "../Images/HomeStorage_2x._SY232_CB563137408_.jpg";
import Homedecor from "../Images/HomeDecor_2x._SY232_CB563137408_.jpg";
import Bedding from "../Images/Bedding_2x._SY232_CB563137408_.jpg";
import Jeans from "../Images/DQC_APR_TBYB_W_BOTTOMS_2x._SY232_CB624172947_.jpg";
import Tops from "../Images/DQC_APR_TBYB_W_TOPS_2x._SY232_CB623353881_.jpg";
import Dresses from "../Images/DQC_APR_TBYB_W_DRESSES_2x._SY232_CB623353881_.jpg";
import Shoes from "../Images/DQC_APR_TBYB_W_SHOES_2x._SY232_CB624172947_.jpg";
import Gaming from "../Images/Fuji_Gaming_store_Dashboard_card_2x_EN._SY608_CB564799420_.jpg";
import Cooker from "../Images/313wAT6Iy2L._SY320_.jpg";
import Coffee from "../Images/21W7-lndINL._SY150_.jpg";
import Pots from "../Images/21B-NkA9p-L._SY150_.jpg";
import kettle from "../Images/217GQ1a2QzL._SY150_.jpg";
import Headset from "../Images/Fuji_Quad_Headset_2x._SY232_CB667159060_.jpg";
import Keyboard from "../Images/Fuji_Quad_Keyboard_2x._SY232_CB667159063_.jpg";
import mouse from "../Images/Fuji_Quad_Mouse_2x._SY232_CB667159063_.jpg";
import Chair from "../Images/Fuji_Quad_Chair_2x._SY232_CB667159060_.jpg";
import Homearrival from "../Images/Home_Flip_Summer_2024_315_HP_NewArrivals_QuadCard_D_01_2x._SY232_CB555960040_.jpg";
import Homearrival2 from "../Images/Home_Flip_Summer_2024_316_HP_NewArrivals_QuadCard_D_02_2x._SY232_CB555960040_.jpg";
import Homearrival3 from "../Images/Home_Flip_Summer_2024_317_HP_NewArrivals_QuadCard_D_03_2x._SY232_CB555960040_.jpg";
import Homearrival4 from "../Images/Home_Flip_Summer_2024_318_HP_NewArrivals_QuadCard_D_04_2x._SY232_CB555960040_.jpg";
import GiftforDad from "../Images/Fuji_SingleImageCard_FathersDay25_2x._SY608_CB795634726_.jpg";
import Refreshroom from "../Images/DesktopQuadCat_372x232_LP-HP_B08MYX5Q2W_01.23._SY232_CB619238939_.jpg";
import Refreshroom1 from "../Images/DesktopQuadCat_372x232_health-beauty_B07662GN57_01.23._SY232_CB619238939_.jpg";
import Refreshroom2 from "../Images/DesktopQuadCat_372x232_home_B08RCCP3HV_01.23._SY232_CB619238939_.jpg";
import Refreshroom3 from "../Images/DesktopQuadCat_372x232_kitchen_B0126LMDFK_01.23._SY232_CB619238939_.jpg";
import Dollhouse from "../Images/Dollhouse.jpg";
import Dollhouse2 from "../Images/Dollhouse2.jpg";
import Dollhouse3 from "../Images/Dollhouse3.jpg";
import Dollhouse4 from "../Images/Dollhouse4.jpg";
import Smartphone from "../Images/Smartphone_2x._SY232_CB566164844_.jpg";
import Watches from "../Images/Watches_2x._SY232_CB566164844_.jpg";
import Tablets from "../Images/Tablet_2x._SY232_CB566164844_.jpg";
import Headphones from "../Images/Headphone_2x._SY232_CB566164844_.jpg";
import Clothing from "../Images/Fuji_Defect_Reduction_2x_Clothing._SY232_CB549022351_.jpg";
import Tracker from "../Images/Fuji_Defect_Reduction_2x_Trackers._SY232_CB549022351_.jpg";
import Equipment from "../Images/Fuji_Defect_Reduction_2x_Equipment._SY232_CB549022351_.jpg";
import Deal from "../Images/Fuji_Defect_Reduction_2x_Deals_Fitness._SY232_CB549022351_.jpg";
import Makeup from "../Images/Makeup.jpg";
import Brushes from "../Images/Brushes.jpg";
import Sponges from "../Images/Sponges.jpg";
import Mirror from "../Images/Mirror.jpg";
import Scrollsection1 from "./Scrollsection1";
import Scrollsection2 from "./Scrollsection2";
import Scrollsection3 from "./Scrollsection3";
import Scrollsection4 from "./Scrollsection4";

 function CardSection() {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    const container = sliderRef.current;
    const scrollAmount = 700; 
    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="bg-[#dfe7f3] ">
        {/* Cards Section*/}
        <div className=" grid lg:grid-cols-4 grid-cols-2 gap-5 px-4 lg:-translate-y-[16rem] -translate-y-[4.5rem] ">
          <div className="bg-white px-5 py-2 pb-6 cursor-pointer ">
            <h1 className="text-[#0F1111] text-[21px] font-bold leading-6 mt-2">
              Gaming accessories
            </h1>
            <div className="grid grid-cols-2 gap-2 gap-y-8 mt-3">
              <div>
                <img src={Headset} className="h-[105px]" />
                <h6 className="text-xs font-medium">Headsets</h6>
              </div>
              <div>
                <img src={Keyboard} className="h-[105px]" />
                <h6 className="text-xs font-medium">Keyboards</h6>
              </div>
              <div>
                <img src={mouse} className="h-[105px]" />
                <h6 className="text-xs font-medium">Computer mice</h6>
              </div>
              <div>
                <img src={Chair} className="h-[105px]" />
                <h6 className="text-xs font-medium">Chairs</h6>
              </div>

              <a className="text-xs cursor-pointer font-medium whitespace-nowrap text-blue-700 hover:text-blue-950 mt-2">
                See more
              </a>
            </div>
          </div>

          <div className="bg-white px-5 py-2 cursor-pointer ">
            <h1 className="text-[#0F1111] text-[21px] font-bold mt-2 ">
              Get your game on
            </h1>
            <div className="mt-2 overflow-hidden">
              <img
                src={Gaming}
                className="h-[300px] mb-3 scale-110 object-cover"
              />

              <a className="text-xs cursor-pointer font-medium whitespace-nowrap text-blue-700 hover:text-blue-950 ">
                Shop gaming
              </a>
            </div>
          </div>

          <div className="bg-white px-5 py-2 pb-6 cursor-pointer ">
            <h1 className="text-[#0F1111] text-[21px] font-bold leading-6 mt-2">
              Shop for your home essentials
            </h1>
            <div className="grid grid-cols-2 gap-2 gap-y-8 mt-2">
              <div>
                <img src={Cleaningtools} className="h-[100px]" />
                <h6 className="text-xs font-medium">Cleaning Tools</h6>
              </div>
              <div>
                <img src={Homestorage} className="h-[100px]" />
                <h6 className="text-xs font-medium">Home storage</h6>
              </div>
              <div>
                <img src={Homedecor} className="h-[100px]" />
                <h6 className="text-xs font-medium">Home Decor</h6>
              </div>
              <div>
                <img src={Bedding} className="h-[100px]" />
                <h6 className="text-xs font-medium">Bedding</h6>
              </div>

              <a className="text-xs cursor-pointer font-medium whitespace-nowrap text-blue-700 hover:text-blue-950">
                Discover more in Home
              </a>
            </div>
          </div>

          <div className="bg-white px-5 py-2 cursor-pointer ">
            <h1 className="text-[#0F1111] text-[21px] font-bold mt-2">
              Shop deals in Fashion
            </h1>
            <div className="grid grid-cols-2 gap-2 gap-y-8 mt-2">
              <div>
                <img src={Jeans} className="h-[110px]" />
                <h6 className="text-xs font-medium">Jeans under $50</h6>
              </div>
              <div>
                <img src={Tops} className="h-[110px]" />
                <h6 className="text-xs font-medium">Tops under $25</h6>
              </div>
              <div>
                <img src={Dresses} className="h-[110px]" />
                <h6 className="text-xs font-medium">Dress under $30</h6>
              </div>
              <div>
                <img src={Shoes} className="h-[110px]" />
                <h6 className="text-xs font-medium">Shoes under $50</h6>
              </div>

              <a className="text-xs cursor-pointer font-medium whitespace-nowrap text-blue-700 hover:text-blue-950 ">
                See all deals
              </a>
            </div>
          </div>

          <div className="bg-white px-5 py-2 cursor-pointer ">
            <h1 className="text-[#0F1111] text-[21px] font-bold mt-2">
              Top categories in Kitchen appliances
            </h1>
            <div className="mt-2">
              <img src={Cooker} className="h-[130px]" />
              <h6 className="text-md ">Cooker</h6>
              <div className="grid grid-cols-3 gap-1 mt-2 mb-5">
                <div>
                  <img src={Coffee} className="h-[70px]" />
                  <h6 className="text-md">Coffee</h6>
                </div>
                <div>
                  <img src={Pots} className="h-[70px]" />
                  <h6 className="text-md ">Pots and...</h6>
                </div>
                <div>
                  <img src={kettle} className="h-[70px]" />
                  <h6 className="text-md">Kettles</h6>
                </div>
              </div>

              <span className="text-xs cursor-pointer font-medium whitespace-nowrap text-blue-700 hover:text-blue-950">
                Explore All products in kitchen
              </span>
            </div>
          </div>

          <div className="bg-white px-5 py-2 pb-6 cursor-pointer ">
            <h1 className="text-[#0F1111] text-[21px] font-bold leading-6 mt-2">
              New home arrivals under $50
            </h1>
            <div className="grid grid-cols-2 gap-2 gap-y-8 mt-2">
              <div className="overflow-hidden">
                <img
                  src={Homearrival}
                  className="h-[90px] scale-110 object-cover"
                />
                <h6 className="text-xs font-medium mt-2">Kitchen & dining</h6>
              </div>
              <div className="overflow-hidden">
                <img
                  src={Homearrival2}
                  className="h-[90px] scale-110 object-cover"
                />
                <h6 className="text-xs font-medium mt-2">Home Improvement</h6>
              </div>
              <div className="overflow-hidden">
                <img
                  src={Homearrival3}
                  className="h-[90px] scale-110 object-cover"
                />
                <h6 className="text-xs font-medium mt-2">Decor</h6>
              </div>
              <div className="overflow-hidden">
                <img
                  src={Homearrival4}
                  className="h-[90px] scale-110 object-cover"
                />
                <h6 className="text-xs font-medium mt-2">Bedding & Bath</h6>
              </div>

              <a className="text-xs cursor-pointer font-medium whitespace-nowrap text-blue-700 hover:text-blue-950 mt-1">
                Shop the latest from home
              </a>
            </div>
          </div>

          <div className="bg-white px-5 py-2 cursor-pointer ">
            <h1 className="text-[#0F1111] text-[21px] font-bold mt-2 ">
              Gifts for Dad under $25
            </h1>
            <div className="mt-2 overflow-hidden">
              <img
                src={GiftforDad}
                className="h-[280px] mb-7 scale-110 object-cover"
              />

              <a className="text-xs cursor-pointer font-medium whitespace-nowrap text-blue-700 hover:text-blue-950 ">
                See all deals
              </a>
            </div>
          </div>

          <div className="bg-white px-5 py-2 pb-6 cursor-pointer ">
            <h1 className="text-[#0F1111] text-[21px] font-bold leading-6 mt-2">
              Refresh your space
            </h1>
            <div className="grid grid-cols-2 gap-2 gap-y-8 mt-2">
              <div className="overflow-hidden">
                <img
                  src={Refreshroom}
                  className="h-[100px] scale-110 object-cover"
                />
                <h6 className="text-xs font-medium mt-2">Dining</h6>
              </div>
              <div className="overflow-hidden">
                <img
                  src={Refreshroom2}
                  className="h-[100px] scale-110 object-cover"
                />
                <h6 className="text-xs font-medium mt-2">Kitchen</h6>
              </div>
              <div className="overflow-hidden">
                <img
                  src={Refreshroom3}
                  className="h-[100px] scale-110 object-cover"
                />
                <h6 className="text-xs font-medium mt-2">Home </h6>
              </div>
              <div className="overflow-hidden">
                <img
                  src={Refreshroom1}
                  className="h-[100px] scale-110 object-cover"
                />
                <h6 className="text-xs font-medium mt-2">Health & beauty</h6>
              </div>

              <a className="text-xs cursor-pointer font-medium whitespace-nowrap text-blue-700 hover:text-blue-950 mt-1">
                See more
              </a>
            </div>
          </div>
        </div>

        {/* Scrollable image Section*/}

        <Scrollsection1/>

        {/* Scrollable image Section2 */}

        <Scrollsection2/>

        {/*Card Section2 */}

        <div className=" grid lg:grid-cols-4 grid-cols-2 gap-5 px-4 mt-5">
          <div className="bg-white px-5 py-2 pb-6 cursor-pointer ">
            <h1 className="text-[#0F1111] text-[21px] font-bold leading-6 mt-3">
              Gift ideas in Dollhouses
            </h1>
            <img src={Dollhouse} className="h-[150px] mx-auto mt-4" />
            <p className="text-xs font-medium mt-1">
              Melissa & Doug Fold and Go Wooden Dollhouse With 2 Dolls and
              Wooden Fur...
            </p>
            <div className="flex gap-2 items-center mt-1">
              <h5 className="text-xl font-medium">
                <sup className="font-normal text-sm">$</sup>54{" "}
                <sup className="font-normal text-sm">99</sup>
              </h5>
              <span className="text-sm text-[gray]">List:</span>{" "}
              <span className="text-[gray] line-through text-sm">$69.99</span>
            </div>
            <div className="grid grid-cols-4 gap-2 mt-3 mb-12">
              <img
                src={Dollhouse}
                className="h-[65px] border-[3px] hover:border-2 border-blue-800 rounded-md p-1"
              />
              <img
                src={Dollhouse2}
                className="h-[65px] border-[1px]  border-black rounded-md p-1"
              />
              <img
                src={Dollhouse3}
                className="h-[65px] w-[70px] border-[1px]  border-black rounded-md p-1"
              />
              <img
                src={Dollhouse4}
                className="h-[65px] border-[1px]  border-black rounded-md p-1"
              />
            </div>

            <div>
              <a className="text-xs cursor-pointer font-medium whitespace-nowrap text-blue-700 hover:text-blue-950 ">
                Show more
              </a>
            </div>
          </div>

          <div className="bg-white px-5 py-2 pb-6 cursor-pointer ">
            <h1 className="text-[#0F1111] text-[21px] font-bold leading-6 mt-2">
              Wireless Tech
            </h1>
            <div className="grid grid-cols-2 gap-5 gap-y-8 mt-3">
              <div>
                <img
                  src={Smartphone}
                  className="h-[105px] scale-110 object-cover"
                />
                <h6 className="text-xs font-medium mt-2">Smart phones</h6>
              </div>
              <div>
                <img
                  src={Watches}
                  className="h-[105px] scale-110 object-cover"
                />
                <h6 className="text-xs font-medium mt-2">Watches</h6>
              </div>
              <div>
                <img
                  src={Headphones}
                  className="h-[105px] scale-110 object-cover"
                />
                <h6 className="text-xs font-medium mt-2">Headphones</h6>
              </div>
              <div>
                <img
                  src={Tablets}
                  className="h-[105px] scale-110 object-cover"
                />
                <h6 className="text-xs font-medium mt-2">Tablets</h6>
              </div>

              <a className="text-xs cursor-pointer font-medium whitespace-nowrap text-blue-700 hover:text-blue-950 mt-9">
                Discover more
              </a>
            </div>
          </div>

          <div className="bg-white px-5 py-2 pb-6 cursor-pointer ">
            <h1 className="text-[#0F1111] text-[21px] font-bold leading-6 mt-2">
              Gear up to get fit
            </h1>
            <div className="grid grid-cols-2 gap-2 gap-y-8 mt-4">
              <div>
                <img
                  src={Clothing}
                  className="h-[110px] scale-110 object-cover"
                />
                <h6 className="text-xs font-medium mt-2">Clothings</h6>
              </div>
              <div>
                <img
                  src={Tracker}
                  className="h-[110px] scale-110 object-cover"
                />
                <h6 className="text-xs font-medium mt-2">Trackers</h6>
              </div>
              <div>
                <img
                  src={Equipment}
                  className="h-[110px] scale-110 object-cover"
                />
                <h6 className="text-xs font-medium mt-2">Equipment</h6>
              </div>
              <div>
                <img src={Deal} className="h-[110px] scale-110 object-cover" />
                <h6 className="text-xs font-medium mt-2">Deals</h6>
              </div>

              <a className="text-xs cursor-pointer font-medium whitespace-nowrap text-blue-700 hover:text-blue-950 mt-6">
                Discover more
              </a>
            </div>
          </div>

          <div className="bg-white px-5 py-2 pb-6 cursor-pointer ">
            <h1 className="text-[#0F1111] text-[21px] font-bold leading-6 mt-2">
              Level up your beauty routine
            </h1>
            <div className="grid grid-cols-2 gap-5 gap-y-8 mt-4">
              <div>
                <img
                  src={Makeup}
                  className="h-[110px] scale-110 object-cover"
                />
                <h6 className="text-xs font-medium mt-2">Makeup</h6>
              </div>
              <div>
                <img
                  src={Brushes}
                  className="h-[110px] scale-110 object-cover"
                />
                <h6 className="text-xs font-medium mt-2">Brushes</h6>
              </div>
              <div>
                <img
                  src={Sponges}
                  className="h-[110px] scale-110 object-cover"
                />
                <h6 className="text-xs font-medium mt-2">Sponges</h6>
              </div>
              <div>
                <img
                  src={Mirror}
                  className="h-[110px] scale-110 object-cover"
                />
                <h6 className="text-xs font-medium mt-2">Mirrors</h6>
              </div>

              <a className="text-xs cursor-pointer font-medium whitespace-nowrap text-blue-700 hover:text-blue-950 mt-1">
                See more
              </a>
            </div>
          </div>
        </div>

        {/* Scrollable image Section3 */}
        <Scrollsection3/>

        {/* Scrollable image Section4 */}

        <Scrollsection4/>

      </div>
    </>
  );
}

export default React.memo (CardSection);