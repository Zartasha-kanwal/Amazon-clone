import React from 'react'
import { useRef } from "react";
import sliderimg1 from "../Images/slider-img1.jpg";
import sliderimg2 from "../Images/slider-img2.jpg";
import sliderimg3 from "../Images/slider-img3.jpg";
import sliderimg4 from "../Images/slider-img4.jpg";
import sliderimg5 from "../Images/slider-img5.jpg";
import sliderimg6 from "../Images/slider-img6.jpg";
import sliderimg7 from "../Images/slider-img7.jpg";
import sliderimg8 from "../Images/slider-img8.jpg";
import sliderimg9 from "../Images/slider-img9.jpg";
import sliderimg10 from "../Images/slider-img10.jpg";
import sliderimg11 from "../Images/slider-img11.jpg";
import sliderimg12 from "../Images/slider-img12.jpg";
import sliderimg13 from "../Images/slider-img13.jpg";
import sliderimg14 from "../Images/slider-img14.jpg";
import sliderimg15 from "../Images/slider-img15.jpg";
import sliderimg16 from "../Images/slider-img16.jpg";
import sliderimg17 from "../Images/slider-img17.jpg";
import sliderimg18 from "../Images/slider-img18.jpg";
import sliderimg19 from "../Images/slider-img19.jpg";
import sliderimg20 from "../Images/slider-img20.jpg";
import sliderimg21 from "../Images/slider-img21.jpg";
import sliderimg22 from "../Images/slider-img22.jpg";

function Scrollsection1() {

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
        <div className=" relative mx-4 py-[10px]  bg-white lg:-mt-[15rem] -mt-[3rem] overflow-x-auto ">
          <div className="flex items-center">
            <h1 className="text-[#0F1111] text-[21px] font-bold leading-6 mt-2 px-6">
              Related to items you've viewed
            </h1>
            <span className="mt-3 text-sm text-blue-700 hover:text-blue-950 hover:underline cursor-pointer ">
              See more
            </span>
          </div>

          <div
            ref={sliderRef}
            className="flex py-3 px-4 gap-2 overflow-x-auto  scroll-smooth"
          >
            {[
              sliderimg1,
              sliderimg2,
              sliderimg3,
              sliderimg4,
              sliderimg5,
              sliderimg6,
              sliderimg7,
              sliderimg8,
              sliderimg9,
              sliderimg10,
              sliderimg11,
              sliderimg12,
              sliderimg13,
              sliderimg14,
              sliderimg15,
              sliderimg16,
              sliderimg17,
              sliderimg18,
              sliderimg19,
              sliderimg20,
              sliderimg21,
              sliderimg22,
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
  )
}
export default React.memo (Scrollsection1);
