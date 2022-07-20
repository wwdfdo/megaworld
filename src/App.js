import "./App.css";

import Assets from "./components/Assets/Assets";
import OpenPlatform from "./components/OpenPlatform/OpenPlatform";
import TryYourself from "./components/TryYourself/TryYourself";
import Welcomeclub from "./components/Welcomeclub/Welcomeclub";
import Footer from "./components/Footer/Footer";
import ViewPort from "./components/ViewPort/ViewPort";
import ScrollBox from "./components/ScrollBox/ScrollBox";

function App() {
  return (
    <div className="m-0 p-0 box-border overflow-hidden">
      <ViewPort />
      <Assets />
      <OpenPlatform />
      <TryYourself />
      <Welcomeclub />
      <ScrollBox />

      <Footer />
    </div>
  );
}

export default App;
