import { useRef, useContext, useEffect } from 'react';
import InteractionContext from '../../context/InteractionContext';
import useIsMobile from '../../hooks/useIsMobile';
import CONFIG from '../../config/config';

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
        width: isMusicButton ? 'clamp(57px, 12vmin, 125px)' : (isMagnetic ? 'clamp(32px, 8vmin, 75px)' : 'clamp(25px, 8vmin, 60px)'),
        height: isMusicButton ? 'clamp(57px, 12vmin, 125px)' : (isMagnetic ? 'clamp(32px, 8vmin, 75px)' : 'clamp(25px, 8vmin, 60px)'),
        opacity: 1,
        mixBlendMode: 'difference',
        willChange: 'transform, width, height'
      }}
    />
  );
};

export default CursorFollower;
