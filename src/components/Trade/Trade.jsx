import React from "react";
import trade from "../../images/trade.jpg";
import tooltip from "../../images/cost-tooltip.png";
import wallet from "../../images/wallet.png";
import coins from "../../images/coins.png";
import coin from "../../images/coin.png";

const Trade = () => {
  return (
    <div
      className="flex w-4/5 justify-between items-center mx-auto z-[10] py-48"
      id="Trade"
    >
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
        <img src={tooltip} className=" absolute top-20 left-0" alt="" />
        <img src={coin} className="absolute top-0 right-0 -mt-[20%]" alt="" />
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
  );
};

export default Trade;
