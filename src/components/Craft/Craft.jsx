import React from "react";
import craft from "../../images/craft.png";
import nails from "../../images/nails.png";
import textiles from "../../images/textiles.png";
import glue from "../../images/glue.png";

const Craft = () => {
  return (
    <div
      className="flex w-4/5 justify-between items-center mx-auto pt-32  z-[10] "
      id="Craft"
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
        <img
          src={nails}
          className="absolute left-[50%] bottom-0 -mb-[90px]  image"
          alt=""
        />
        <img src={craft} alt="" />
        <img
          src={glue}
          className="absolute right-0 -mr-[7em] bottom-0 -mb-[400px] image"
          alt=""
        />
        <img
          src={textiles}
          className="absolute bottom-0 -mb-[600px] image"
          alt=""
        />
      </div>
    </div>
  );
};

export default Craft;
