import React from "react";
import preview from "../../images/preview.png";
import building from "../../images/building.png";
import car from "../../images/car.png";
import dog from "../../images/dog.png";
import metal from "../../images/metal.png";
import { FaPlay } from "react-icons/fa";
import "./Assets.css";

const Assets = () => {
  return (
    <div className="bg-green-500">
      <div className="flex flex-col mx-auto items-start md:gap-40 gap-20 py-16">
        <div className="md:w-3/5 w-[90%] mx-auto flex flex-col items-start ">
          <p className="text-xl md:text-left text-center">
            Collection of original assets owned by users to be transferred to
            the metaverse:
          </p>

          <div className="flex md:gap-28 gap-10  flex-wrap justify-center mt-10">
            <div className=" border-l-4 border-l-yellow-400 w-2/5 md:w-auto">
              <div className="pl-4 font-bold md:text-2xl text-[1.2em]">
                <p>113’652</p>
                <p>Land Plots</p>
              </div>
            </div>
            <div className=" border-l-4 border-l-yellow-400 w-2/5 md:w-auto">
              <div className="pl-4 font-bold md:text-2xl text-[1.2em]">
                <p>113’652</p>
                <p>Land Plots</p>
              </div>
            </div>
            <div className=" border-l-4 border-l-yellow-400 w-2/5 md:w-auto">
              <div className="pl-4 font-bold md:text-2xl text-[1.2em]">
                <p>113’652</p>
                <p>Land Plots</p>
              </div>
            </div>
            <div className=" border-l-4 border-l-yellow-400 w-2/5 md:w-auto">
              <div className="pl-4 font-bold md:text-2xl text-[1.2em]">
                <p>113’652</p>
                <p>Land Plots</p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-3/5 w-[95%] mx-auto">
          <img
            src={building}
            alt=""
            className="absolute right-0 -mt-20 hidden md:block"
          />
          <img src={car} className="-ml-40 -mb-10 hidden md:block" alt="" />
          <a
            href="https://www.youtube.com/watch?v=sn9h6-iz3Ic"
            className="relative"
          >
            <div className="relative">
              <img src={preview} alt="" />
              <FaPlay className="text-6xl play-button" />
            </div>
          </a>
          <img src={dog} alt="" className="-ml-[10%] hidden md:block" />
          <img src={metal} alt="" className="ml-[50%] -mt-32 hidden md:block" />
        </div>
      </div>
    </div>
  );
};

export default Assets;
