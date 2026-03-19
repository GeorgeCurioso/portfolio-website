// Trooper.jsx

import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// ===============================
// CONFIGURATION
// ===============================

const CAMERA_FOV = 25;
const CAMERA_NEAR = 1;
const CAMERA_FAR = 1000;

const CAMERA_POSITION = [0, 5, 8];

const AMBIENT_LIGHT_INTENSITY = 0.6;
const DIRECTIONAL_LIGHT_INTENSITY = 3;

const MODEL_PATH = "/dancing_stormtrooper/scene.gltf";

const ThreeAnimation = () => {
  const containerRef = useRef(null);
  const clockRef = useRef(new THREE.Clock());
  const mixerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    // ===============================
    // SCENE
    // ===============================

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      CAMERA_FOV,
      container.clientWidth / container.clientHeight,
      CAMERA_NEAR,
      CAMERA_FAR
    );

    camera.position.set(...CAMERA_POSITION);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);

    container.appendChild(renderer.domElement);

    // ===============================
    // LIGHTING
    // ===============================

    const ambientLight = new THREE.AmbientLight(
      0xffffff,
      AMBIENT_LIGHT_INTENSITY
    );
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(
      0xffffff,
      DIRECTIONAL_LIGHT_INTENSITY
    );

    directionalLight.position.set(1.5, 1, -1.5);
    scene.add(directionalLight);

    // ===============================
    // CONTROLS
    // ===============================

    const controls = new OrbitControls(camera, renderer.domElement);

    controls.enableZoom = false;
    controls.enableDamping = false;
    controls.screenSpacePanning = true;

    controls.minDistance = 5;
    controls.maxDistance = 40;

    controls.target.set(0, 2, 0);
    controls.update();

    // ===============================
    // MODEL LOADER
    // ===============================

    const loader = new GLTFLoader();

    loader.load(MODEL_PATH, (gltf) => {
      const model = gltf.scene;
      const animations = gltf.animations;

      if (animations?.length) {
        const mixer = new THREE.AnimationMixer(model);

        animations.forEach((clip) => {
          mixer.clipAction(clip).play();
        });

        mixerRef.current = mixer;
      }

      scene.add(model);

      // Center model

      const box = new THREE.Box3().setFromObject(model);
      const center = box.getCenter(new THREE.Vector3());

      model.position.sub(center);

      const height = box.max.y - box.min.y;
      model.position.y += height / 2 + 0.15;
    });

    // ===============================
    // RESIZE HANDLER
    // ===============================

    const handleResize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // ===============================
    // ANIMATION LOOP
    // ===============================

    const clock = clockRef.current;

    const animate = () => {
      requestAnimationFrame(animate);

      const delta = clock.getDelta();

      if (mixerRef.current) {
        mixerRef.current.update(delta);
      }

      renderer.render(scene, camera);
    };

    animate();

    // ===============================
    // CLEANUP
    // ===============================

    return () => {
      window.removeEventListener("resize", handleResize);

      controls.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
      }}
    />
  );
};

export default ThreeAnimation;