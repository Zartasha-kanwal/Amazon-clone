import React from "react";
import { useRef } from "react";
import slider3img1 from "../Images/slider3-img1.jpg";
import slider3img2 from "../Images/slider3-img2.jpg";
import slider3img3 from "../Images/slider3-img3.jpg";
import slider3img4 from "../Images/slider3-img4.jpg";
import slider3img5 from "../Images/slider3-img5.jpg";
import slider3img6 from "../Images/slider3-img6.jpg";
import slider3img7 from "../Images/slider3-img7.jpg";
import slider3img8 from "../Images/slider3-img8.jpg";
import slider3img9 from "../Images/slider3-img9.jpg";
import slider3img10 from "../Images/slider3-img10.jpg";
import slider3img11 from "../Images/slider3-img11.jpg";
import slider3img12 from "../Images/slider3-img12.jpg";
import slider3img13 from "../Images/slider3-img13.jpg";
import slider3img14 from "../Images/slider3-img14.jpg";
import slider3img15 from "../Images/slider3-img15.jpg";
import slider3img16 from "../Images/slider3-img16.jpg";
import slider3img17 from "../Images/slider3-img17.jpg";
import slider3img18 from "../Images/slider3-img18.jpg";
import slider3img19 from "../Images/slider3-img19.jpg";
import slider3img20 from "../Images/slider3-img20.jpg";
import slider3img21 from "../Images/slider3-img21.jpg";
import slider3img22 from "../Images/slider3-img22.jpg";
import slider3img23 from "../Images/slider3-img23.jpg";
import slider3img24 from "../Images/slider3-img24.jpg";
import slider3img25 from "../Images/slider3-img25.jpg";
import slider3img26 from "../Images/slider3-img26.jpg";
import slider3img27 from "../Images/slider3-img27.jpg";

function Scrollsection3() {
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
            Popular products in Wireless internationally
          </h1>
        </div>

        <div
          ref={sliderRef}
          className="flex py-3 px-4 gap-2 overflow-x-auto  scroll-smooth"
        >
          {[
            slider3img1,
            slider3img2,
            slider3img3,
            slider3img4,
            slider3img5,
            slider3img6,
            slider3img7,
            slider3img8,
            slider3img9,
            slider3img10,
            slider3img11,
            slider3img12,
            slider3img13,
            slider3img14,
            slider3img15,
            slider3img16,
            slider3img17,
            slider3img18,
            slider3img19,
            slider3img20,
            slider3img21,
            slider3img22,
            slider3img23,
            slider3img24,
            slider3img25,
            slider3img26,
            slider3img27,
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

export default React.memo(Scrollsection3);
