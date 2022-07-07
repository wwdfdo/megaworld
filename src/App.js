import "./App.css";
import video2 from "../src/images/mw-bg.webm";
import { BsArrowRight } from "react-icons/bs";
import logo from "../src/images/logo.png";
import cross from "../src/images/cross.svg";
import { GiGolfFlag } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { BsCameraVideoFill } from "react-icons/bs";
import citizen from "../src/images/citizen.png";
import Assets from "./components/Assets/Assets";
import OpenPlatform from "./components/OpenPlatform/OpenPlatform";
import TryYourself from "./components/TryYourself/TryYourself";
import Welcomeclub from "./components/Welcomeclub/Welcomeclub";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <div className="relative">
        <div className=" absolute w-full h-full bg-[#296936b8] z-[0]"></div>
        <div className="relative w-full min-h-[100vh]">
          <video
            loop
            muted
            autoPlay
            controls=""
            className="absolute z-[-1] w-full"
          >
            <source src={video2} type="video/mp4"></source>
          </video>

          <div className="w-3/5 mx-auto flex justify-center gap-[20%] min-h-[100px] items-center text-2xl font-semibold text-white ">
            <div className="flex gap-8 items-center">
              <div>
                <AiFillHome className="text-2xl border-2 border-white w-[60px] h-[60px] p-2 rounded-full" />
              </div>
              <div>
                <BsCameraVideoFill className="text-3xl" />
              </div>
            </div>
            <div className="flex gap-8 items-center">
              <div>EXPLORE</div>
              <div>
                <BsArrowRight className="text-3xl font-bold" />
              </div>
              <div>CRAFT</div>
              <div>
                <BsArrowRight className="text-3xl font-bold" />
              </div>
              <div>BUILD</div>
              <div>
                <BsArrowRight className="text-3xl font-bold" />
              </div>
              <div>TRADE</div>
            </div>
            <div className="flex gap-8 items-center">
              <div>
                <GiGolfFlag className="text-4xl" />
              </div>
              <div>Demo</div>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-20 mt-20 text-white font-semibold">
            <img src={logo} className="mx-auto" alt="" />

            <div className="text-center text-4xl flex justify-center">
              THE METAVERSE
            </div>

            <div className="flex justify-center items-center gap-16 text-3xl">
              <div className="w-[150px] text-center">VIRTUAL CITY</div>
              <img src={cross} className="w-[100px]" alt="" />
              <div className="w-[150px] text-center">REAL ECONOMICS</div>
            </div>

            <div className="w-3/5 border-2 bg-white min-h-[20vh] mx-auto rounded-3xl px-8 mt-10 text-black flex justify-center  items-center">
              <div className="w-1/3">
                <p>REQUEST EARLY ACCESS</p>
                <p>
                  Claim your invitation to the Mega World metaverse demo today.
                </p>
              </div>
              <img src={citizen} className="-mt-20 w-[150px]" alt="" />
              <div className="flex gap-3">
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  className="border-2 border-black w-full py-2 px-4 rounded-xl"
                ></input>
                <input
                  type="submit"
                  value="Send"
                  className="py-2 px-8 border-2 border-black rounded-xl bg-green-700"
                ></input>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Assets />
      <OpenPlatform />
      <TryYourself />
      <Welcomeclub />
      <Footer />
    </div>
  );
}

export default App;
