import React from "react";
import exploredog from "../../images/exploredog.jpg";
import umbrella from "../../images/umbrella.png";
import icecream from "../../images/icecream.png";
import beer from "../../images/beer.png";

const OpenPlatform = () => {
  return (
    <div className=" bg-OpenPlatform bg-cover bg-fixed">
      <div className="flex w-4/5 justify-between items-center mx-auto text-white ">
        <div className="flex flex-col">
          <div className="text-3xl font-semibold w-1/2 mx-auto py-[2em]">
            OPEN PLATFORM. NO OBJECTIVES.
          </div>
          <div className="relative">
            <img src={exploredog} alt="" />
            <img
              src={umbrella}
              className="absolute top-0 right-0 -mr-[25%]"
              alt=""
            />
            <img
              src={icecream}
              className="absolute top-[25%] -ml-[15%] left-0"
              alt=""
            />
            <img
              src={beer}
              alt=""
              className="absolute bottom-0 -mb-10 right-0"
            />
          </div>
        </div>
        <div className="flex flex-col text-white gap-8 w-2/5">
          <h2 className="text-8xl">EXPLORE</h2>
          <p className="text-2xl">
            New realm for everyone — from casual visitors to ambitious
            entrepreneurs.
          </p>
          <ul className="text-2xl flex flex-col gap-4">
            <li>User-generated gaming map</li>
            <li>Daily interactive quests</li>
            <li>Thousands of Citizens</li>
            <li>Unlimited strategies</li>
          </ul>
          <p className="text-2xl font-semibold">Just take a stroll.</p>
        </div>
      </div>
    </div>
  );
};

export default OpenPlatform;
