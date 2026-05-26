const BASE_URL = import.meta.env.BASE_URL;

const CONFIG = {
  jobTitle: 'Software Engineer',
  personalDescription: 'I\'m a computer science student focused on high-performance engineering. I\'m interested in creating scalable, automated systems to provide reliable and optimized solutions that help others.',
  callToAction1: 'Interested in system design, interactive experiences, or autonomous networks?',
  callToAction2: 'Let\'s talk.',
  emailUsername: 'justin.eng',
  emailDomainName: 'protonmail',
  emailTopLevelDomain: 'com',
  stickyButtonZIndex: 10,
  cursorFollowerZIndex: 20,
  colors: {
    primary: '#fc2d2dff',
    secondary: '#ff5100ff',
    background: '#000000ff',
    text: '#f1f5f9',
    darkText: '#1a1a1a',
    accent: '#ffd900ff',
    white: '#ffffff',
    projectBackground: '#1a1a1a',
    openSource: '#00ffbf',
    closedSource: '#ffb759',
    differenceBlack: '#fc2d2d',
    differencePurple: '#8b5cf6',
    differenceHotPink: '#0000a6',
    differenceSalmonPink: '#00d2d2ff',
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
      { name: 'Silver Soul', type: 'mp3' },
      { name: 'butterflies', type: 'flac' },
      { name: 'wrong faces', type: 'flac' },
      { name: 'Apocalypse', type: 'mp3' },
      { name: 'Char', type: 'mp3' },
      { name: 'IN THE AIR', type: 'mp3' },
      { name: 'Pink + White', type: 'mp3' },
      { name: 'And We Go Gentle', type: 'mp3' },
      { name: 'Everything\'s Beautiful', type: 'mp3' },
      //{ name: 'valentine', type: 'flac' },
      { name: 'DAISIES', type: 'flac' },
      { name: 'SPEED DEMON', type: 'flac' },
      { name: 'YUKON', type: 'flac' },
      { name: 'Ribs', type: 'mp3' },
      { name: 'Cat\'s Eye', type: 'mp3' },
      { name: 'How to Pretend', type: 'flac' },
      { name: 'Yes, You May', type: 'flac' },
      { name: 'Cheer Me On', type: 'mp3' },
      { name: 'Roommates', type: 'mp3' },
      { name: 'No One Noticed', type: 'mp3' },
      { name: 'Show Me How', type: 'mp3' },
      { name: 'Tragic Surprise', type: 'mp3' },
      { name: 'OUTSIDE', type: 'flac' }
    ].map(song => `${BASE_URL}assets/music/${song.name}.${song.type}`),
    volume: 0.01,
    loop: false,
    fadeDuration: 250,
  },
  socials: [
    { name: 'x', url: 'https://x.com', icon: `${BASE_URL}assets/icons/x.svg` },
    { name: 'instagram', url: 'https://instagram.com', icon: `${BASE_URL}assets/icons/instagram.svg` },
    { name: 'github', url: 'https://github.com/jraculea', icon: `${BASE_URL}assets/icons/github.svg` },
    { name: 'linkedin', url: 'https://linkedin.com', icon: `${BASE_URL}assets/icons/linkedin.svg` },
  ],
  projects: [
    {
      title: 'Order Book Simulator',
      subtitle: 'Mock Terminal Trading Exchange',
      description: 'A high-performance, multi-threaded financial tool designed to simulate a real-time trading exchange in the terminal. This project models a live limit order book with dynamic bid/ask order matching, capable of processing thousands of orders under strict price-time priority constraints. By architecture-level separation of concerns, the simulator maintains sub-millisecond execution latencies while driving a live visual interface of market depth.',
      isOpenSource: true,
      image: `${BASE_URL}assets/images/OrderBookShowcase.gif`,
      tags: ['C++'],
      githubUrl: 'https://github.com/jraculea/OrderBookSimulator',
      websiteUrl: null
    },
    {
      title: 'Seat Sniper',
      subtitle: 'Course Enrollment Application',
      description: 'An automation tool for CUNY students. Aims to provide better chances at securing seats in desired courses for the current or upcoming semester. The tool periodically checks for seat openings and automatically enrolls if any are available. Ultimately saving time, reducing stress during finals, and helping students avoid poorly rated professors or a delayed graduation.',
      isOpenSource: true,
      image: `${BASE_URL}assets/images/SeatSniperShowcase.gif`,
      tags: ['Java', 'Selenium WebDriver'],
      githubUrl: 'https://github.com/jraculea/SeatSniper',
      websiteUrl: null
    },
    {
      title: 'Games',
      subtitle: 'Game Development Projects',
      description: 'A collection of game development projects created using the Roblox Studio game engine.',
      isOpenSource: false,
      image: `${BASE_URL}assets/images/halftone_7.png`,
      tags: ['Luau'],
      githubUrl: null,
      websiteUrl: 'https://google.com'
    }
  ]
};

export default CONFIG;
