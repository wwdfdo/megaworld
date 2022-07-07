import React from "react";
import exploredog from "../../images/exploredog.jpg";
import umbrella from "../../images/umbrella.png";
import icecream from "../../images/icecream.png";
import beer from "../../images/beer.png";
import craft from "../../images/craft.png";
import nails from "../../images/nails.png";
import textiles from "../../images/textiles.png";
import glue from "../../images/glue.png";
import build from "../../images/build.jpg";
import trade from "../../images/trade.jpg";
import tooltip from "../../images/cost-tooltip.png";
import wallet from "../../images/wallet.png";
import coins from "../../images/coins.png";
import coin from "../../images/coin.png";

const OpenPlatform = () => {
  return (
    <div className="relative">
      <div className=" absolute w-full h-full bg-[#296936b8] z-[1]"></div>
      <div className=" bg-OpenPlatform bg-cover bg-fixed flex flex-col gap-32 text-white z-[-1] pb-40">
        <div className="flex w-4/5 justify-between items-center mx-auto z-[10] ">
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

        <div className="flex w-4/5 justify-between items-center mx-auto  z-[10]">
          <div className="w-2/5 flex flex-col gap-8">
            <h2 className="text-6xl">CRAFT</h2>
            <p className="text-2xl">
              There is nothing better than something you’ve created yourself.
              Roll up your sleeves — handcraft is always valuable.
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

        <div className="flex w-4/5 justify-between mx-auto z-[10]">
          <div className="relative">
            <img src={build} alt="" />
          </div>

          <div className="w-2/5 flex flex-col gap-8">
            <h2 className="text-6xl">CRAFT</h2>
            <p className="text-2xl">
              There is nothing better than something you’ve created yourself.
              Roll up your sleeves — handcraft is always valuable.
            </p>
            <ul className="text-2xl flex flex-col gap-4">
              <li>High-tech devices</li>
              <li>Cars and Helicopters</li>
              <li>Artworks and Sculpture</li>
              <li>Furniture and Decorations</li>
            </ul>
            <p className="text-2xl font-semibold"></p>
          </div>
        </div>

        <div className="flex w-4/5 justify-between items-center mx-auto z-[10]">
          <div className="w-2/5 flex flex-col gap-8">
            <h2 className="text-6xl">CRAFT</h2>
            <p className="text-2xl">
              There is nothing better than something you’ve created yourself.
              Roll up your sleeves — handcraft is always valuable.
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
            <img src={tooltip} className=" absolute top-20 left-0" alt="" />
            <img
              src={coin}
              className="absolute top-0 right-0 -mt-[20%]"
              alt=""
            />
            <img src={trade} alt="" />
            <img
              src={wallet}
              className="absolute bottom-0 left-0 -mb-[20%]"
              alt=""
            />
            <img
              src={coins}
              className="absolute bottom-0 right-0  -mb-[20%] -mr-20"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenPlatform;
