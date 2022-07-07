import React from "react";
import exploredog from "../../images/exploredog.jpg";
import umbrella from "../../images/umbrella.png";
import icecream from "../../images/icecream.png";
import beer from "../../images/beer.png";
import craft from "../../images/craft.png";
import nails from "../../images/nails.png";
import textiles from "../../images/textiles.png";
import glue from "../../images/glue.png";

const OpenPlatform = () => {
  return (
    <div className=" bg-OpenPlatform bg-cover bg-fixed flex flex-col gap-32 text-white">
      <div className="flex w-4/5 justify-between items-center mx-auto  ">
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

      <div className="flex items-center mx-auto justify-center">
        <div className="w-2/5 flex flex-col gap-8">
          <h2 className="text-6xl">CRAFT</h2>
          <p className="text-2xl">
            There is nothing better than something you’ve created yourself. Roll
            up your sleeves — handcraft is always valuable.
          </p>
          <ul className="text-2xl flex flex-col gap-4">
            <li>High-tech devices</li>
            <li>Cars and Helicopters</li>
            <li>Artworks and Sculpture</li>
            <li>Furniture and Decorations</li>
          </ul>
          <p className="text-2xl font-semibold"></p>
        </div>
        <div className="relative">
          <img src={nails} className="absolute left-[50%]" alt="" />
          <img src={craft} alt="" />
          <img
            src={glue}
            className="absolute right-0 -mr-[7em] bottom-[30%]"
            alt=""
          />
          <img src={textiles} className="absolute bottom-3" alt="" />
        </div>
      </div>
    </div>
  );
};

export default OpenPlatform;
