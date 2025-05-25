import React from "react";
import { useRef } from "react";
import slider6img1 from "../Images/slider6-img1.jpg";
import slider6img2 from "../Images/slider6-img2.jpg";
import slider6img3 from "../Images/slider6-img3.jpg";
import slider6img4 from "../Images/slider6-img4.jpg";
import slider6img5 from "../Images/slider6-img5.jpg";
import slider6img6 from "../Images/slider6-img6.jpg";
import slider6img7 from "../Images/slider6-img7.jpg";
import slider6img8 from "../Images/slider6-img8.jpg";
import slider6img9 from "../Images/slider6-img9.jpg";
import slider6img10 from "../Images/slider6-img10.jpg";
import slider6img11 from "../Images/slider6-img11.jpg";
import slider6img12 from "../Images/slider6-img12.jpg";
import slider6img13 from "../Images/slider6-img13.jpg";
import slider6img14 from "../Images/slider6-img14.jpg";
import slider6img15 from "../Images/slider6-img15.jpg";
import slider6img16 from "../Images/slider6-img16.jpg";
import slider6img17 from "../Images/slider6-img17.jpg";
import slider6img18 from "../Images/slider6-img18.jpg";
import slider6img19 from "../Images/slider6-img19.jpg";

function Scrollsection6() {
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
            Best Sellers in Clothing, Shoes & Jewelry
          </h1>
        </div>

        <div
          ref={sliderRef}
          className="flex py-3 px-4 gap-2 overflow-x-auto  scroll-smooth"
        >
          {[
            slider6img1,
            slider6img2,
            slider6img3,
            slider6img4,
            slider6img5,
            slider6img6,
            slider6img7,
            slider6img8,
            slider6img9,
            slider6img10,
            slider6img11,
            slider6img12,
            slider6img13,
            slider6img14,
            slider6img15,
            slider6img16,
            slider6img17,
            slider6img18,
            slider6img19,
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

export default React.memo(Scrollsection6);
