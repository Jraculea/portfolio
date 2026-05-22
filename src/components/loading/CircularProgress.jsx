import useIsMobile from '../../hooks/useIsMobile';
import CONFIG from '../../config/config';

const CircularProgress = ({ progress }) => {
  const windowMaxSize = Math.min(window.innerWidth, window.innerHeight);
  const isMobile = useIsMobile();
  const size = isMobile ? windowMaxSize * 0.45 : windowMaxSize * 0.4;
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

export default CircularProgress;
