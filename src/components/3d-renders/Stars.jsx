import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

// ===============================
// CONFIGURATION
// ===============================

const STAR_COUNT = 5000;
const STAR_RADIUS = 1.2;

const ROTATION_SPEED_X = 10;
const ROTATION_SPEED_Y = 15;

const STAR_COLOR = "#f272c8";
const STAR_SIZE = 0.002;

// ===============================
// STARS COMPONENT
// ===============================

const Stars = (props) => {
  const ref = useRef();

  // generate stars once
  const sphere = useMemo(
    () => random.inSphere(new Float32Array(STAR_COUNT), { radius: STAR_RADIUS }),
    []
  );

  useFrame((_, delta) => {
    if (!ref.current) return;

    ref.current.rotation.x -= delta / ROTATION_SPEED_X;
    ref.current.rotation.y -= delta / ROTATION_SPEED_Y;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color={STAR_COLOR}
          size={STAR_SIZE}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

// ===============================
// CANVAS WRAPPER
// ===============================

const StarsCanvas = () => {
  return (
    <div className="absolute inset-0 w-full h-auto z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;