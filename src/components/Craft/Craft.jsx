import React from "react";
import craft from "../../images/craft.png";
import nails from "../../images/nails.png";
import textiles from "../../images/textiles.png";
import glue from "../../images/glue.png";

const Craft = () => {
  return (
    <div
      className="flex md:flex-row flex-col md:w-4/5 w-[95%] justify-between items-center mx-auto pt-32  z-[10] "
      id="Craft"
    >
      <div className="md:w-2/5 flex flex-col gap-8 ">
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
          className="absolute left-[50%] bottom-0 md:-mb-[90px] -mb-[500px] image md:w-auto w-[100px]"
          alt=""
        />
        <img src={craft} alt="" />
        <img
          src={glue}
          className="absolute right-0 md:-mr-[7em] bottom-0 md:-mb-[400px] -mb-[700px] image md:w-auto w-[100px]"
          alt=""
        />
        <img
          src={textiles}
          className="absolute bottom-0 md:-mb-[600px] -mb-[900px] image md:w-auto w-[100px]"
          alt=""
        />
      </div>
    </div>
  );
};

export default Craft;
