const BASE_URL = import.meta.env.BASE_URL;

const CONFIG = {
  colors: {
    primary: '#fc2d2dff',
    secondary: '#ff5100ff',
    background: '#000000ff',
    text: '#f1f5f9',
    accent: '#ffd900ff',
  },
  fonts: {
    heading: '1.8rem',
    subheading: '1.3rem',
    body: '1.125rem',
    small: '0.875rem',
  },
  loading: {
    duration: 2500,
    messages: [
      'Initializing Portfolio...',
      'Requiring Libraries...',
      'Loading Assets...',
      'Here We Go...',
    ],
  },
  animations: {
    logoFadeIn: 300,
    elementsFadeIn: 850,
    delayBeforeElements: 300,
    elementFadeOut: 850,
    logoMoveUp: 1200,
    contentFadeIn: 1250,
  },
  music: {
    playlist: [
      'butterflies',
      'four seasons',
      'have to',
      'wrong faces',
      'BA$$',
      'EARDRUMMER',
      'DAYDREAM',
      'Tiramisu',
      'valentine',
      'DAISIES',
      'SPEED DEMON',
      'YUKON',
      'Dark Thoughts',
      'Down With Me',
      'How to Pretend',
      'INFINITUDE UROBOROS',
      'Yes, You May',
      'Satellite',
      'MONSTER',
      'OUTSIDE',
      'Ghost in the Machine (feat. Phoebe Bridgers)',
      'I KNOW',
      'MY EYES',
      'Soufside Love Story (Follow Me)',
    ].map(name => name.includes('.wav') ? `${BASE_URL}assets/music/${name}` : `${BASE_URL}assets/music/${name}.flac`),
    volume: 0.065,
    loop: false,
    fadeDuration: 250,
  },
  socials: [
    { name: 'x', url: 'https://x.com', icon: `${BASE_URL}assets/icons/x.svg` },
    { name: 'instagram', url: 'https://instagram.com', icon: `${BASE_URL}assets/icons/instagram.svg` },
    { name: 'github', url: 'https://github.com', icon: `${BASE_URL}assets/icons/github.svg` },
    { name: 'linkedin', url: 'https://linkedin.com', icon: `${BASE_URL}assets/icons/linkedin.svg` },
  ]
};

export default CONFIG;
