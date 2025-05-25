import React, { useState } from "react";
import Heroimg1 from "../Images/Hero-img_.jpg";
import Heroimg2 from "../Images/Hero-img-2.jpg";
import Heroimg3 from "../Images/Hero-img-3.jpg";
import Heroimg4 from "../Images/Hero-img-4.jpg";
import Heroimg5 from "../Images/Hero-img-5.jpg";
import Heroimg6 from "../Images/Hero-img-6.jpg";


export default function HeroSection() {
  const heroImages = [
    Heroimg1,
    Heroimg2,
    Heroimg3,
    Heroimg4,
    Heroimg5,
    Heroimg6,
  ];

  const [next, setNext] = useState(0);

  const handleNext = () => {
    setNext((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
  };

  const handlePre = () => {
    setNext((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  };
  return (
    <div>
      <section className="relative cursor-pointer inset-0 backdrop-blur-[2px] bg-white/5 [mask-image:linear-gradient(to_top,rgba(0,0,0,0.4),rgba(0,0,0,1))]">
        <div className="flex">
          <div className="min-w-[100%]">
            <img src={heroImages[next]} className="object-cover" />
          </div>
        </div>

        <div className="absolute top-1 flex justify-between w-full">
          <button
            className=" ml-1 py-[100px] px-[25px] text-4xl text-white border border-transparent rounded-sm 
            focus:outline-none 
            focus:ring-2 focus:ring-white 
            focus:ring-offset-2 focus:ring-offset-sky-700 "
            style={{
              textShadow: "-4px 0 0 #000",
            }}
            onClick={handlePre}
          >
            <i class="fa-solid fa-chevron-left"></i>
          </button>

          <button
            className="mr-1 py-[100px] px-[25px] text-4xl text-white border border-transparent rounded-sm focus:outline-none 
            focus:ring-2 focus:ring-white 
             focus:ring-offset-2 focus:ring-offset-sky-700 "
            style={{
              textShadow: "4px 0 0 #000",
            }}
            onClick={handleNext}
          >
            <i class="fa-solid fa-chevron-right"></i>
          </button>
        </div>

        
      </section>
    </div>
  );
}
