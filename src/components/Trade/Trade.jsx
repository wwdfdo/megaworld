import React from "react";
import trade from "../../images/trade.jpg";
import tooltip from "../../images/cost-tooltip.png";
import wallet from "../../images/wallet.png";
import coins from "../../images/coins.png";
import coin from "../../images/coin.png";

const Trade = () => {
  return (
    <div
      className="flex md:flex-row flex-col md:w-4/5 w-[95%] justify-between items-center mx-auto z-[10] py-48"
      id="Trade"
    >
      <div className="md:w-2/5 flex flex-col gap-8">
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
        <img
          src={tooltip}
          className=" absolute md:-mb-[700px] -mb-[1400px] bottom-0 left-0 image md:w-auto w-[150px]"
          alt=""
        />
        <img
          src={coin}
          className="absolute bottom-0 md:-mb-[800px] -mb-[1420px] right-0 image md:w-auto w-[150px]"
          alt=""
        />
        <img src={trade} alt="" />
        <img
          src={wallet}
          className="absolute bottom-0 left-0 md:-mb-[1600px] -mb-[2000px] image md:w-auto w-[200px]"
          alt=""
        />
        <img
          src={coins}
          className="absolute bottom-0 right-0 md:-mb-[1600px] -mb-[1800px] md:-mr-20 image md:w-auto w-[150px]"
          alt=""
        />
      </div>
    </div>
  );
};

export default Trade;
