import React from "react";
import { Canvas } from "react-three-fiber";

import Controls from "./components/Controls/Controls";
import Cubes from "./components/Cubes/Cubes";
import Sun from "./components/Lights/Sun";
import Enviornment from "./components/Environment/Environment";
import Particles from "./components/Particles/Particles";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Canvas>
        <Particles pointCount={100000} />
        <Cubes />
        <Sun />
        <Enviornment />
        <Controls />
      </Canvas>
    </div>
  );
}

export default App;
