import React, { useEffect, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";

// ===============================
// CONSTANTS
// ===============================

const MODEL_PATH = "anime/scene.gltf";

const MODEL_POSITION = [0, -1.92, 0];
const MODEL_SCALE = [1.3, 1.3, 1.3];
const MODEL_ROTATION_Y = -Math.PI / 8;

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

const Anime = () => {
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
          autoRotateSpeed={1}
          enableZoom={false}
        />
      </Canvas>
    </div>
  );
};

export default Anime;