import React from "react";
import { Canvas } from "react-three-fiber";

import Cubes from "./components/Cubes/Cubes";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Canvas>
        <Cubes />
      </Canvas>
    </div>
  );
}

export default App;
