import React from "react";

import Component1 from "../assets/Component 1.png";
import Component2 from "../assets/Component 2.png";
import Group1000003533 from "../assets/Group 1000003533.png";
import LOGO from "../assets/LOGO.png";
import Vector103 from "../assets/Vector 103.png";
import Vector104 from "../assets/Vector 104.png";
import Vector118 from "../assets/Vector 118.png";
import Vector135 from "../assets/Vector 135.png";
import Vector136 from "../assets/Vector 136.png";
import Vector137 from "../assets/Vector 83.png";
import Vector92 from "../assets/Vector 92.png";
import Vector96 from "../assets/Vector 96.png";

function Banner() {
  return (
    //BANNER
    <section>
      {/* BACKGROUND */}
      <div
        className="
    relative z-[2]
    w-full
    text-center
    px-12 py-12
    tracking-[4px]
    font-bold
    font-['Grunge-Decade']
    bg-[repeating-conic-gradient(from_0deg_at_50%_50%,#3a7d1e_0deg_15deg,#005f34_15deg_30deg,#9e0b28_30deg_45deg,#102a44_45deg_60deg,#004c97_60deg_75deg)]
  "
      >
        {/* BACKGROUND ELEMENT */}
        <div className="absolute inset-0 z-[2] blur-sm opacity-90">
          <img
            className="absolute top-[120px] left-[-100px] scale-[0.2]"
            src={Vector135}
            alt="elementbanner"
          />
          <img
            className="absolute top-[190px] right-[0px] scale-[0.22]"
            src={Vector136}
            alt="elementbanner"
          />
          <img
            className="absolute top-[-220px] left-[-100px] scale-[0.25]"
            src={Vector96}
            alt="elementbanner"
          />
          <img
            className="absolute top-[-80px] right-[-10px] scale-[0.5]"
            src={Vector104}
            alt="elementbanner"
          />
        </div>

        {/* LOGO BANNER */}
        <img className="relative z-[2] mx-auto" src={LOGO} alt="banner" />

        {/* TEXT BANNER */}
        <h1
          className="
        relative 
        z-[2] 
        mt-6 
        text-[56px] 
        text-[#f7d154]"
        >
          <b id="tbl">To be Loved</b> <b id="tbh">is To be Heard</b>
        </h1>
      </div>
    </section>
  );
}

export default Banner;
