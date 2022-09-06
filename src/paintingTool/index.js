import React from "react";

import { Palette } from "./palette";
import { Canvas } from "./Canvas";
import { PropertiesPanel } from "./PropertiesPanel";
import "./index.css"
import { useLocation } from "react-router-dom";
function App() {
  const location=useLocation()
console.log(location.state.localpath,"img")
  return (
    <div className="app" style={{display:"flex",overflow:"hidden"}}>
      <Palette />
      <Canvas img={location.state.localpath} />
      <PropertiesPanel />
    </div>
  );
}

export default App;
