import React from "react";
import build from "../../images/build.jpg";

const Builds = () => {
  return (
    <div
      className="flex w-4/5 justify-between mx-auto z-[10] pt-32 "
      id="Builds"
    >
      <div className="relative">
        <img src={build} alt="" />
      </div>

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
    </div>
  );
};

export default Builds;
