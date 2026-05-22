import { useState, useEffect, useRef } from 'react';

import TopoBackground from './components/background/TopoBackground';
import InteractionContext from './context/InteractionContext';
import LoadingScreen from './components/loading/LoadingScreen';
import PortfolioContent from './components/portfolio/PortfolioContent';
import CONFIG from './config/config';

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
