import React, { Suspense, memo } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";

import CanvasLoader from "../Loader";

// ===============================
// CONSTANTS
// ===============================

const FLOAT_CONFIG = {
  speed: 1.75,
  rotationIntensity: 1,
  floatIntensity: 2,
};

const BALL_SCALE = 2.75;
const BALL_COLOR = "#fff8eb";

// ===============================
// BALL MESH
// ===============================

const Ball = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float {...FLOAT_CONFIG}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />

      <mesh castShadow receiveShadow scale={BALL_SCALE}>
        <icosahedronGeometry args={[1, 1]} />

        <meshStandardMaterial
          color={BALL_COLOR}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />

        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

// ===============================
// CANVAS WRAPPER
// ===============================

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />

        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default memo(BallCanvas);