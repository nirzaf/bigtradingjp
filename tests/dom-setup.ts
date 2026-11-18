import { vi } from 'vitest';
Object.assign(globalThis, { IS_REACT_ACT_ENVIRONMENT: true });
window.scrollTo = vi.fn();
Object.defineProperty(window, 'matchMedia', { value: () => ({ matches: false, addListener() {}, removeListener() {}, addEventListener() {}, removeEventListener() {} }) });
class Observer {
  observe() {} unobserve() {} disconnect() {}
}
Object.assign(globalThis, { IntersectionObserver: Observer });
// Lottie requires a real canvas/SVG renderer. Test routing/content, not animation pixels.
vi.mock('react-lottie-player', () => ({ default: () => null }));
