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

          <div className="flex justify-center items-center md:gap-16 gap-8 md:text-3xl text-xl">
            <div className="w-[100px] md:[150px] text-center">VIRTUAL CITY</div>
            <img src={cross} className="w-[100px]" alt="" />
            <div className="w-[100px] md:[150px] text-center">
              REAL ECONOMICS
            </div>
          </div>

          <div className="md:w-3/5 w-[95%] border-2 bg-white md:min-h-[20vh] mx-auto rounded-3xl px-8 md:mt-10 mt-[100px] text-black flex md:flex-row flex-col md:justify-around gap-6 md:gap-0 py-10 md:py-0  items-center relative">
            <div className="md:w-1/3">
              <p>REQUEST EARLY ACCESS</p>
              <p>
                Claim your invitation to the Mega World metaverse demo today.
              </p>
            </div>
            <img
              src={citizen}
              className="md:-mt-20 md:relative absolute top-0 right-0 -mt-36 md:w-[150px] w-[100px]"
              alt=""
            />
            <div className="md:flex gap-3">
              <input
                type="text"
                id="fname"
                name="fname"
                className="border-2 border-black w-full py-2 px-4 rounded-xl"
              ></input>
              <input
                type="submit"
                value="Send"
                className="py-2 px-8 border-2 border-black rounded-xl bg-green-700 md:mt-0 mt-5"
              ></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPort;
