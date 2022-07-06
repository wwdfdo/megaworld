import "./App.css";
import video2 from "../src/images/mw-bg.webm";

function App() {
  return (
    <div className="relative w-full min-h-[100vh]">
      <div className="absolute w-full bg-[#f63b9f61] h-full left-0 right-0 bottom-0 top-0">
        <video
          loop
          muted
          autoPlay
          controls=""
          className="absolute z-[-1] w-full"
        >
          <source src={video2} type="video/mp4"></source>
        </video>

        <div className="w-3/5 mx-auto flex justify-center gap-[20%] min-h-[100px] items-center text-2xl font-semibold">
          <div className="flex gap-8">
            <div>logo</div>
            <div>video</div>
          </div>
          <div className="flex gap-8">
            <div>EXPLORE</div>
            <div>ARROW</div>
            <div>CRAFT</div>
            <div>ARROW</div>
            <div>BUILD</div>
            <div>ARROW</div>
            <div>TRADE</div>
          </div>
          <div className="flex gap-8">
            <div>Flag</div>
            <div>Demo</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
