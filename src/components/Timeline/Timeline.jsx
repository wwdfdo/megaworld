import { useEffect } from "react";

import { parralxItem } from "./functions";

import "./App.css";

function App() {
  useEffect(() => {
    parralxItem("container", "image");
  });

  return (
    <div className="app">
      <div className="container">
        <img src="https://megaworld.io/images/explore.jpg" alt="" />`
        <div className="image"></div>
        <div className="image2"></div>
      </div>
    </div>
  );
}

export default App;
