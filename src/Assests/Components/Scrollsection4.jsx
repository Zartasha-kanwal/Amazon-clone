import React from "react";
import { useRef } from "react";
import slider4img1 from "../Images/slider4-img1.jpg";
import slider4img2 from "../Images/slider4-img2.jpg";
import slider4img3 from "../Images/slider4-img3.jpg";
import slider4img4 from "../Images/slider4-img4.jpg";
import slider4img5 from "../Images/slider4-img5.jpg";
import slider4img6 from "../Images/slider4-img6.jpg";
import slider4img7 from "../Images/slider4-img7.jpg";
import slider4img8 from "../Images/slider4-img8.jpg";
import slider4img9 from "../Images/slider4-img9.jpg";
import slider4img10 from "../Images/slider4-img10.jpg";
import slider4img11 from "../Images/slider4-img11.jpg";
import slider4img12 from "../Images/slider4-img12.jpg";
import slider4img13 from "../Images/slider4-img13.jpg";
import slider4img14 from "../Images/slider4-img14.jpg";
import slider4img15 from "../Images/slider4-img15.jpg";
import slider4img16 from "../Images/slider4-img16.jpg";
import slider4img17 from "../Images/slider4-img17.jpg";
import slider4img18 from "../Images/slider4-img18.jpg";
import slider4img19 from "../Images/slider4-img19.jpg";
import slider4img20 from "../Images/slider4-img21.jpg";
import slider4img21 from "../Images/slider4-img21.jpg";
import slider4img22 from "../Images/slider4-img22.jpg";
import slider4img23 from "../Images/slider4-img23.jpg";
import slider4img24 from "../Images/slider4-img24.jpg";
import slider4img25 from "../Images/slider4-img25.jpg";
import slider4img26 from "../Images/slider4-img26.jpg";
import slider4img27 from "../Images/slider4-img27.jpg";

function Scrollsection4() {
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
            International top sellers in Kitchen
          </h1>
        </div>

        <div
          ref={sliderRef}
          className="flex py-3 px-4 gap-2 overflow-x-auto  scroll-smooth"
        >
          {[
            slider4img1,
            slider4img2,
            slider4img3,
            slider4img4,
            slider4img5,
            slider4img6,
            slider4img7,
            slider4img8,
            slider4img9,
            slider4img10,
            slider4img11,
            slider4img12,
            slider4img13,
            slider4img14,
            slider4img15,
            slider4img16,
            slider4img17,
            slider4img18,
            slider4img19,
            slider4img20,
            slider4img21,
            slider4img22,
            slider4img23,
            slider4img24,
            slider4img25,
            slider4img26,
            slider4img27,
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

export default React.memo(Scrollsection4);
