import { useContext } from 'react';
import InteractionContext from '../../context/InteractionContext';
import MagneticWrapper from '../cursor/MagneticWrapper';
import useIsMobile from '../../hooks/useIsMobile';
import CONFIG from '../../config/config';

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

export default SocialItem;
