import React, { useRef } from "react";
import { useThree } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { extend } from "react-three-fiber";

// Add `orbitControls` as primitive.
// NOTE the use of lowercase.
extend({
  OrbitControls
});

const Controls = () => {
  const controls = useRef();
  const { camera, gl } = useThree();

  return (
    <orbitControls
      ref={controls}
      args={[camera, gl.domElement]}
      enableDamping
      dampingFactor={0.05}
      rotateSpeed={0.5}
      maxDistance={500}
      minPolarAngle={0}
      maxPolarAngle={Math.PI / 2}
    />
  );
};

export default Controls;
