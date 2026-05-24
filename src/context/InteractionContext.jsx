import { createContext } from 'react';

const InteractionContext = createContext({
  activeMagneticId: null,
  setActiveMagneticId: () => {},
  followerPos: { current: { x: -100, y: -100 } },
  musicButtonRect: { current: null },
  projectCellRects: { current: {} },
  setProjectCellRect: () => {},
  emailTextRect: { current: null }
});

export default InteractionContext;
