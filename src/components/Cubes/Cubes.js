import React, { useRef } from "react";
import Cube from "../Cube/Cube";

import { useFrame } from "react-three-fiber";

const Cubes = () => {
  const group = useRef();

  const cubes = [];
  for (let i = 0; i < 50; i++) {
    cubes.push(<Cube key={i} />);
  }

  useFrame(() => {
    group.current.rotation.y += 0.005;
  });

  return <group ref={group}>{cubes}</group>;
};

export default Cubes;
