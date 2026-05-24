import { useRef, useContext, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import InteractionContext from '../../context/InteractionContext';
import CursorFollower from '../cursor/CursorFollower';
import SocialSidebar from '../social/SocialSidebar';
import Projects from './Projects';
import useIsMobile from '../../hooks/useIsMobile';
import CONFIG from '../../config/config';

const PortfolioContent = ({ isVisible, onMusicToggle, isPlaying }) => {
  const buttonRef = useRef(null);
  const emailTextRef = useRef(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const { activeMagneticId, setActiveMagneticId, followerPos, musicButtonRect, projectCellRects, emailTextRect } = useContext(InteractionContext);
  const isMobile = useIsMobile();

  const isMusicActive = activeMagneticId === 'music-button';
  const isEmailText = activeMagneticId === 'email-text';

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
      if (emailTextRef.current) {
        emailTextRect.current = emailTextRef.current.getBoundingClientRect();
      }
    };

    updateRect();
    window.addEventListener('resize', updateRect);
    window.addEventListener('scroll', updateRect);

    return () => {
      window.removeEventListener('resize', updateRect);
      window.removeEventListener('scroll', updateRect);
    };
  }, [musicButtonRect, emailTextRect, isVisible]);

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

  useEffect(() => {
    if (isMobile) return;

    let frameId;
    const animate = () => {
      const mouseX = mousePos.current.x;
      const mouseY = mousePos.current.y;
      let closestCellId = null;
      let closestDistance = Infinity;

      const getDistanceToRectBorder = (px, py, rect) => {
        const dx = Math.max(rect.left - px, 0, px - (rect.left + rect.width));
        const dy = Math.max(rect.top - py, 0, py - (rect.top + rect.height));
        return Math.hypot(dx, dy);
      };

      Object.entries(projectCellRects.current).forEach(([cellId, rect]) => {
        if (!rect) return;
        const distance = getDistanceToRectBorder(mouseX, mouseY, rect);
        const triggerRange = Math.max(50, Math.max(rect.width, rect.height) * 0.065);
        if (distance < triggerRange && distance < closestDistance) {
          closestDistance = distance;
          closestCellId = cellId;
        }
      });

      if (emailTextRect.current) {
        const rect = emailTextRect.current;
        const distance = getDistanceToRectBorder(mouseX, mouseY, rect);
        const triggerRange = Math.max(30, Math.min(rect.width, rect.height) * 0.5);

        if (distance < triggerRange && distance < closestDistance) {
          closestDistance = distance;
          closestCellId = 'email-text';
        }
      }

      if (closestCellId && activeMagneticId !== closestCellId) {
        setActiveMagneticId(closestCellId);
      } else if (!closestCellId && activeMagneticId && (activeMagneticId.startsWith('project-') || activeMagneticId === 'email-text')) {
        setActiveMagneticId(null);
      }

      frameId = requestAnimationFrame(animate);
    };
    animate();

    return () => cancelAnimationFrame(frameId);
  }, [activeMagneticId, setActiveMagneticId, projectCellRects, emailTextRect, isMobile]);

  return (
    <div
      className="min-h-screen transition-opacity"
      style={{
        backgroundColor: 'transparent',
        opacity: isVisible ? 1 : 0,
        transitionDuration: `${CONFIG.animations.contentFadeIn}ms`,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1
      }}
    >
      <CursorFollower />
      <SocialSidebar />

      {isVisible && (
  <div
    className="flex flex-col items-center"
    style={{
      padding: isMobile ? 'clamp(12px, 3vmin, 20px) 1rem 0 1rem' : '2rem 0 0 0',
      overflowY: 'auto',
      maxHeight: '100vh',
      paddingBottom: '4rem'
    }}
  >
    <div className="text-center" style={{ maxWidth: isMobile ? '70%' : '800px' }}>
      <h1
        className="font-bold"
        style={{
          color: '#ffffff',
          fontSize: isMobile ? 'clamp(1.25rem, 8vmin, 3.25rem)' : 'clamp(2.5rem, 6vmin, 4.5rem)',
          textShadow: '0 0 20px rgba(255, 255, 255, 0.2), 0 0 40px rgba(255, 255, 255, 0.7)',
          letterSpacing: '0.05em',
          lineHeight: '1.2',
          marginBottom: isMobile ? '1rem' : '2.25rem'
        }}
      >
        {CONFIG.jobTitle}
      </h1>

      <p
        style={{
          color: CONFIG.colors.text,
          fontSize: isMobile ? 'clamp(0.85rem, 2.8vmin, 1.15rem)' : 'clamp(1.15rem, 2.2vmin, 1.4rem)',
          textShadow: '0 0 15px rgba(255, 255, 255, 0), 0 0 30px rgba(255, 255, 255, 0)',
          lineHeight: '1.6',
          opacity: 0.85,
          marginBottom: isMobile ? '2rem' : '4.5rem'
        }}
      >
        {CONFIG.personalDescription}
      </p>

      <p
        style={{
          color: CONFIG.colors.primary,
          fontSize: isMobile ? 'clamp(1rem, 3.2vmin, 1.325rem)' : 'clamp(1.35rem, 2.6vmin, 1.65rem)',
          textShadow: '0 0 15px rgba(255, 255, 255, 0.2), 0 0 30px rgba(255, 255, 255, 0.7)',
          fontWeight: 500,
          opacity: 0.95,
          marginBottom: isMobile ? '1rem' : '2.25rem'
        }}
      >
        <span style={{ display: 'block', marginBottom: '0.25rem' }}>
          {CONFIG.callToAction1}
        </span>
        <span style={{ display: 'block', lineHeight: '1.2' }}>
          {CONFIG.callToAction2}
        </span>
      </p>

      <button
        ref={emailTextRef}
        onClick={() => {
          navigator.clipboard.writeText(`${CONFIG.emailUsername}@${CONFIG.emailDomainName}.${CONFIG.emailTopLevelDomain}`);
        }}
        style={{
          background: 'none',
          border: 'none',
          color: CONFIG.colors.text,
          fontSize: isMobile ? 'clamp(0.85rem, 2.8vmin, 1.15rem)' : 'clamp(1.15rem, 2.2vmin, 1.4rem)',
          textShadow: '0 0 15px rgba(255, 255, 255, 0), 0 0 30px rgba(255, 255, 255, 0)',
          lineHeight: '1.6',
          opacity: 0.85,
          textDecoration: isEmailText ? 'underline' : 'none',
          textDecorationColor: isEmailText ? CONFIG.colors.primary : 'inherit',
          textDecorationThickness: '2px',
          transition: 'text-decoration 0.2s ease, text-decoration-color 0.2s ease',
          cursor: 'pointer',
          padding: 0,
          textAlign: 'center'
        }}
      >
        <span style={{ color: isEmailText ? CONFIG.colors.primary : 'inherit', transition: 'color 0.2s ease' }}>email:</span> {CONFIG.emailUsername} [at] {CONFIG.emailDomainName} [dot] {CONFIG.emailTopLevelDomain}
      </button>

    </div>
    
    <Projects />
  </div>
)}

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
