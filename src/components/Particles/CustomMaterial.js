import { ShaderMaterial } from "three";
import { extend } from "react-three-fiber";

class CustomMaterial extends ShaderMaterial {
  constructor() {
    super({
      vertexShader: `uniform float time;
      attribute vec3 velocity;
      attribute vec3 acceleration;
      void main() {
          vec3 pos = position;
          gl_Position = projectionMatrix
              * modelViewMatrix
              * vec4(
                  vec3(
                      pos[0] + cos(time / velocity[0]) * 1.0 * velocity[0],
                      pos[1] * 2.0 * sin(time / velocity[1]) * velocity[1],
                      pos[2] * 2.0 * cos(time / velocity[2]) * 1.0 * velocity[2]), 1.0);
          gl_PointSize = 5.0;
      }`,
      fragmentShader: `
      uniform float time;
      void main() {
        float z = 1.0 - (gl_FragCoord.z / gl_FragCoord.w) / 20.0;
        gl_FragColor = vec4(sin(time * 2.0) * z, cos(time) * z, atan(time) * z, 1.0);
      }`
    });
  }
}

extend({ CustomMaterial });
