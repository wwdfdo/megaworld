import React from "react";
import video2 from "../../images/mw-bg.webm";

import citizen from "../../images/citizen.png";
import logo from "../../images/logo.png";
import cross from "../../images/cross.svg";
import NavBar from "../NavBar/NavBar";

const ViewPort = () => {
  return (
    <div className="relative" id="Home">
      <div className=" absolute w-full h-full bg-[#234506a8] z-[0]"></div>
      <div className="relative w-full min-h-[100vh]">
        <video
          loop
          muted
          autoPlay
          controls=""
          className="absolute z-[-1] w-full top-0"
        >
          <source src={video2} type="video/mp4"></source>
        </video>

        <NavBar />

        <div className="flex flex-col justify-between gap-20 pt-32 pb-20 text-white font-semibold">
          <img src={logo} className="mx-auto" alt="" />

          <div className="text-center text-4xl flex justify-center">
            THE METAVERSE
          </div>

          <div className="flex justify-center items-center gap-16 text-3xl">
            <div className="w-[150px] text-center">VIRTUAL CITY</div>
            <img src={cross} className="w-[100px]" alt="" />
            <div className="w-[150px] text-center">REAL ECONOMICS</div>
          </div>

          <div className="w-3/5 border-2 bg-white min-h-[20vh] mx-auto rounded-3xl px-8 mt-10 text-black flex justify-center  items-center">
            <div className="w-1/3">
              <p>REQUEST EARLY ACCESS</p>
              <p>
                Claim your invitation to the Mega World metaverse demo today.
              </p>
            </div>
            <img src={citizen} className="-mt-20 w-[150px]" alt="" />
            <div className="flex gap-3">
              <input
                type="text"
                id="fname"
                name="fname"
                className="border-2 border-black w-full py-2 px-4 rounded-xl"
              ></input>
              <input
                type="submit"
                value="Send"
                className="py-2 px-8 border-2 border-black rounded-xl bg-green-700"
              ></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPort;
