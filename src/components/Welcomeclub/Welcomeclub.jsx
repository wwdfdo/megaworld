import React from "react";
import { FaDiscord } from "react-icons/fa";
import citizens from "../../images/citizens.png";

const Welcomeclub = () => {
  return (
    <div className=" bg-welcomebg bg-cover w-full" id="Welcomeclub">
      <div className="w-4/5 mx-auto">
        <div className=" flex flex-col items-center gap-20 z-[10] py-40 text-white">
          <h2 className="text-5xl font-bold">WELCOME TO THE CLUB</h2>
          <div className="flex gap-3 text-2xl">
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="Enter Email Address"
              className=" w-full py-2 px-4 rounded-xl outline-none text-black"
            ></input>
            <input
              type="submit"
              value="Send"
              className="py-2 px-8   rounded-xl bg-orange-500"
            ></input>
          </div>
          <div className="flex items-center gap-3 py-4 px-6 rounded-2xl bg-[#5d6aee]">
            <FaDiscord className="text-3xl" />{" "}
            <span className="text-lg font-semibold">JOIN THE COMMUNITY</span>
          </div>
        </div>
        <img src={citizens} className="-mt-40" alt="" />
      </div>
    </div>
  );
};

export default Welcomeclub;
