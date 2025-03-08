import pxToRem from './utils/pixToRem.js';

const MatchMedia = {
  mobile: window.matchMedia(`(width <= ${pxToRem(767.98)}rem)`),
};

export default MatchMedia;
