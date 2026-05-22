import { useRef, useContext, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import InteractionContext from '../../context/InteractionContext';
import CursorFollower from '../cursor/CursorFollower';
import SocialSidebar from '../social/SocialSidebar';
import useIsMobile from '../../hooks/useIsMobile';
import CONFIG from '../../config/config';

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
    </div>
  );
};

export default PortfolioContent;
