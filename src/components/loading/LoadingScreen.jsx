import { useState, useEffect } from 'react';
import AnimatedLogo from './AnimatedLogo';
import CircularProgress from './CircularProgress';
import useIsMobile from '../../hooks/useIsMobile';
import CONFIG from '../../config/config';

const LoadingScreen = ({ progress, message, onComplete, startLoading }) => {
  const [logoVisible, setLogoVisible] = useState(false);
  const [elementsVisible, setElementsVisible] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [logoTransform, setLogoTransform] = useState('translateY(0)');
  const [modelLoaded, setModelLoaded] = useState(false);
  const isMobile = useIsMobile();

  const handleModelLoaded = () => {
    setModelLoaded(true);
  };

  useEffect(() => {
    setLogoVisible(true);
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
            <AnimatedLogo showBackground={elementsVisible} onModelLoaded={handleModelLoaded} />
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

export default LoadingScreen;
