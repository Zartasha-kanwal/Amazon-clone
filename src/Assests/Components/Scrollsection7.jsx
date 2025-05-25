import React from "react";
import { useRef } from "react";
import slider7img1 from "../Images/slider7-img1.jpg";
import slider7img2 from "../Images/slider7-img2.jpg";
import slider7img3 from "../Images/slider7-img3.jpg";
import slider7img4 from "../Images/slider7-img4.jpg";
import slider7img6 from "../Images/slider7-img6.jpg";
import slider7img7 from "../Images/slider7-img7.jpg";
import slider7img8 from "../Images/slider7-img8.jpg";
import slider7img9 from "../Images/slider7-img9.jpg";
import slider7img10 from "../Images/slider7-img10.jpg";
import slider7img11 from "../Images/slider7-img11.jpg";
import slider7img12 from "../Images/slider7-img12.jpg";
import slider7img13 from "../Images/slider7-img13.jpg";
import slider7img14 from "../Images/slider7-img14.jpg";
import slider7img15 from "../Images/slider7-img15.jpg";
import slider7img16 from "../Images/slider7-img16.jpg";
import slider7img17 from "../Images/slider7-img17.jpg";
import slider7img18 from "../Images/slider7-img18.jpg";
import slider7img19 from "../Images/slider7-img19.jpg";
import slider7img20 from "../Images/slider7-img20.jpg";
import slider7img21 from "../Images/slider7-img21.jpg";
import slider7img22 from "../Images/slider7-img22.jpg";
import slider7img23 from "../Images/slider7-img23.jpg";
import slider7img24 from "../Images/slider7-img24.jpg";
import slider7img25 from "../Images/slider7-img25.jpg";
import slider7img27 from "../Images/slider7-img27.jpg";

function Scrollsection7() {
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
            Best Sellers in Books
          </h1>
        </div>

        <div
          ref={sliderRef}
          className="flex py-3 px-4 gap-4 overflow-x-auto  scroll-smooth"
        >
          {[
            slider7img1,
            slider7img2,
            slider7img3,
            slider7img4,
            slider7img6,
            slider7img7,
            slider7img8,
            slider7img9,
            slider7img10,
            slider7img11,
            slider7img12,
            slider7img13,
            slider7img14,
            slider7img15,
            slider7img16,
            slider7img17,
            slider7img18,
            slider7img19,
            slider7img20,
            slider7img21,
            slider7img22,
            slider7img23,
            slider7img24,
            slider7img25,
            slider7img27,
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

export default React.memo(Scrollsection7);
