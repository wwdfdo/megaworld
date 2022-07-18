import React from "react";
import exploredog from "../../images/exploredog.jpg";
import umbrella from "../../images/umbrella.png";
import icecream from "../../images/icecream.png";
import beer from "../../images/beer.png";

const Explore = () => {
  return (
    <div
      className="flex md:flex-row flex-col md:w-4/5 w-[95%] justify-between items-center mx-auto pt-32  z-[10] "
      id="Explore"
    >
      <div className="flex flex-col">
        <div className="md:text-3xl text-2xl font-semibold md:w-1/2 w-2/3 md:mx-auto py-[2em]">
          OPEN PLATFORM. NO OBJECTIVES.
        </div>
        <div className="relative container">
          <img src={exploredog} alt="" />
          <img
            src={umbrella}
            className="absolute top-0 right-0 -mr-[25%] image md:w-auto w-2/3"
            alt=""
          />
          <img
            src={icecream}
            className="absolute top-[75%] -ml-[15%] left-0 image"
            alt=""
          />
          <img
            src={beer}
            alt=""
            className="absolute bottom-0 -mb-[400px] right-0 image"
          />
        </div>
      </div>
      <div className="flex flex-col text-white gap-8 w-2/5">
        <h2 className="text-6xl">EXPLORE</h2>
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
  );
};

export default Explore;
