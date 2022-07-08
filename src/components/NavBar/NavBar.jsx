import React from "react";
import { GiGolfFlag } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { BsCameraVideoFill } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import "./NavBar.css";
import { menus } from "../../Arrays/menuArray";
import { useState } from "react";

const NavBar = () => {
  const [navId, setNavId] = useState();

  return (
    <div className="relative z-50">
      <div className="w-3/5 mx-auto flex justify-center gap-[20%] min-h-[100px] items-center text-2xl  text-white fixed nav">
        <div className="flex gap-8 items-center">
          <a href="#Home" className="hover:text-yellow-300">
            {" "}
            <AiFillHome className="text-2xl border-2 border-white hover:border-yellow-300 w-[60px] h-[60px] p-2 rounded-full" />
          </a>
          <div>
            <BsCameraVideoFill className="text-3xl hover:text-yellow-300" />
          </div>
        </div>
        <div className="flex gap-8 items-center">
          {menus.map((menu) => (
            <div className="flex gap-5" key={menu.id}>
              <a
                className={`hover:text-yellow-300 ${
                  navId === menu.id ? "text-yellow-300" : "text-white"
                }`}
                onClick={() => setNavId(menu.id)}
                href={menu.link}
                target={menu.class === "new" ? "_blank" : ""}
              >
                {menu.title}
              </a>
              <div>
                <BsArrowRight
                  className={`${menu.hidden} text-3xl font-bold `}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-8 items-center">
          <div>
            <GiGolfFlag className="text-4xl hover:text-yellow-300" />
          </div>
          <a href="#Welcomeclub" className="hover:text-yellow-300">
            Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
