import { useRef, useContext, useEffect } from 'react';
import InteractionContext from '../../context/InteractionContext';
import useIsMobile from '../../hooks/useIsMobile';
import CONFIG from '../../config/config';

const CursorFollower = () => {
  const cursorRef = useRef(null);
  const mouseRef = useRef({ x: -100, y: -100 });
  const posRef = useRef({ x: -100, y: -100 });
  const sizeRef = useRef({ width: 60, height: 60 });
  const { activeMagneticId, followerPos, musicButtonRect, projectCellRects, emailTextRect } = useContext(InteractionContext);
  const isMobile = useIsMobile();

  const isMagnetic = activeMagneticId !== null;
  const isMusicButton = activeMagneticId === 'music-button';
  const isProjectCell = activeMagneticId && activeMagneticId.startsWith('project-');
  const isEmailText = activeMagneticId === 'email-text';

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    let frameId;
    const animate = () => {
      const ease = isMagnetic ? 0.085 : 0.15;
      const vmin = Math.min(window.innerWidth, window.innerHeight) / 100;

      let targetX = mouseRef.current.x;
      let targetY = mouseRef.current.y;
      let targetWidth = isMusicButton ? Math.max(57, Math.min(125, 12 * vmin)) : (isMagnetic ? Math.max(50, Math.min(85, 8 * vmin)) : Math.max(25, Math.min(65, 6 * vmin)));
      let targetHeight = isMusicButton ? Math.max(57, Math.min(125, 12 * vmin)) : (isMagnetic ? Math.max(50, Math.min(85, 8 * vmin)) : Math.max(25, Math.min(65, 6 * vmin)));

      if (isMusicButton && musicButtonRect.current) {
        const rect = musicButtonRect.current;
        const buttonCenterX = rect.left + rect.width / 2;
        const buttonCenterY = rect.top + rect.height / 2;

        targetX = buttonCenterX;
        targetY = buttonCenterY;
      } else if (isProjectCell && projectCellRects.current[activeMagneticId]) {
        const rect = projectCellRects.current[activeMagneticId];
        const scale = 1.05;

        targetX = rect.x + rect.width / 2;
        targetY = rect.top + rect.height / 2;
        targetWidth = rect.width * scale;
        targetHeight = rect.height * scale;
      } else if (isEmailText && emailTextRect.current) {
        const rect = emailTextRect.current;

        targetX = (rect.left + rect.width / 2) + 1;
        targetY = rect.bottom - 7;
        targetWidth = rect.width * 1;
        targetHeight = 0;
      }

      posRef.current.x += (targetX - posRef.current.x) * ease;
      posRef.current.y += (targetY - posRef.current.y) * ease;
      sizeRef.current.width += (targetWidth - sizeRef.current.width) * ease;
      sizeRef.current.height += (targetHeight - sizeRef.current.height) * ease;

      followerPos.current.x = posRef.current.x;
      followerPos.current.y = posRef.current.y;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0) translate(-50%, -50%)`;
        cursorRef.current.style.width = `${sizeRef.current.width}px`;
        cursorRef.current.style.height = `${sizeRef.current.height}px`;
      }

      frameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, [isMagnetic, isMusicButton, isProjectCell, isEmailText, activeMagneticId, followerPos, musicButtonRect, projectCellRects, emailTextRect, isMobile]);

  if (isMobile) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none bg-white transition-all duration-200 ease-out"
      style={{
        backgroundColor: CONFIG.colors.primary,
        top: 0,
        left: 0,
        width: isMusicButton ? 'clamp(57px, 12vmin, 125px)' : (isMagnetic ? 'clamp(32px, 8vmin, 75px)' : 'clamp(25px, 8vmin, 60px)'),
        height: isMusicButton ? 'clamp(57px, 12vmin, 125px)' : (isMagnetic ? 'clamp(32px, 8vmin, 75px)' : 'clamp(25px, 8vmin, 60px)'),
        opacity: 1,
        mixBlendMode: 'difference',
        zIndex: CONFIG.cursorFollowerZIndex,
        borderRadius: isEmailText ? '0' : (isProjectCell ? '8px' : '50%'),
        willChange: 'transform, width, height'
      }}
    />
  );
};

export default CursorFollower;
