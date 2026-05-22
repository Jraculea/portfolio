import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { getLayer } from '../../utils/threeUtils';
import useIsMobile from '../../hooks/useIsMobile';

const BASE_URL = import.meta.env.BASE_URL;

const AnimatedLogo = ({ style, showBackground, onModelLoaded }) => {
  const mountRef = useRef(null);
  const pivotRef = useRef(null);
  const showBackgroundRef = useRef(showBackground);
  const isMobile = useIsMobile();

  useEffect(() => {
    showBackgroundRef.current = showBackground;
  }, [showBackground]);

  useEffect(() => {
    if (!mountRef.current) return;
    
    while (mountRef.current.firstChild) {
      mountRef.current.removeChild(mountRef.current.firstChild);
    }
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 75;
    
    const sizeMultiplier = isMobile ? 0.825 : 0.7;
    const canvasSize = Math.min((Math.min(window.innerWidth, window.innerHeight) * sizeMultiplier), 925);
    
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(canvasSize, canvasSize);
    renderer.setClearColor(0x000000, 0);
    renderer.toneMapping = THREE.ReinhardToneMapping;

    mountRef.current.appendChild(renderer.domElement);

    const renderScene = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(new THREE.Vector2(canvasSize, canvasSize), 2.0, 0.1, 0.1025);
    
    const composer = new EffectComposer(renderer);
    composer.addPass(renderScene);
    composer.addPass(bloomPass);

    const pivot = new THREE.Group();
    scene.add(pivot);
    pivotRef.current = pivot;

    const material = new THREE.MeshMatcapMaterial({
      matcap: new THREE.TextureLoader().load(`${BASE_URL}assets/textures/matcaps/Doku-Doku-no-Mi.png`),
      color: new THREE.Color(0xbb3f3f),
    });

    const sunlight = new THREE.DirectionalLight(0xff5959);
    sunlight.position.y = 2; 
    scene.add(sunlight);
    
    scene.add(new THREE.AmbientLight(0xff5959));

    const circularGradient = getLayer({
      path: `${BASE_URL}assets/images/rad-grad.png`,
      hue: 0.7,
      opacity: 0,
      sat: 0.5,
      size: isMobile ? 110 : 95,
      x: 0,
      y: 0,
      z: -25,
    });
    const halftoneGradient = getLayer({
      path: `${BASE_URL}assets/images/halftone_7.png`,
      hue: 1,
      opacity: 0,
      sat: 0,
      size: isMobile ? 110 : 95,
      x: 0,
      y: 0,
      z: -20,
    });

    circularGradient.userData.targetOpacity = 0.035;
    halftoneGradient.userData.targetOpacity = 0.8;

    scene.add(circularGradient);
    scene.add(halftoneGradient);
    
    const backgroundMeshes = [circularGradient, halftoneGradient];

    const loader = new OBJLoader();
    loader.load(
      `${BASE_URL}assets/models/Mewtwo.obj`,
      (object) => {
        object.traverse((child) => {
          if (child.isMesh) {
            child.material = material;
          }
        });

        const box = new THREE.Box3().setFromObject(object);
        const center = new THREE.Vector3();

        box.getCenter(center);

        object.position.set(-center.x, -center.y, -center.z);
        object.quaternion.setFromAxisAngle(new THREE.Vector3(0, 1, 0), 135.5);
        object.scale.set(0.55, 0.55, 0.55);

        object.updateMatrixWorld(true);

        const scaledBox = new THREE.Box3().setFromObject(object);
        const scaledCenter = new THREE.Vector3();
        scaledBox.getCenter(scaledCenter);

        object.position.x -= scaledCenter.x;
        object.position.y -= scaledCenter.y + (scaledCenter.y * 0.04);
        object.position.z -= scaledCenter.z;

        pivot.add(object);

        if (onModelLoaded) {
          onModelLoaded();
        }
      },
      undefined,
      (err) => {
        console.error("Failed to load Kid Buu model", err);

        const fallback = new THREE.Mesh(new THREE.TorusKnotGeometry(8, 1.35, 64, 16, 2, 3), material);

        pivot.add(fallback);
      }
    );

    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);

      const pivot = pivotRef.current;
      const time = clock.getElapsedTime();
      
      if (pivot) {
        pivot.rotation.y = Math.sin(time * 0.5) * (Math.PI / 6); 
        pivot.position.y = Math.sin(time * 0.25) * 4;
      }

      const showBg = showBackgroundRef.current;
      backgroundMeshes.forEach(mesh => {
          if (mesh.material) {
              const target = showBg ? mesh.userData.targetOpacity : 0;
              mesh.material.opacity += (target - mesh.material.opacity) * 0.05;
              mesh.material.transparent = true;
          }
      });

      composer.render();
    };
    animate();

    return () => {
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      composer.dispose();
    };
  }, [isMobile]);

  return (
    <div 
      ref={mountRef} 
      className="flex items-center justify-center pointer-events-none" 
      style={{ 
        width: isMobile ? '20vmax' : '25vmax',
        height: isMobile ? '20vmax' : '25vmax',
        maxWidth: isMobile ? '300px' : '400px',
        maxHeight: isMobile ? '300px' : '400px',
        ...style 
      }} 
    />
  );
};

export default AnimatedLogo;
