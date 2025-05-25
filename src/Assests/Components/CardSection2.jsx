import React from "react";
import { useRef } from "react";
import Womenwatch from "../Images/WomenWatches_2x._SY232_CB564394432_.jpg";
import Menwatch from "../Images/MenWatches_2x._SY232_CB564394432_.jpg";
import Girlwatch from "../Images/GirlWatches_2x._SY232_CB564394432_.jpg";
import Boywatch from "../Images/BoyWatches_2x._SY232_CB564394432_.jpg";
import Playgroundset1 from "../Images/Playgroundset-1.jpg";
import Playgroundset2 from "../Images/Playgroundset-2.jpg";
import Playgroundset3 from "../Images/Playgroundset-3.jpg";
import Playgroundset4 from "../Images/Playgroundset-4.jpg";
import Travelset1 from "../Images/Travelset-1.jpg";
import Travelset2 from "../Images/Travelset-2.jpg";
import Travelset3 from "../Images/Travelset-3.jpg";
import Travelset4 from "../Images/Travelset-4.jpg";
import Laptop from "../Images/Laptop.jpg";
import Pc from "../Images/PC.jpg";
import Harddrive from "../Images/Harddrive.jpg";
import Monitor from "../Images/Monitor.jpg";
import Apparel from "../Images/Apparel.jpg";
import Hat from "../Images/Hat.jpg";
import Actionfigure from "../Images/Action-figure2.jpg";
import Mugs from "../Images/Mug.jpg";
import Desktop from "../Images/Desktop.jpg";
import Laptop2 from "../Images/31hqkoNqvTL._SR420,420_.jpg";
import Harddrive2 from "../Images/Harddrive2.jpg";
import Pcaccesory from "../Images/Pc-accessories.jpg";
import Books from "../Images/Books.jpg";
import Fashion from "../Images/Fashion.jpg";
import Cpu from "../Images/41hls0IW3XL._SR140,140_.jpg";
import Beauty from "../Images/Beauty.jpg";
import Kitchen from "../Images/Fuji_BTF_Quad_Cards_2x_Kitchen._SY232_CB558654384_.jpg";
import Homedecor from "../Images/Fuji_BTF_Quad_Cards_2x_Home_decor._SY232_CB558654384_.jpg";
import Dining from "../Images/Fuji_BTF_Quad_Cards_2x_Dining._SY232_CB558654384_.jpg";
import Smarthome from "../Images/Fuji_BTF_Quad_Cards_2x_Smart_home._SY232_CB558654384_.jpg";
import Scrollsection5 from "./Scrollsection5";
import Scrollsection6 from "./Scrollsection6";
import Scrollsection7 from "./Scrollsection7";

 function CardSection2() {
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
    <div className="bg-[#dfe7f3] ">
      {/* Cards Section3*/}

      <div className=" grid lg:grid-cols-4 grid-cols-2 gap-5 px-4">
        <div className="bg-white px-5 py-2 pb-6 cursor-pointer mt-5">
          <h1 className="text-[#0F1111] text-[21px] font-bold leading-6 mt-2">
            Most-loved watches
          </h1>
          <div className="grid grid-cols-2 gap-5 gap-y-8 mt-4">
            <div>
              <img
                src={Womenwatch}
                className="h-[120px] scale-110 object-cover"
              />
              <h6 className="text-xs font-medium mt-2">Women</h6>
            </div>
            <div>
              <img
                src={Menwatch}
                className="h-[120px] scale-110 object-cover"
              />
              <h6 className="text-xs font-medium mt-2">Men</h6>
            </div>
            <div>
              <img
                src={Girlwatch}
                className="h-[120px] scale-110 object-cover"
              />
              <h6 className="text-xs font-medium mt-2">Girls</h6>
            </div>
            <div>
              <img
                src={Boywatch}
                className="h-[120px] scale-110 object-cover"
              />
              <h6 className="text-xs font-medium mt-2">Boys</h6>
            </div>

            <a className="text-xs cursor-pointer font-medium whitespace-nowrap text-blue-700 hover:text-blue-950 mt-2 ">
              Discover more
            </a>
          </div>
        </div>

        <div className="bg-white px-5 py-2 pb-6 cursor-pointer mt-5">
          <h1 className="text-[#0F1111] text-[21px] font-bold leading-6 mt-2">
            Have more fun with family
          </h1>
          <div className="grid grid-cols-2 gap-6 gap-y-6 mt-4">
            <div>
              <img
                src={Playgroundset1}
                className="h-[110px] scale-110 object-cover"
              />
              <h6 className="text-xs font-medium mt-2">Outdoor play sets</h6>
            </div>
            <div>
              <img
                src={Playgroundset2}
                className="h-[110px] scale-110 object-cover"
              />
              <h6 className="text-xs font-medium mt-2">Learning toys</h6>
            </div>
            <div>
              <img
                src={Playgroundset3}
                className="h-[110px] scale-110 object-cover"
              />
              <h6 className="text-xs font-medium mt-2">Action figures</h6>
            </div>
            <div>
              <img
                src={Playgroundset4}
                className="h-[110px] scale-110 object-cover"
              />
              <h6 className="text-xs font-medium mt-2">Pretend play toys</h6>
            </div>

            <a className="text-xs cursor-pointer font-medium whitespace-nowrap text-blue-700 hover:text-blue-950 mt-5">
              See more
            </a>
          </div>
        </div>

        <div className="bg-white px-5 py-2 pb-6 cursor-pointer mt-5 ">
          <h1 className="text-[#0F1111] text-[21px] font-bold leading-6 mt-2">
            Most-loved travel essentials
          </h1>
          <div className="grid grid-cols-2 gap-5 gap-y-6 mt-3">
            <div>
              <img
                src={Travelset1}
                className="h-[110px] scale-110 object-cover"
              />
              <h6 className="text-xs font-medium mt-2">Bagpacks</h6>
            </div>
            <div>
              <img
                src={Travelset2}
                className="h-[110px] scale-110 object-cover"
              />
              <h6 className="text-xs font-medium mt-2">suitcases</h6>
            </div>
            <div>
              <img
                src={Travelset3}
                className="h-[110px] scale-110 object-cover"
              />
              <h6 className="text-xs font-medium mt-2">Accessories</h6>
            </div>
            <div>
              <img
                src={Travelset4}
                className="h-[110px] scale-110 object-cover"
              />
              <h6 className="text-xs font-medium mt-2">Handbags</h6>
            </div>

            <a className="text-xs cursor-pointer font-medium whitespace-nowrap text-blue-700 hover:text-blue-950 mt-6">
              Discover more
            </a>
          </div>
        </div>

        <div className="bg-white px-5 py-2 pb-6 cursor-pointer mt-5">
          <h1 className="text-[#0F1111] text-[21px] font-bold leading-6 mt-2">
            Level up your PC here
          </h1>
          <div className="grid grid-cols-2 gap-5 gap-y-6 mt-5">
            <div>
              <img src={Laptop} className="h-[120px] scale-110 object-cover" />
              <h6 className="text-xs font-medium mt-2">Laptops</h6>
            </div>
            <div>
              <img src={Pc} className="h-[120px] scale-110 object-cover" />
              <h6 className="text-xs font-medium mt-2">PC's</h6>
            </div>
            <div>
              <img
                src={Harddrive}
                className="h-[120px] scale-110 object-cover"
              />
              <h6 className="text-xs font-medium mt-2">Hard Drives</h6>
            </div>
            <div>
              <img src={Monitor} className="h-[120px] scale-110 object-cover" />
              <h6 className="text-xs font-medium mt-2">Monitors</h6>
            </div>

            <a className="text-xs cursor-pointer font-medium whitespace-nowrap text-blue-700 hover:text-blue-950 mt-5">
              See more
            </a>
          </div>
        </div>
      </div>

      {/* Scrollable image Section5 */}

       <Scrollsection5/>

      {/* Scrollable image Section6 */}

      <Scrollsection6/>

      {/* Cards Section4*/}

      <div className=" grid lg:grid-cols-4 grid-cols-2 gap-5 px-4">
        <div className="bg-white px-5 py-2 pb-6 cursor-pointer mt-5">
          <h1 className="text-[#0F1111] text-[21px] font-bold leading-6 mt-2">
            Gaming merchandise
          </h1>
          <div className="grid grid-cols-2 gap-5 gap-y-8 mt-4">
            <div>
              <img src={Apparel} className="h-[120px] scale-110 object-cover" />
              <h6 className="text-xs font-medium mt-2">Apparel</h6>
            </div>
            <div>
              <img src={Hat} className="h-[120px] scale-110 object-cover" />
              <h6 className="text-xs font-medium mt-2">Hats</h6>
            </div>
            <div>
              <img
                src={Actionfigure}
                className="h-[120px] scale-110 object-cover"
              />
              <h6 className="text-xs font-medium mt-2">Action figure</h6>
            </div>
            <div>
              <img src={Mugs} className="h-[120px] scale-110 object-cover" />
              <h6 className="text-xs font-medium mt-2">Mugs</h6>
            </div>

            <a className="text-xs cursor-pointer font-medium whitespace-nowrap text-blue-700 hover:text-blue-950 mt-2 ">
              See more
            </a>
          </div>
        </div>

        <div className="bg-white px-5 py-2 pb-6 cursor-pointer mt-5">
          <h1 className="text-[#0F1111] text-[21px] font-bold leading-6 mt-2">
            Score the top PCs & Accessories
          </h1>
          <div className="grid grid-cols-2 gap-6 gap-y-6 mt-4">
            <div>
              <img src={Desktop} className="h-[110px] scale-110 object-cover" />
              <h6 className="text-xs font-medium mt-2">Desktops</h6>
            </div>
            <div>
              <img src={Laptop2} className="h-[110px] scale-110 object-cover" />
              <h6 className="text-xs font-medium mt-2">Laptops</h6>
            </div>
            <div>
              <img
                src={Harddrive2}
                className="h-[110px] scale-110 object-cover"
              />
              <h6 className="text-xs font-medium mt-2">Hard drives</h6>
            </div>
            <div>
              <img
                src={Pcaccesory}
                className="h-[110px] scale-110 object-cover"
              />
              <h6 className="text-xs font-medium mt-2">Pc accessories</h6>
            </div>

            <a className="text-xs cursor-pointer font-medium whitespace-nowrap text-blue-700 hover:text-blue-950 mt-5">
              See more
            </a>
          </div>
        </div>

        <div className="bg-white px-5 py-2 pb-6 cursor-pointer mt-5 ">
          <h1 className="text-[#0F1111] text-[21px] font-bold leading-6 mt-2">
            Deals on top categories
          </h1>
          <div className="grid grid-cols-2 gap-5 gap-y-6 mt-5">
            <div>
              <img src={Books} className="h-[115px] scale-110 object-cover" />
              <h6 className="text-xs font-medium mt-2">Books</h6>
            </div>
            <div>
              <img src={Fashion} className="h-[115px] scale-110 object-cover" />
              <h6 className="text-xs font-medium mt-2">Fashion</h6>
            </div>
            <div>
              <img src={Cpu} className="h-[115px] scale-110 object-cover" />
              <h6 className="text-xs font-medium mt-2">Pc</h6>
            </div>
            <div>
              <img src={Beauty} className="h-[115px] scale-110 object-cover" />
              <h6 className="text-xs font-medium mt-2">Beauty</h6>
            </div>

            <a className="text-xs cursor-pointer font-medium whitespace-nowrap text-blue-700 hover:text-blue-950 mt-8">
              Explore all beauty
            </a>
          </div>
        </div>

        <div className="bg-white px-5 py-2 pb-6 cursor-pointer mt-5">
          <h1 className="text-[#0F1111] text-[21px] font-bold leading-6 mt-2">
            Finds for Home
          </h1>
          <div className="grid grid-cols-2 gap-5 gap-y-6 mt-5">
            <div>
              <img src={Kitchen} className="h-[120px] scale-110 object-cover" />
              <h6 className="text-xs font-medium mt-2">Kitchen</h6>
            </div>
            <div>
              <img
                src={Homedecor}
                className="h-[120px] scale-110 object-cover"
              />
              <h6 className="text-xs font-medium mt-2">Home Decor</h6>
            </div>
            <div>
              <img src={Dining} className="h-[120px] scale-110 object-cover" />
              <h6 className="text-xs font-medium mt-2">Dining</h6>
            </div>
            <div>
              <img
                src={Smarthome}
                className="h-[120px] scale-110 object-cover"
              />
              <h6 className="text-xs font-medium mt-2">Smart home</h6>
            </div>

            <a className="text-xs cursor-pointer font-medium whitespace-nowrap text-blue-700 hover:text-blue-950 mt-5">
              See more
            </a>
          </div>
        </div>
      </div>

      {/* Scrollable image Section7 */}

     <Scrollsection7/>

     {/* Cards Section5*/}
      <div className="bg-white pt-9 pb-6 mt-6">
        <div className="border-y border-r border-[#d4d4d4] rounded-md pt-3">
          <h5 className="text-[#0F1111] text-[18px] font-bold px-8">
            Your recently viewed items and featured recommendations
          </h5>
          <div className="flex justify-between px-8 py-8">
            <h7 className="text-[#0F1111] text-sm font-medium">
              After viewing product detail pages, look here to find an easy way
              to navigate back to pages you are interested in.
            </h7>
            <span className="text-blue-800 hover:text-blue-950 hover:underline text-xs font-medium cursor-pointer">
              View or edit <br></br> your browsing <br></br> history
            </span>
          </div>
        </div>
      </div>

    </div>
    
  );
}

export default React.memo(CardSection2);
