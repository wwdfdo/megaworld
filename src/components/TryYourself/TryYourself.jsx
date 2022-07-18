import React from "react";
import citizens2 from "../../images/citizens2.png";
import frontman from "../../images/frontman.png";
import "./TryYourself.css";

const TryYourself = () => {
  return (
    <div className="relative">
      <div className=" bg-tryYourselfbg bg-cover w-full  pt-20 text-white ">
        <div className="flex flex-col items-center gap-20">
          <h2 className="text-5xl font-bold text-center">
            LIFE THE WAY YOU WANT IT
          </h2>
          <p className="text-3xl font-semibold md:w-1/2 text-center">
            Try yourself in various activities and businesses, and when you
            don’t feel like it - simply change the direction, there is always
            someone willing to take a niche.
          </p>
          <div className="flex md:w-3/5 w-[90%] mx-auto relative justify-center">
            <img
              src={frontman}
              className="absolute animated bounce transition delay-150 duration-300 md:w-auto w-[100px]"
              alt=""
            />
            <img src={citizens2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TryYourself;
