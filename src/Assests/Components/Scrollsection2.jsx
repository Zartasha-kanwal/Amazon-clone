import React from "react";
import { useRef } from "react";
import slider2img1 from "../Images/slider2-img1.jpg";
import slider2img2 from "../Images/slider2-img2.jpg";
import slider2img3 from "../Images/slider2-img3.jpg";
import slider2img4 from "../Images/slider2-img4.jpg";
import slider2img5 from "../Images/slider2-img5.jpg";
import slider2img6 from "../Images/slider2-img6.jpg";
import slider2img7 from "../Images/slider2-img7.jpg";
import slider2img8 from "../Images/slider2-img8.jpg";
import slider2img9 from "../Images/slider2-img9.jpg";
import slider2img10 from "../Images/slider2-img10.jpg";
import slider2img11 from "../Images/slider2-img11.jpg";
import slider2img12 from "../Images/slider2-img12.jpg";
import slider2img13 from "../Images/slider2-img13.jpg";
import slider2img14 from "../Images/slider2-img14.jpg";
import slider2img15 from "../Images/slider2-img15.jpg";
import slider2img16 from "../Images/slider2-img16.jpg";
import slider2img17 from "../Images/slider2-img17.jpg";
import slider2img18 from "../Images/slider2-img18.jpg";
import slider2img19 from "../Images/slider2-img19.jpg";
import slider2img20 from "../Images/slider2-img20.jpg";
import slider2img21 from "../Images/slider2-img21.jpg";
import slider2img22 from "../Images/slider2-img22.jpg";
import slider2img23 from "../Images/slider2-img23.jpg";
import slider2img24 from "../Images/slider2-img24.jpg";
import slider2img25 from "../Images/slider2-img25.jpg";
import slider2img26 from "../Images/slider2-img26.jpg";

function Scrollsection2() {
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
            Top picks for Pakistan
          </h1>
        </div>

        <div
          ref={sliderRef}
          className="flex py-3 px-4 gap-2 overflow-x-auto  scroll-smooth"
        >
          {[
            slider2img1,
            slider2img2,
            slider2img3,
            slider2img4,
            slider2img5,
            slider2img6,
            slider2img7,
            slider2img8,
            slider2img9,
            slider2img10,
            slider2img11,
            slider2img12,
            slider2img13,
            slider2img14,
            slider2img15,
            slider2img16,
            slider2img17,
            slider2img18,
            slider2img19,
            slider2img20,
            slider2img21,
            slider2img22,
            slider2img23,
            slider2img24,
            slider2img25,
            slider2img26,
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

export default React.memo(Scrollsection2);
