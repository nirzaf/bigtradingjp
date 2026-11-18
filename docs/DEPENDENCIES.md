# Dependency maintenance — 18 November 2026

Baseline: `dfbe0efd74a67e2cd2af2d70e0f5f9037ca64f5c`.
Official npm registry `latest` and peer/engine metadata were checked before upgrading. The committed lockfile is authoritative. Use Node 22.12+ (verified here on Node 24.22.1), `npm ci`, then the checks below. No `--force` or `--legacy-peer-deps` was used.

## Resolved direct packages

| Package | Locked version |
| --- | --- |
| `@vercel/analytics` | 2.0.1 |
| `framer-motion` | 14.14.0 |
| `lottie-web` | 5.13.0 |
| `lucide-react` | 1.75.0 |
| `react` | 19.3.1 |
| `react-dom` | 19.3.1 |
| `react-helmet-async` | 3.1.0 |
| `react-intersection-observer` | 11.0.1 |
| `react-lottie-player` | 2.1.0 |
| `react-router-dom` | 7.18.5 |
| `@eslint/js` | 10.0.1 |
| `@types/react` | 19.3.0 |
| `@types/react-dom` | 19.3.0 |
| `@vitejs/plugin-react` | 6.3.0 |
| `autoprefixer` | 10.6.2 |
| `eslint` | 10.15.0 |
| `eslint-plugin-react-hooks` | 7.1.1 |
| `eslint-plugin-react-refresh` | 0.5.8 |
| `globals` | 17.14.0 |
| `jsdom` | 31.0.1 |
| `playwright` | 1.65.1 |
| `postcss` | 8.5.33 |
| `tailwindcss` | 3.4.19 |
| `typescript` | 6.0.3 |
| `typescript-eslint` | 8.73.0 |
| `vite` | 8.3.8 |
| `vitest` | 5.1.1 |

## Compatibility choices

- **Tailwind 3.4.19** is the latest 3.x patch, deliberately retained. [Tailwind's official migration guide](https://tailwindcss.com/docs/upgrade-guide) documents changed CSS utilities/defaults, PostCSS integration and newer browser requirements in v4. Migrating it without browser visual verification would conflict with preserving the existing design. Tailwind 4.3.5 is deferred, not claimed as installed.
- **TypeScript 6.0.3** is the latest release compatible with `typescript-eslint` 8.73.0's published `>=4.8.4 <6.1.0` peer range. TypeScript 7.0.2 is deferred until the parser supports it. The manifest limits this to 6.0 patches.
- `react-lottie-player` 2.1.0 and `lottie-web` 5.13.0 were already the registry's latest releases; retained explicitly. Removed unused `react-helmet` in favor of the existing upgraded `react-helmet-async` integration.
- React 19 uses scoped JSX types and stricter element props; adjusted type annotations accordingly. New hooks lint rules revealed render-time randomness and effect-driven menu resets: particles now use stable decorative variation and the menu state is keyed to navigation. The restored hero structure, six players, styling and content are unchanged; this does not reintroduce the rejected redesign.
- Lucide 1.x removed the Instagram brand export. Preserved the old icon artwork locally with its ISC notice, instead of changing the visible icon or adding another icon package.

## Verification and limitations

- Clean `npm ci --ignore-scripts`: passed (283 packages). Dependencies are resolved without peer overrides.
- `npm run build`: passed; upstream Lottie direct-eval warning remains.
- `npm run typecheck`: passed.
- `npm run lint`: zero errors; existing LanguageContext Fast Refresh export warning remains.
- `npm test`: five source-regression tests passed.
- `npm run test:dom`: five jsdom integration tests passed: restored home heading, company profile, actual route navigation/scroll reset, category filtering, Japanese privacy. Only Lottie rendering is mocked because jsdom has no real canvas/SVG renderer; these are not visual animation tests.
- `git diff --check`: passed.
- Full browser/visual checks remain unverified. System Chromium cannot create its required socket in this environment. Installing the official Playwright headless shell also failed because the download was truncated/invalid. This is not a claim that every browser behavior is guaranteed unchanged.
- Security audit: npm audit endpoint did not provide a usable result within the verification window. No zero-vulnerability claim is made.

## Follow-up

Run `npm run test:browser` with `npm run dev` and installed Playwright Chromium on an unrestricted machine. Check desktop/mobile animation rendering, menus, contact email handoff and both languages. A future Tailwind 4 migration needs before/after screenshots and an explicit browser-support decision. No deployment was performed as part of this update.
