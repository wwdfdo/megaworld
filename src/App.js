import "./App.css";
import video2 from "../src/images/mw-bg.webm";
import { BsArrowRight } from "react-icons/bs";
import logo from "../src/images/logo.png";
import cross from "../src/images/cross.svg";
import { GiGolfFlag } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { BsCameraVideoFill } from "react-icons/bs";

function App() {
  return (
    <div>
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

        <div className="w-3/5 mx-auto flex justify-center gap-[20%] min-h-[100px] items-center text-2xl font-semibold text-white">
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

          <div className="w-3/5 border-2 bg-white h-[20vh] mx-auto rounded-3xl my-20">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col w-3/5 mx-auto items-center ">
        <p>
          Collection of original assets owned by users to be transferred to the
          metaverse:
        </p>

        <div className="flex gap-10 justify-center">
          <div>
            <p>113’652</p>
            <p>Land Plots</p>
          </div>
          <div>
            <p>113’652</p>
            <p>Land Plots</p>
          </div>
          <div>
            <p>113’652</p>
            <p>Land Plots</p>
          </div>
          <div>
            <p>113’652</p>
            <p>Land Plots</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default App;
