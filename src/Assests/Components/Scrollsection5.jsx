import React from "react";
import { useRef } from "react";
import slider5img1 from "../Images/slider5-img1.jpg";
import slider5img2 from "../Images/slider5-img2.jpg";
import slider5img3 from "../Images/slider5-img3.jpg";
import slider5img4 from "../Images/slider5-img4.jpg";
import slider5img5 from "../Images/slider5-img5.jpg";
import slider5img6 from "../Images/slider5-img6.jpg";
import slider5img7 from "../Images/slider5-img7.jpg";
import slider5img8 from "../Images/slider5-img8.jpg";
import slider5img9 from "../Images/slider5-img9.jpg";
import slider5img10 from "../Images/slider5-img10.jpg";
import slider5img11 from "../Images/slider5-img11.jpg";
import slider5img12 from "../Images/slider5-img12.jpg";
import slider5img13 from "../Images/slider5-img13.jpg";
import slider5img14 from "../Images/slider5-img14.jpg";
import slider5img15 from "../Images/slider5-img15.jpg";
import slider5img16 from "../Images/slider5-img16.jpg";
import slider5img17 from "../Images/slider5-img17.jpg";
import slider5img18 from "../Images/slider5-img18.jpg";
import slider5img19 from "../Images/slider5-img19.jpg";
import slider5img20 from "../Images/slider5-img20.jpg";
import slider5img21 from "../Images/slider5-img21.jpg";
import slider5img22 from "../Images/slider5-img22.jpg";
import slider5img23 from "../Images/slider5-img23.jpg";
import slider5img24 from "../Images/slider5-img24.jpg";
import slider5img25 from "../Images/slider5-img25.jpg";
import slider5img26 from "../Images/slider5-img26.jpg";
import slider5img27 from "../Images/slider5-img27.jpg";

function Scrollsection5() {
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
    <div>
      <div className=" relative mx-4 py-[10px]  bg-white overflow-x-auto mt-5 ">
        <div className="flex items-center">
          <h1 className="text-[#0F1111] text-[21px] font-bold leading-6 mt-2 px-6">
            Best Sellers in Sports & Outdoors
          </h1>
        </div>

        <div
          ref={sliderRef}
          className="flex py-3 px-4 gap-2 overflow-x-auto  scroll-smooth"
        >
          {[
            slider5img1,
            slider5img2,
            slider5img3,
            slider5img4,
            slider5img5,
            slider5img6,
            slider5img7,
            slider5img8,
            slider5img9,
            slider5img10,
            slider5img11,
            slider5img12,
            slider5img13,
            slider5img14,
            slider5img15,
            slider5img16,
            slider5img17,
            slider5img18,
            slider5img19,
            slider5img20,
            slider5img21,
            slider5img22,
            slider5img23,
            slider5img24,
            slider5img25,
            slider5img26,
            slider5img27,
          ].map((img, index) => (
            <img key={index} src={img} className="h-[200px] flex-shrink-0" />
          ))}
        </div>

        <div className="absolute top-[45%] flex justify-between w-full ">
          <button
            className="bg-white py-8 px-5 pr-3 rounded-sm text-2xl"
            onClick={() => scroll("left")}
          >
            <i class="fa-solid fa-chevron-left"></i>
          </button>
          <button
            className="bg-white py-8 px-5 pl-3 rounded-sm text-2xl"
            onClick={() => scroll("right")}
          >
            {" "}
            <i class="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Scrollsection5);
