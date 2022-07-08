import React from "react";

import Explore from "../Explore/Explore";
import Craft from "../Craft/Craft";
import Builds from "../Builds/Builds";
import Trade from "../Trade/Trade";

const OpenPlatform = () => {
  return (
    <div className="relative">
      <div className=" absolute w-full h-full bg-[#296936b8] z-[1]"></div>
      <div className=" bg-OpenPlatform bg-cover bg-fixed flex flex-col gap-32 text-white z-[-1] pb-40">
        <Explore />

        <Craft />
        <Builds />
        <Trade />
      </div>
    </div>
  );
};

export default OpenPlatform;
