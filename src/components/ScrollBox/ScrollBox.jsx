import React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ScrollBox = () => {
  gsap.registerPlugin(ScrollTrigger);
  let boxRef = useRef(null);

  // wait until DOM has been rendered
  useEffect(() => {
    gsap.to("#thirdCircle", {
      x: 300,
      duration: 10,
      scrollTrigger: {
        trigger: "#thirdCircle",
        markers: true,
        start: "top center",
        end: "+=300",
        toggleActions: "restart pause reverse pause",
        scrub: true,
      },
    });
  });

  // DOM to render
  return (
    <div className="flex items-center h-[25vh] my-20 c">
      <div
        id="thirdCircle"
        className="w-[100px] h-[100px] bg-red-700 flex items-center justify-center text-center my-100 "
        ref={boxRef}
      >
        Hello
      </div>
    </div>
  );
};

export default ScrollBox;
