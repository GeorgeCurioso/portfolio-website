import React, { useEffect, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";

// ===============================
// CONSTANTS
// ===============================

const MODEL_PATH = "/rhetorician/scene.gltf";

const MODEL_POSITION = [0, -6.8, -0.1];
const MODEL_SCALE = [1.5, 1.5, 1.5];
const MODEL_ROTATION_Y = -Math.PI / 3;

// ===============================
// MODEL COMPONENT
// ===============================

const Model = ({ path, position, scale, rotation }) => {
  const { scene, animations } = useGLTF(path);
  const { actions, names } = useAnimations(animations, scene);

  useEffect(() => {
    if (!actions || names.length === 0) return;

    const animation = actions[names[0]];

    if (animation) {
      animation.reset().play();
    }

    return () => {
      animation?.stop();
    };
  }, [actions, names]);

  return (
    <primitive
      object={scene}
      position={position}
      scale={scale}
      rotation={rotation}
    />
  );
};

// ===============================
// SCENE COMPONENT
// ===============================

const Rhetorician = () => {
  const rotation = useMemo(() => [0, MODEL_ROTATION_Y, 0], []);

  return (
    <div className="w-full h-screen">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 5, 5]} intensity={1} />

        <Model
          path={MODEL_PATH}
          position={MODEL_POSITION}
          scale={MODEL_SCALE}
          rotation={rotation}
        />

        <OrbitControls
          autoRotate
          autoRotateSpeed={1.25}
          enableZoom={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

export default Rhetorician;