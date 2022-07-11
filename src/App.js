import "./App.css";

import Assets from "./components/Assets/Assets";
import OpenPlatform from "./components/OpenPlatform/OpenPlatform";
import TryYourself from "./components/TryYourself/TryYourself";
import Welcomeclub from "./components/Welcomeclub/Welcomeclub";
import Footer from "./components/Footer/Footer";
import ViewPort from "./components/ViewPort/ViewPort";

function App() {
  return (
    <div>
      <ViewPort />
      <Assets />
      <OpenPlatform />
      <TryYourself />
      <Welcomeclub />

      <Footer />
    </div>
  );
}

export default App;
