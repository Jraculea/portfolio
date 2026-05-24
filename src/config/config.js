const BASE_URL = import.meta.env.BASE_URL;

const CONFIG = {
  jobTitle: 'Software Engineer',
  personalDescription: 'I\'m a computer science student focused on high-performance engineering. I\'m interested in creating scalable, automated systems to provide reliable and optimized solutions that help others.',
  callToAction1: 'Interested in system design, interactive experiences, or autonomous networks?',
  callToAction2: 'Let\'s talk.',
  emailUsername: 'justin',
  emailDomainName: 'protonmail',
  emailTopLevelDomain: 'com',
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
      'Apocalypse',
      'butterflies',
      'wrong faces',
      'valentine',
      'Char',
      'Tragic Surprise',
      'Silver Soul',
      'IN THE AIR',
      'Pink + White',
      'Everything\'s Beautiful',
      'And We Go Gentle',
      'Ribs',
      'Roommates',
      'Cheer Me On',
      'No One Noticed',
      'Show Me How',
      'DAISIES',
      'SPEED DEMON',
      'YUKON',
      'Cat\'s Eye',
      'How to Pretend',

      'Yes, You May',
      'OUTSIDE',
    ].map(name => name.includes('.wav') ? `${BASE_URL}assets/music/${name}` : `${BASE_URL}assets/music/${name}.flac`),
    volume: 0.01,
    loop: false,
    fadeDuration: 250,
  },
  socials: [
    { name: 'x', url: 'https://x.com', icon: `${BASE_URL}assets/icons/x.svg` },
    { name: 'instagram', url: 'https://instagram.com', icon: `${BASE_URL}assets/icons/instagram.svg` },
    { name: 'github', url: 'https://github.com', icon: `${BASE_URL}assets/icons/github.svg` },
    { name: 'linkedin', url: 'https://linkedin.com', icon: `${BASE_URL}assets/icons/linkedin.svg` },
  ],
  projects: [
    {
      title: 'Order Book Simulator',
      subtitle: 'Order Book Simulator',
      description: 'A high-performance, multi-threaded financial tool designed to simulate a real-time trading exchange in the terminal. This project models a live limit order book with dynamic bid/ask order matching, capable of processing thousands of orders under strict price-time priority constraints. By architecture-level separation of concerns, the simulator maintains sub-millisecond execution latencies while driving a live visual interface of market depth.',
      isOpenSource: true,
      image: `${BASE_URL}assets/images/halftone_7.png`,
      tags: ['C++'],
      githubUrl: 'https://github.com/yourusername/portfolio',
      websiteUrl: null
    },
    {
      title: 'Seat Sniper',
      subtitle: 'Course Enrollment Application',
      description: 'An automation tool for CUNY students. Aims to provide better chances at securing seats in desired courses for the current or upcoming semester. The tool periodically checks for seat openings and automatically enrolls if any are available. Ultimately saving time, reducing stress during finals, and helping students avoid poorly rated professors or a delayed graduation.',
      isOpenSource: true,
      image: `${BASE_URL}assets/images/halftone_7.png`,
      tags: ['Java', 'Selenium WebDriver'],
      githubUrl: 'https://github.com/Jraculea/SeatSniper',
      websiteUrl: null
    },
    {
      title: 'Games',
      subtitle: 'Game Development Projects',
      description: 'A collection of game development projects created using the Roblox game engine.',
      isOpenSource: false,
      image: `${BASE_URL}assets/images/halftone_7.png`,
      tags: ['Luau'],
      githubUrl: null,
      websiteUrl: 'https://yourportfolio.com'
    }
  ]
};

export default CONFIG;
