import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';

const Model = ({ path, position, scale, rotation }) => {
  const { scene, animations } = useGLTF(path);
  const { actions, names } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions && names.length > 0) {
      console.log("Available animations:", names);
      actions[names[0]].play();
    }
  }, [actions, names]);

  return <primitive object={scene} position={position} scale={scale} rotation={rotation} />;
};

const SketchfabModel = () => {
  const testModelPath = "anime/scene.gltf"; // Asegúrate de que este archivo esté en la carpeta public

  // Calculamos la mitad del ángulo actual
  const halfRotationY = -Math.PI / 8; // Math.PI / 4 / 2

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 5, 5]} intensity={1} />
        <Model path={testModelPath} position={[0, -1.92, 0]} scale={[1.3, 1.3, 1.3]} rotation={[0, halfRotationY, 0]} /> {/* Ajusta la rotación aquí */}
        <OrbitControls autoRotate autoRotateSpeed={1} enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default SketchfabModel;
