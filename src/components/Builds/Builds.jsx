import React from "react";
import build from "../../images/build.jpg";
import buildblock1 from "../../images/Block001.png";
import buildblock2 from "../../images/Block002.png";
import buildblock3 from "../../images/Block003.png";
import buildblock4 from "../../images/Block004.png";
import buildblock5 from "../../images/Block005.png";
import buildblock6 from "../../images/Block006.png";
import buildblock7 from "../../images/Block007.png";
import buildblock8 from "../../images/Block008.png";
import buildblock9 from "../../images/Block009.png";
import buildblock10 from "../../images/Block010.png";
import buildblock11 from "../../images/Block011.png";

const Builds = () => {
  return (
    <div
      className="flex w-4/5 justify-between mx-auto z-[10] pt-32 "
      id="Builds"
    >
      <div className="relative">
        <img src={build} alt="" />

        <img
          src={buildblock11}
          alt=""
          className="absolute w-[500px] bottom-[200px] -mb-[1000px] image"
        />
        <img
          src={buildblock10}
          alt=""
          className="absolute w-[500px] bottom-[180px] -mb-[1000px] image"
        />
        <img
          src={buildblock9}
          className="absolute w-[500px] bottom-[160px] -mb-[1000px] image"
          alt=""
        />
        <img
          src={buildblock8}
          className="absolute w-[500px] bottom-[140px] -mb-[1000px] image"
          alt=""
        />
        <img
          src={buildblock7}
          className="absolute w-[500px] bottom-[120px] -mb-[1000px] image"
          alt=""
        />
        <img
          src={buildblock6}
          className="absolute w-[500px] bottom-[100px] -mb-[1000px] image"
          alt=""
        />
        <img
          src={buildblock5}
          className="absolute w-[500px] bottom-[80px] -mb-[1000px] image"
          alt=""
        />
        <img
          src={buildblock4}
          className="absolute w-[500px] bottom-[60px] -mb-[1000px] image"
          alt=""
        />
        <img
          src={buildblock3}
          className="absolute w-[500px] bottom-[40px] -mb-[1000px] image"
          alt=""
        />
        <img
          src={buildblock2}
          className="absolute w-[500px] bottom-[20px] -mb-[1000px] image"
          alt=""
        />
        <img
          src={buildblock1}
          className="absolute w-[500px] bottom-[0%] -mb-[1000px] image"
          alt=""
        />
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
