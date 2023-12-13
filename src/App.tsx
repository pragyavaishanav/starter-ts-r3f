/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  Grid,
  OrbitControls,
  PerspectiveCamera,
  Plane,
  Sphere,
} from "@react-three/drei";

const Scene = () => {
  return (
    <>
      <Plane args={[2, 2]} position={[0, -0.1, 0]} rotation={[-1.57, 0, 0]}>
        <meshBasicMaterial color={0x014401} />
      </Plane>
      <Sphere args={[0.3]} />
    </>
  );
};

const App = () => {
  return (
    <Canvas>
      <color attach="background" args={["#f0f0f0"]} />
      <PerspectiveCamera makeDefault position={[1, 1, 1]} />
      <OrbitControls target={[0, 0, 0]} />
      <Grid />
      <Environment files="/Equirectangular_IBL.hdr" />
      <Scene />
    </Canvas>
  );
};

export default App;
