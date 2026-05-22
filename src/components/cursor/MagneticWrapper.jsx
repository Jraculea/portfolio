import { useRef, useContext, useEffect } from 'react';
import InteractionContext from '../../context/InteractionContext';
import useIsMobile from '../../hooks/useIsMobile';

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
      
      const triggerRange = Math.max(22, Math.min(window.innerWidth, window.innerHeight) * 0.04);
      
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

export default MagneticWrapper;
