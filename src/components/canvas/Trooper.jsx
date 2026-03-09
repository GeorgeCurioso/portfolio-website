// ThreeAnimation.jsx
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ThreeAnimation = () => {
  const containerRef = useRef();
  const clockRef = useRef();
  const mixerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    const clock = (clockRef.current = new THREE.Clock());
    const camera = new THREE.PerspectiveCamera(25, container.clientWidth / container.clientHeight, 1, 1000);
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    // Adjust the initial position and rotation of the camera
    camera.position.set(0, 5, 8); // Move the camera higher

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
    directionalLight.position.set(1.5, 1, -1.5);
    scene.add(directionalLight);

    const loader = new GLTFLoader();
    loader.load('./dancing_stormtrooper/scene.gltf', (gltf) => {
      const avatar = gltf.scene;
      const animations = gltf.animations;

      if (animations && animations.length) {
        const mixer = new THREE.AnimationMixer(avatar);
        animations.forEach((clip) => {
          const action = mixer.clipAction(clip);
          action.play();
        });
        mixerRef.current = mixer;
      }

      scene.add(avatar);

      // Center the model in the scene
      const box = new THREE.Box3().setFromObject(avatar);
      const boxCenter = box.getCenter(new THREE.Vector3());
      avatar.position.sub(boxCenter); // Shift the model's position so its center is at the origin

      // Move the model up so it's fully visible
      const modelHeight = box.max.y - box.min.y;
      avatar.position.y += modelHeight / 2 + 0.15;
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0); // Set the clear color to transparent
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false; // Disable zoom
    controls.enableDamping = false; // Disable damping
    controls.screenSpacePanning = true;
    controls.minDistance = 5;
    controls.maxDistance = 40;
    controls.target.set(0, 2, 0); // Adjust the target to be more centered
    controls.update();

    const onWindowResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    const animate = () => {
      requestAnimationFrame(animate);
      render();
    };

    const render = () => {
      const delta = clock.getDelta();
      const slowFactor = 1; // Adjust this value to make the animation slower
      if (mixerRef.current) {
        mixerRef.current.update(delta * slowFactor);
      }
      renderer.render(scene, camera);
    };

    window.addEventListener('resize', onWindowResize);
    animate();

    return () => {
      window.removeEventListener('resize', onWindowResize);
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, right: 0 }} />;
};

export default ThreeAnimation;