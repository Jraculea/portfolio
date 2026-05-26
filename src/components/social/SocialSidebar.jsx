import SocialItem from './SocialItem';
import useIsMobile from '../../hooks/useIsMobile';
import CONFIG from '../../config/config';

const SocialSidebar = () => {
  const isMobile = useIsMobile();
  return (
    <div 
      className="fixed flex flex-col"
      style={{
        zIndex: CONFIG.stickyButtonZIndex,
        bottom: isMobile ? 'clamp(47px, 8vmin, 75px)' : '11.5vmin',
        left: isMobile ? 'clamp(35px, 8vmin, 55px)' : '8vmin',
        gap: isMobile ? 'clamp(37px, 8vmin, 50px)' : 'clamp(28px, 4.75vmin, 65px)'
      }}
    >
      {CONFIG.socials.map((social) => <SocialItem key={social.name} social={social} />)}
    </div>
  );
};

export default SocialSidebar;
