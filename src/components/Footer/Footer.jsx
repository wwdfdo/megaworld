import React from "react";
import { GiGolfFlag } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import logo from "../../images/logo.png";

const Footer = () => {
  return (
    <div className="bg-[#234607] py-20 ">
      <div className="flex flex-col gap-20 items-center mx-auto">
        <div className="flex justify-center items-center gap-20 text-white">
          <div>
            {" "}
            <AiFillHome className="text-6xl border-2 border-[#788d68] text-white p-2 rounded-full" />
          </div>
          <div className="text-2xl font-semibold">
            <div className="flex gap-8 items-center">
              <a href="#Explore">EXPLORE</a>
              <div>
                <BsArrowRight className="text-3xl " />
              </div>
              <a href="#Craft">CRAFT</a>
              <div>
                <BsArrowRight className="text-3xl" />
              </div>

              <a href="#Builds">BUILD</a>
              <div>
                <BsArrowRight className="text-3xl" />
              </div>
              <a href="#Trade">TRADE</a>
            </div>
          </div>
          <div>
            <GiGolfFlag className="text-4xl text-white" />
          </div>
        </div>
        <div>
          <img src={logo} className="mx-auto" alt="" />
        </div>
      </div>
      <div className="w-3/5 flex flex-col item-center mx-auto gap-4">
        <div>
          <p>Copyrights © 2021 SPNV</p>
        </div>
        <div className=" flex justify-between border-t-2 border-black py-4">
          <div className="flex gap-2">
            <a href="" className="underline">
              Privacy Policy
            </a>{" "}
            <span>-</span>
            <a href="" className="underline">
              Cookies Policy
            </a>
          </div>
          <a href="" className="underline">
            Feedback
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
