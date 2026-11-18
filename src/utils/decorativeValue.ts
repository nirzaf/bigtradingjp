/** Stable decorative variation: avoids render-time randomness under React 19. */
export const decorativeValue = (index: number, channel: number): number => {
  const value = Math.sin((index + 1) * 127.1 + (channel + 1) * 311.7) * 43758.5453;
  return value - Math.floor(value);
};
