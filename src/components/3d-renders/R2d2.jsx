import React, { useEffect, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";

// ===============================
// CONSTANTS
// ===============================

const MODEL_PATH = "r2d2/scene.gltf";

const MODEL_POSITION = [0, -3, 1.5];
const MODEL_SCALE = [3.5, 3.5, 3.5];
const MODEL_ROTATION_Y = -Math.PI / -7;

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

const R2d2 = () => {
  const rotation = useMemo(() => [0, MODEL_ROTATION_Y, 0], []);

  return (
    <div className="w-full h-screen">
      <Canvas>
        <ambientLight intensity={1.5} />
        <directionalLight position={[0, 0, 1]} intensity={1.75} />

        <Model
          path={MODEL_PATH}
          position={MODEL_POSITION}
          scale={MODEL_SCALE}
          rotation={rotation}
        />

        <OrbitControls
          enableZoom={false}
        />
      </Canvas>
    </div>
  );
};

export default R2d2;