import * as THREE from 'three';

import { useState, useEffect, useRef, createContext, useContext } from 'react';

import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

import { Play, Pause } from 'lucide-react';

import TopoBackground from './TopoBackground';

let modelLoadedCallback = null;

const BASE_URL = import.meta.env.BASE_URL;

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth < 768;
      setIsMobile(isTouchDevice || isSmallScreen);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};

const getLayer = ({ fog = true, hue = 0.0, opacity = 1, path = `${BASE_URL}assets/images/rad-grad.png`, sat = 0.5, size = 10, x = 0, y = 0, z = 0 }) => {
  let color = new THREE.Color().setHSL(hue, 1, sat);

  const texture = new THREE.TextureLoader().load(path);
  const spriteMaterial = new THREE.SpriteMaterial({
    fog: fog,
    map: texture,
    color: color,
    opacity: opacity,
    transparent: true,
    depthWrite: false,
    blending: THREE.NormalBlending,
  });

  const sprite = new THREE.Sprite(spriteMaterial);

  sprite.scale.set(size, size, size); //size, size, 1
  sprite.position.set(x, y, z);
  
  return sprite;
};

const CONFIG = {
  colors: {
    primary: '#fc2d2dff', //fc2d2dff
    secondary: '#ff5100ff',
    background: '#000000ff',
    text: '#f1f5f9',
    accent: '#ffd900ff',
  },
  fonts: {
    heading: '1.8rem',
    subheading: '1.3rem',
    body: '1.125rem',
    small: '0.875rem',
  },
  loading: {
    duration: 2500,
    messages: [
      'Initializing Portfolio...',
      'Requiring Libraries...',
      'Loading Assets...',
      'Here We Go...',
    ],
  },
  animations: {
    logoFadeIn: 300,
    elementsFadeIn: 850,
    delayBeforeElements: 300,
    elementFadeOut: 850,
    logoMoveUp: 1200,
    contentFadeIn: 1250,
  },
  music: {
    playlist: [
      //                    22gz
      ////'Retaliation',
      'Sniper Gang Freestyle',
      ////'Twirlanta',
      
      //                    a boogie
      'Me and My Guitar',

      //                    che
      'BA$$',
      ////'BLACK SWAN',
      'EARDRUMMER',
      'FREAK NEEK',
      ////'MDMA',
      ////'ROLLING STONE',
      'SLAM PUNK',
      'STAGEDIVIN',
      'WHIPPIN',
      'Her',

      //                    destin conrad
      'DAYDREAM',

      //                    lone
      'catch a kill',
      'jumanji',
      'see no evil',

      //                    ken
      'Money Spread',
      'Thx',
      'the acronym (with Destroy Lonely)',

      //                    carti
      'OLYMPIAN',
      'OPM BABI',
      'OVERLY',

      //                    don toliver
      'Tiramisu',

      //                    esdeekid
      'LV Sandals',

      //                    fake mink
      'Easter Pink',
      'Fidelio',

      //                    govanni
      'EURO JACK',

      //                    jaydes
      'fallen',
      'kesha k',
      'valentine',
      'witchybitchy',
      'xl',

      //                    justin bieber
      'DAISIES',
      'SPEED DEMON',
      'YUKON',

      //                    kura
      'NEXT GIRL',

      //                    tecca
      ////'BAD TIME',
      'Dark Thoughts',
      'Down With Me',
      ////'NEVER LAST',
      ////'NUMBER 2',
      ////'TASTE',

      //                    uzi
      'Chanel Boy',
      'Regular',
      'Relevant',
      'What You Saying',

      //                    lucy bedroque
      'Fenty Face',
      'G6 Anthem',
      'How to Pretend',
      'INFINITUDE UROBOROS',
      'true perspective',
      'Yes, You May',
      'Ultraviolet',

      //                    nett
      'Beach leak',
      'Shut Up',
      'Tommy',
      'Impact (with xaviersobased)',

      //                    pop smoke
      'Merci Beaucoup',

      //                    prettifun
      'Ice Cream',
      'Light',
      'Touch The Sun',

      //                    sheff g
      'No Suburban, Pt. 2',
      ////'Flows',
      ////'Flows, Pt. 2',

      //                    sleepy hallow
      '6am In NY',
      'Calling',
      'Breakin Bad (Okay)',
      'Molly',

      //                    sofaygo
      'BACK IN THE MIX',
      ////'BANKROLLS',
      ////'CHALLENGE',
      'COUNT UP FAST',
      ////'CRASH OUT',
      'EXTREME',
      ////'FIGURE ME OUT',
      'GROW',
      ////'MAYDAY',
      ////'MISSION',
      ////'MONEY AND CLOTHES',
      'MONSTER',
      'OUTSIDE',
      'RELOCATE',
      'SAFE',
      'SEE ME SHINE',
      'WASTED',
      'NOTICE ME',
      'OPEN IT UP',

      'Call me.wav',
      'CLIMB.wav',
      'Fell In Luv.wav',
      'Flex Up (feat. Hardrock).wav',
      'GO OFF.wav',
      'NEW YORK.wav',
      ////'NIGHTLIFE.wav',
      ////'Rain Coat.wav',
      //'SAY IT.wav',
      'STAY DANGEROUS.wav',
      'What I Got.wav',
      
      //                    sza
      'Ghost in the Machine (feat. Phoebe Bridgers)',

      //                    tana
      'Living Lavish',
      'Magic City',

      //                    travis
      'DUMBO',
      'I KNOW',
      'MY EYES',
      '90210 (feat. Kacy Hill)',

      //                    uno
      'Above the Rib',
      'Soufside Love Story (Follow Me)',

      //                    untiljapan
      'Child Soldier',
      'PYRAMIDZ',

      //                    xaviersobased
      'love hate',
    ].map(name => name.includes('.wav') ? `${BASE_URL}assets/music/${name}` : `${BASE_URL}assets/music/${name}.flac`),
    volume: 0.065, //0.065
    loop: false,
    fadeDuration: 250, //350
  },
  socials: [
    { name: 'x', url: 'https://x.com', icon: `${BASE_URL}assets/icons/x.svg` },
    { name: 'instagram', url: 'https://instagram.com', icon: `${BASE_URL}assets/icons/instagram.svg` },
    { name: 'github', url: 'https://github.com', icon: `${BASE_URL}assets/icons/github.svg` },
    { name: 'linkedin', url: 'https://linkedin.com', icon: `${BASE_URL}assets/icons/linkedin.svg` },
  ]
};

const InteractionContext = createContext({
  activeMagneticId: null, 
  setActiveMagneticId: () => {},
  followerPos: { current: { x: -100, y: -100 } },
  musicButtonRect: { current: null }
});

const CursorFollower = () => {
  const cursorRef = useRef(null);
  const mouseRef = useRef({ x: -100, y: -100 });
  const posRef = useRef({ x: -100, y: -100 }); 
  const { activeMagneticId, followerPos, musicButtonRect } = useContext(InteractionContext);
  const isMobile = useIsMobile();
  
  const isMagnetic = activeMagneticId !== null;
  const isMusicButton = activeMagneticId === 'music-button';

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    let frameId;
    const animate = () => {
      const ease = isMagnetic ? 0.045 : 0.1;
      
      let targetX = mouseRef.current.x;
      let targetY = mouseRef.current.y;

      if (isMusicButton && musicButtonRect.current) {
        const rect = musicButtonRect.current;
        const buttonCenterX = rect.left + rect.width / 2;
        const buttonCenterY = rect.top + rect.height / 2;
        
        targetX = buttonCenterX;
        targetY = buttonCenterY;
      }
      
      posRef.current.x += (targetX - posRef.current.x) * ease;
      posRef.current.y += (targetY - posRef.current.y) * ease;

      followerPos.current.x = posRef.current.x;
      followerPos.current.y = posRef.current.y;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0) translate(-50%, -50%)`;
      }
      
      frameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, [isMagnetic, isMusicButton, followerPos, musicButtonRect, isMobile]);

  if (isMobile) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none rounded-full bg-white z-[60] transition-all duration-200 ease-out"
      style={{
        backgroundColor: CONFIG.colors.primary,
        top: 0,
        left: 0,
        width: isMusicButton ? 'clamp(57px, 12vmin, 125px)' : (isMagnetic ? 'clamp(32px, 8vmin, 75px)' : 'clamp(25px, 8vmin, 60px)'), //15px
        height: isMusicButton ? 'clamp(57px, 12vmin, 125px)' : (isMagnetic ? 'clamp(32px, 8vmin, 75px)' : 'clamp(25px, 8vmin, 60px)'), //15px
        opacity: 1,
        mixBlendMode: 'difference',
        willChange: 'transform, width, height'
      }}
    />
  );
};

const MagneticWrapper = ({ children, id }) => {
  const ref = useRef(null);
  const { activeMagneticId, setActiveMagneticId, followerPos } = useContext(InteractionContext);
  const rectRef = useRef(null);
  const isMobile = useIsMobile();
  
  const physics = useRef({ x: 0, y: 0, scale: 1 });

  useEffect(() => {
    const updateRect = () => {
        if (ref.current) rectRef.current = ref.current.getBoundingClientRect();
    };
    updateRect();
    window.addEventListener('resize', updateRect);
    return () => window.removeEventListener('resize', updateRect);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    let frameId;
    const animate = () => {
      if (!rectRef.current) {
          frameId = requestAnimationFrame(animate);
          return;
      }

      const fx = followerPos.current.x;
      const fy = followerPos.current.y;
      const { left, top, width, height } = rectRef.current;
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const distance = Math.hypot(fx - centerX, fy - centerY);
      
      const triggerRange = Math.max(22, Math.min(window.innerWidth, window.innerHeight) * 0.04); //0.0325
      
      let targetX = 0;
      let targetY = 0;
      let targetScale = 1;

      if (distance < triggerRange && (activeMagneticId === null || activeMagneticId === id)) {
        if (activeMagneticId !== id) setActiveMagneticId(id);
        
        targetX = (fx - centerX);
        targetY = (fy - centerY);
        targetScale = 1;
      } else {
        if (activeMagneticId === id && distance > triggerRange + 10) {
            setActiveMagneticId(null);
        }

        targetX = 0;
        targetY = 0;
        targetScale = 1;
      }

      const ease = 0.08;
      physics.current.x += (targetX - physics.current.x) * ease;
      physics.current.y += (targetY - physics.current.y) * ease;
      physics.current.scale += (targetScale - physics.current.scale) * ease;

      if (ref.current) {
        ref.current.style.transform = `translate3d(${physics.current.x}px, ${physics.current.y}px, 0) scale(${physics.current.scale})`;
      }
      frameId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frameId);
  }, [id, activeMagneticId, setActiveMagneticId, followerPos, isMobile]);

  return <div ref={ref} className="will-change-transform">{children}</div>;
};

const AnimatedLogo = ({ style, showBackground }) => {
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
      hue: 0.7, //0.7+
      opacity: 0,
      sat: 0.5,
      size: isMobile ? 110 : 95,
      x: 0,
      y: 0,
      z: -25,
    });
    const halftoneGradient = getLayer({
      path: `${BASE_URL}assets/images/halftone_7.png`,
      hue: 1, //0.7+
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
      `${BASE_URL}assets/models/KidBuu.obj`,
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
        object.scale.set(0.25, 0.25, 0.25);

        object.updateMatrixWorld(true);

        const scaledBox = new THREE.Box3().setFromObject(object);
        const scaledCenter = new THREE.Vector3();
        scaledBox.getCenter(scaledCenter);

        object.position.x -= scaledCenter.x;
        object.position.y -= scaledCenter.y + (scaledCenter.y * 0.04);
        object.position.z -= scaledCenter.z;

        pivot.add(object);

        if (modelLoadedCallback) {
          modelLoadedCallback();
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
        pivot.rotation.y = Math.sin(time * 0.5) * (Math.PI / 4); 
        pivot.position.y = Math.sin(time * 0.25) * 2;
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

const CircularProgress = ({ progress }) => {
  const windowMaxSize = Math.min(window.innerWidth, window.innerHeight);
  const isMobile = useIsMobile();
  const size = isMobile ? windowMaxSize * 0.45 : windowMaxSize * 0.4; // 0.28125
  const strokeWidth = 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg width={size} height={size} className="transform -rotate-90">
      <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={CONFIG.colors.background} strokeWidth={strokeWidth} opacity="0.3" />
      <circle
        cx={size / 2} cy={size / 2} r={radius} fill="none"
        stroke={`url(#gradient)`} strokeWidth={strokeWidth} strokeLinecap="round"
        strokeDasharray={circumference} strokeDashoffset={offset}
        style={{ transition: 'stroke-dashoffset 0.3s ease' }}
      />
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={CONFIG.colors.primary} />
          <stop offset="50%" stopColor={CONFIG.colors.secondary} />
          <stop offset="100%" stopColor={CONFIG.colors.accent} />
        </linearGradient>
      </defs>
    </svg>
  );
};

const LoadingScreen = ({ progress, message, onComplete, startLoading }) => {
  const [logoVisible, setLogoVisible] = useState(false);
  const [elementsVisible, setElementsVisible] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [logoTransform, setLogoTransform] = useState('translateY(0)');
  const [modelLoaded, setModelLoaded] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    modelLoadedCallback = () => {
      setModelLoaded(true);
    };

    setLogoVisible(true);

    return () => {
      modelLoadedCallback = null;
    };
  }, []);

  useEffect(() => {
    if (modelLoaded) {
      setTimeout(() => {
        setElementsVisible(true);
        startLoading();
      }, CONFIG.animations.logoFadeIn + CONFIG.animations.delayBeforeElements);
    }
  }, [modelLoaded, startLoading]);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => setIsReady(true), 700);
    }
  }, [progress]);

  const handleStart = () => {
    setExiting(true);
    setTimeout(() => {
      setLogoTransform('translateY(-150vh)');
      setTimeout(() => {
        onComplete();
      }, CONFIG.animations.logoMoveUp);
    }, 200);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden"
      style={{ backgroundColor: CONFIG.colors.background }}>
      
      <div className="flex flex-col items-center gap-[2vmin] relative">
        <div
          className="font-bold tracking-wider transition-all duration-500 relative z-20"
          style={{ 
            color: CONFIG.colors.text,
            fontSize: isMobile ? 'clamp(0.8rem, 2vmin, 1.75rem)' : 'clamp(1rem, 4.5vmin, 2rem)',
            opacity: elementsVisible && !isReady && !exiting ? 1 : 0,
            transform: isReady ? 'scale(0.8)' : 'scale(1)'
          }}
        >
          {progress}%
        </div>

        <div className="relative flex items-center justify-center">
          <div 
            className="absolute transition-all flex items-center justify-center z-0"
            style={{
              opacity: logoVisible ? 1 : 0,
              transform: `${logoTransform} ${isReady && !exiting ? 'scale(1.1)' : 'scale(1)'}`,
              transition: exiting 
                ? `transform ${CONFIG.animations.logoMoveUp}ms ease-in-out, opacity 500ms ease-out` 
                : `opacity 500ms ease-in-out, transform 800ms cubic-bezier(0.4, 0, 0.2, 1)`
            }}
          >
            <AnimatedLogo showBackground={elementsVisible} />
          </div>

          <div 
            className="transition-all duration-500 relative z-10"
            style={{
              opacity: elementsVisible && !isReady && !exiting ? 1 : 0,
              transform: isReady ? 'scale(1.1)' : 'scale(1)'
            }}
          >
            <CircularProgress progress={progress} />
          </div>
        </div>

        <div className="relative w-full flex justify-center" style={{ height: '4vmin', minHeight: '1vmin' }}>
          <div
            className="absolute font-medium tracking-wide transition-opacity duration-500 pointer-events-none"
            style={{ 
              color: CONFIG.colors.text, 
              fontSize: isMobile ? 'clamp(0.6rem, 2vmin, 1.4rem)' : 'clamp(0.75rem, 3.25vmin, 1.5rem)',
              opacity: elementsVisible && !isReady && !exiting ? 1 : 0,
              animation: elementsVisible && !isReady && !exiting ? 'pulse 2s infinite' : 'none'
            }}
          >
            {message}
          </div>

          <button
            onClick={handleStart}
            className={`
              absolute rounded-full font-bold uppercase tracking-[0.25em]
              transition-all duration-[3000ms] ease-out border-2
              hover:shadow-[0_0_25px_rgba(252,45,45,0.3)]
              group
            `}
            style={{
              fontSize: isMobile ? 'clamp(0.7rem, 2vmin, 1.5rem)' : 'clamp(0.1rem, 4vmin, 1.4rem)',
              padding: isMobile ? 'clamp(0.25rem, 1.375vmin, 1.15rem) clamp(2rem, 8vmin, 5rem)' : 'clamp(0.35rem, 1.375vmin, 1.375rem) clamp(2rem, 7.75vmin, 7.75rem)',
              opacity: isReady && !exiting ? 1 : 0,
              transform: isReady && !exiting ? (isMobile ? 'translateY(1.15vmin)' : 'translateY(-0.75vmin)') : 'translateY(12vmin)', 
              pointerEvents: isReady && !exiting ? 'auto' : 'none',
              borderColor: CONFIG.colors.primary,
              backgroundColor: 'transparent',
              color: CONFIG.colors.primary,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transition = 'all 0.15s ease-out allow-discrete';
              e.currentTarget.style.backgroundColor = CONFIG.colors.primary;
              e.currentTarget.style.color = CONFIG.colors.background;
              e.currentTarget.style.borderColor = 'transparent';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transition = 'all 0.45s ease-out allow-discrete'; 
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = CONFIG.colors.primary;
              e.currentTarget.style.borderColor = CONFIG.colors.primary;
            }}
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

const SocialItem = ({ social }) => {
  const { activeMagneticId } = useContext(InteractionContext);
  const isActive = activeMagneticId === social.name;
  const isMobile = useIsMobile();

  return (
    <MagneticWrapper id={social.name}>
      <a href={social.url} target="_blank" rel="noopener noreferrer" className="block p-2" title={social.name}>
        <div 
          className="transition-colors duration-200"
          style={{
            backgroundColor: isActive ? CONFIG.colors.primary : CONFIG.colors.text,
            maskImage: `url(${social.icon})`,
            WebkitMaskImage: `url(${social.icon})`,
            maskSize: 'contain',
            WebkitMaskSize: 'contain',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
            maskPosition: 'center',
            WebkitMaskPosition: 'center',
            width: '1.625vmax',
            height: '1.625vmax',
            minWidth: isMobile ? '16px' : '8px',
            minHeight: isMobile ? '16px' : '8px',
            maxWidth: '26px',
            maxHeight: '26px',
          }}
        />
      </a>
    </MagneticWrapper>
  );
};

const SocialSidebar = () => {
  const isMobile = useIsMobile();
  return (
    <div 
      className="fixed flex flex-col z-50"
      style={{
        bottom: isMobile ? 'clamp(50px, 8vmin, 75px)' : '11.5vmin',
        left: isMobile ? 'clamp(40px, 8vmin, 55px)' : '8vmin',
        gap: isMobile ? 'clamp(35px, 8vmin, 50px)' : 'clamp(28px, 4.75vmin, 65px)'
      }}
    >
      {CONFIG.socials.map((social) => <SocialItem key={social.name} social={social} />)}
    </div>
  );
};

const PortfolioContent = ({ isVisible, onMusicToggle, isPlaying }) => {
  const buttonRef = useRef(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const { activeMagneticId, setActiveMagneticId, followerPos, musicButtonRect } = useContext(InteractionContext);
  const isMobile = useIsMobile();

  const isMusicActive = activeMagneticId === 'music-button';

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  useEffect(() => {
    const updateRect = () => {
      if (buttonRef.current) {
        musicButtonRect.current = buttonRef.current.getBoundingClientRect();
      }
    };
    
    updateRect();
    window.addEventListener('resize', updateRect);
    window.addEventListener('scroll', updateRect);
    
    return () => {
      window.removeEventListener('resize', updateRect);
      window.removeEventListener('scroll', updateRect);
    };
  }, [musicButtonRect, isVisible]);

  useEffect(() => {
    if (isMobile || !buttonRef.current) return;

    let frameId;
    const animate = () => {
      if (!buttonRef.current) {
        frameId = requestAnimationFrame(animate);
        return;
      }

      musicButtonRect.current = buttonRef.current.getBoundingClientRect();

      const rect = musicButtonRect.current;
      const buttonCenterX = rect.left + rect.width / 2;
      const buttonCenterY = rect.top + rect.height / 2;
      const mouseX = mousePos.current.x;
      const mouseY = mousePos.current.y;
      const distance = Math.hypot(mouseX - buttonCenterX, mouseY - buttonCenterY);
      
      const triggerRange = Math.max(30, Math.min(window.innerWidth, window.innerHeight) * 0.05);

      const id = 'music-button';

      if (distance < triggerRange) {
        if (activeMagneticId !== id) {
          setActiveMagneticId(id);
        }
      } else {
        if (activeMagneticId === id) {
          setActiveMagneticId(null);
        }
      }

      frameId = requestAnimationFrame(animate);
    };
    animate();

    return () => cancelAnimationFrame(frameId);
  }, [activeMagneticId, setActiveMagneticId, musicButtonRect, isVisible, isMobile]);

  return (
    <div
      className="min-h-screen transition-opacity"
      style={{
        backgroundColor: CONFIG.colors.background,
        opacity: isVisible ? 1 : 0,
        transitionDuration: `${CONFIG.animations.contentFadeIn}ms`,
        padding: isMobile ? 'clamp(12px, 3vmin, 20px)' : '2rem'
      }}
    >
      <CursorFollower />
      <SocialSidebar />

      {isVisible && (
        <button
          ref={buttonRef}
          onClick={onMusicToggle}
          className="fixed rounded-full backdrop-blur-sm transition-all hover:scale-110 active:scale-95 z-50 shadow-lg flex items-center justify-center touch-manipulation"
          style={{
            backgroundColor: `${CONFIG.colors.primary}40`,
            border: `2px solid ${CONFIG.colors.primary}`,
            width: isMobile ? 'clamp(55px, 10vmin, 110px)' : 'clamp(45px, 9vmin, 100px)',
            height: isMobile ? 'clamp(55px, 10vmin, 110px)' : 'clamp(45px, 9vmin, 100px)',
            top: isMobile ? 'clamp(40px, 3vmin, 50px)' : '8vmin',
            right: isMobile ? 'clamp(30px, 3vmin, 35px)' : '8vmin',
            padding: 0,
          }}
        >
          {isPlaying ? (
            <Pause 
              size={isMobile ? "2.25vmax" : "clamp(5px, 3.25vmin, 40px)"}
              style={{ 
                color: isMusicActive ? CONFIG.colors.primary : CONFIG.colors.text, 
                minWidth: '16px', 
                minHeight: '20px',
                transition: 'color 0.2s ease'
              }} 
            />
          ) : (
            <Play 
              size={isMobile ? "2.25vmax" : "clamp(5px, 3.25vmin, 40px)"}
              style={{ 
                color: isMusicActive ? CONFIG.colors.primary : CONFIG.colors.text, 
                minWidth: '16px', 
                minHeight: '20px',
                transition: 'color 0.2s ease'
              }} 
            />
          )}
        </button>
      )}

      {/* / */}
    </div>
  );
};

export default function PortfolioWebsite() {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [canStartLoading, setCanStartLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeMagneticId, setActiveMagneticId] = useState(null); 
  const followerPos = useRef({ x: -100, y: -100 });
  const musicButtonRect = useRef(null);

  const audioRef = useRef(null);
  const currentSongIndexRef = useRef(-1);
  const fadeIntervalRef = useRef(null);

  const fadeVolume = (fadeIn, callback) => {
    if (!audioRef.current) return;
    if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
    const targetVolume = fadeIn ? CONFIG.music.volume : 0;
    const startVolume = audioRef.current.volume;
    const steps = 25;
    const stepDuration = CONFIG.music.fadeDuration / steps;
    const volumeChange = (targetVolume - startVolume) / steps;
    let currentStep = 0;
    fadeIntervalRef.current = setInterval(() => {
      currentStep++;
      const newVolume = startVolume + (volumeChange * currentStep);
      if (audioRef.current) audioRef.current.volume = Math.max(0, Math.min(1, newVolume));
      if (currentStep >= steps) {
        clearInterval(fadeIntervalRef.current);
        fadeIntervalRef.current = null;
        if (callback) callback();
      }
    }, stepDuration);
  };

  const loadRandomSong = () => {
    if (CONFIG.music.playlist.length === 0) return;
    let randomIndex;
    do { randomIndex = Math.floor(Math.random() * CONFIG.music.playlist.length); } 
    while (randomIndex === currentSongIndexRef.current && CONFIG.music.playlist.length > 1);
    currentSongIndexRef.current = randomIndex;
    if (audioRef.current) { audioRef.current.src = CONFIG.music.playlist[randomIndex]; audioRef.current.load(); }
  };

  useEffect(() => {
    if (CONFIG.music.playlist.length > 0) {
      audioRef.current = new Audio();
      audioRef.current.volume = 0; 
      audioRef.current.addEventListener('ended', () => {
        loadRandomSong();
        audioRef.current.volume = 0;
        audioRef.current.play().then(() => fadeVolume(true)).catch(() => setIsPlaying(false));
      });
      loadRandomSong();
    }
    return () => {
      if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
      if (audioRef.current) { audioRef.current.pause(); audioRef.current = null; }
    };
  }, []);

  useEffect(() => {
    if (showContent && audioRef.current) {
      audioRef.current.volume = 0;
      audioRef.current.play().then(() => { setIsPlaying(true); fadeVolume(true); })
        .catch(err => { console.log('Auto-play prevented:', err); setIsPlaying(false); });
    }
  }, [showContent]);

  useEffect(() => {
    if (!canStartLoading) return;
    const duration = CONFIG.loading.duration;
    const interval = 50;
    const steps = duration / interval;
    const increment = 100 / steps;
    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + increment, 100);
        const newIndex = Math.floor((next / 100) * CONFIG.loading.messages.length);
        setMessageIndex(Math.min(newIndex, CONFIG.loading.messages.length - 1));
        if (next >= 100) clearInterval(timer);
        return next;
      });
    }, interval);
    return () => clearInterval(timer);
  }, [canStartLoading]);

  return (
    <InteractionContext.Provider value={{ activeMagneticId, setActiveMagneticId, followerPos, musicButtonRect }}>
      <div className="relative" style={{ backgroundColor: CONFIG.colors.background }}>
        <TopoBackground externalAudioRef={audioRef} />

        {/* <audio ref={audioRef} crossOrigin="anonymous" loop /> */}
        
        {showLoadingScreen && (
          <LoadingScreen
            progress={Math.round(progress)}
            message={CONFIG.loading.messages[messageIndex]}
            onComplete={() => { setShowLoadingScreen(false); setShowContent(true); }}
            startLoading={() => setCanStartLoading(true)}
          />
        )}
        <PortfolioContent isVisible={showContent} onMusicToggle={() => {
           if (isPlaying) { fadeVolume(false, () => audioRef.current.pause()); setIsPlaying(false); }
           else { audioRef.current.volume = 0; audioRef.current.play().then(() => { fadeVolume(true); setIsPlaying(true); }); }
        }} isPlaying={isPlaying} />
      </div>
    </InteractionContext.Provider>
  );
}
