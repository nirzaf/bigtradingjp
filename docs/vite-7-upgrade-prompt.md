# Vite 7 Upgrade Migration

## SEVERITY
P1 - High (Major framework upgrade requiring dependency updates and compatibility verification)

## OBJECTIVE
Upgrade the BIG TRADING application from Vite 6.3.6 to Vite 7.x with full compatibility verification across all dependencies, plugins, and configurations.

## CONTEXT
- **File**: `package.json` [EXISTS]
- **Current behavior**: Application runs on Vite 6.3.6 with React 18.3.1, TypeScript 5.7.2, and associated build tooling
- **Root cause**: Vite 7 introduces breaking changes that require dependency updates, configuration adjustments, and compatibility verification

## REPLICATION STEPS
1. Navigate to project root: `c:\Users\mfmfazrin\Repos\bigtradingjp`
2. Review current `package.json` showing Vite 6.3.6
3. Attempt direct upgrade to Vite 7.x
4. Observe potential breaking changes in build process, dev server, or plugin compatibility

## PROBLEM

### Location 1: package.json (Lines 38)
```json
"vite": "^6.3.6"
```
**Issue**: Current Vite version is 6.3.6; needs upgrade to 7.x with verification of breaking changes

### Location 2: package.json (Line 27)
```json
"@vitejs/plugin-react": "^4.3.4",
```
**Issue**: Vite plugin may require update for Vite 7 compatibility

### Location 3: vite.config.ts (Lines 1-9)
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
```
**Issue**: Configuration may need adjustments for Vite 7 API changes, particularly in optimizeDeps or plugin handling

### Location 4: tsconfig.app.json (Lines 9)
```json
"moduleResolution": "bundler",
```
**Issue**: Verify TypeScript configuration compatibility with Vite 7's bundling behavior

### Location 5: package.json (Lines 24-37)
```json
"devDependencies": {
  "@eslint/js": "^9.17.0",
  "@types/react": "^18.3.12",
  "@types/react-dom": "^18.3.1",
  "@vitejs/plugin-react": "^4.3.4",
  "autoprefixer": "^10.4.20",
  "eslint": "^9.17.0",
  "eslint-plugin-react-hooks": "^5.1.0",
  "eslint-plugin-react-refresh": "^0.4.16",
  "globals": "^15.13.0",
  "postcss": "^8.5.1",
  "tailwindcss": "^3.4.17",
  "typescript": "^5.7.2",
  "typescript-eslint": "^8.18.1",
  "vite": "^6.3.6"
}
```
**Issue**: Multiple dev dependencies may need compatibility verification with Vite 7

## SUGGESTED HYPOTHESIS

### Hypothesis 1: Incremental Upgrade with Compatibility Verification (Recommended)
**Theory**: Systematically upgrade Vite and its ecosystem dependencies while verifying compatibility at each step to minimize breaking changes

**Files to modify**:
1. `package.json`
2. `vite.config.ts` (if needed based on Vite 7 changelog)
3. TypeScript configs (if needed)

**Implementation approach**:

```json
// package.json - Update Vite core
{
  "devDependencies": {
    "vite": "^7.0.0"  // or latest 7.x version
  }
}
```

```json
// package.json - Update Vite plugin
{
  "devDependencies": {
    "@vitejs/plugin-react": "^5.0.0"  // Check npm for Vite 7 compatible version
  }
}
```

**Steps**:
1. Review official Vite 7 migration guide and changelog
2. Update `vite` to `^7.0.0` (or specific latest 7.x version)
3. Update `@vitejs/plugin-react` to Vite 7 compatible version
4. Run `npm install` to update dependencies
5. Check for peer dependency warnings
6. Review `vite.config.ts` for deprecated options
7. Test dev server: `npm run dev`
8. Test production build: `npm run build`
9. Test preview: `npm run preview`
10. Run linting: `npm run lint`
11. Verify all routes and functionality

**Trade-offs**:
✅ Systematic approach minimizes risk
✅ Allows rollback at any step
✅ Identifies specific breaking changes
⚠️ May require multiple iterations
⚠️ Time-intensive verification process

### Hypothesis 2: Comprehensive Ecosystem Upgrade
**Theory**: Upgrade Vite alongside all related tooling (TypeScript, ESLint, PostCSS, etc.) to ensure full compatibility

**Implementation approach**:

```json
// package.json - Update multiple dependencies
{
  "devDependencies": {
    "vite": "^7.0.0",
    "@vitejs/plugin-react": "^5.0.0",
    "typescript": "^5.7.2",  // Verify latest compatible version
    "postcss": "^8.5.1",     // Verify compatibility
    "tailwindcss": "^3.4.17" // Verify compatibility
  }
}
```

**Steps**:
1. Research Vite 7 ecosystem compatibility matrix
2. Update all build-related dependencies simultaneously
3. Clear `node_modules` and `package-lock.json`
4. Run fresh `npm install`
5. Comprehensive testing across all features

**Trade-offs**:
✅ Ensures full ecosystem compatibility
✅ Prevents cascading dependency issues
⚠️ Higher risk of multiple breaking changes
⚠️ Harder to isolate specific issues

## MUST PRESERVE
- Current application functionality (all routes, components, animations)
- React 18.3.1 compatibility
- TypeScript strict mode configuration
- TailwindCSS styling system
- Framer Motion animations
- React Router DOM routing
- ESLint configuration and rules
- Development workflow (dev, build, preview, lint scripts)
- Asset handling for images in `public/` and `src/assets/`
- Lazy loading implementation in `src/App.tsx`
- HashRouter configuration in `src/main.tsx`
- optimizeDeps exclusion for `lucide-react`

## SUCCESS CRITERIA
1. Vite successfully upgraded to version 7.x
2. `npm run dev` starts development server without errors
3. `npm run build` completes production build successfully
4. `npm run preview` serves production build correctly
5. `npm run lint` passes without new errors
6. All application routes render correctly
7. All animations and interactions function as expected
8. No console errors in browser
9. Build output size remains comparable or improved
10. Hot Module Replacement (HMR) works correctly

## VERIFICATION STEPS
1. **Pre-upgrade baseline**:
   - Run `npm run dev` and verify current functionality
   - Run `npm run build` and note build time/output size
   - Document any existing warnings

2. **Post-upgrade verification**:
   - Test development server startup time
   - Verify HMR functionality with code changes
   - Test all routes: `/`, `/vehicles/:id`, `/about`, `/contact`, `/privacy-policy`, `/terms-of-service`, `/*` (404)
   - Verify lazy loading works for all page components
   - Check browser console for errors/warnings
   - Verify Framer Motion animations render correctly
   - Test language switching functionality
   - Verify WhatsApp button and floating language switcher
   - Check responsive design across breakpoints
   - Verify asset loading from `public/` directory
   - Test production build size and performance

3. **Dependency verification**:
   - Check for peer dependency warnings: `npm ls`
   - Verify no security vulnerabilities: `npm audit`
   - Confirm all dependencies resolve correctly

4. **Configuration verification**:
   - Review `vite.config.ts` against Vite 7 documentation
   - Verify TypeScript compilation works correctly
   - Confirm ESLint integration remains functional
   - Test PostCSS and TailwindCSS processing

## CONSTRAINTS
- Must not break existing React 18.3.1 application
- Must maintain TypeScript strict mode compliance
- Must preserve all current npm scripts functionality
- Must not introduce new security vulnerabilities
- Must maintain or improve build performance
- Must support Windows development environment
- Must maintain HashRouter configuration for deployment compatibility
- Must preserve optimizeDeps exclusion for lucide-react to prevent build issues

## ADDITIONAL CONTEXT

### Current Tech Stack (Verified)
- **React**: 18.3.1
- **TypeScript**: 5.7.2
- **Vite**: 6.3.6 (current)
- **@vitejs/plugin-react**: 4.3.4 (current)
- **TailwindCSS**: 3.4.17
- **Framer Motion**: 11.15.0
- **React Router DOM**: 6.28.0
- **ESLint**: 9.17.0
- **PostCSS**: 8.5.1
- **Autoprefixer**: 10.4.20

### Key Configuration Files
- `vite.config.ts`: Minimal config with React plugin and lucide-react exclusion
- `tsconfig.app.json`: Bundler module resolution, ES2020 target, strict mode
- `tsconfig.node.json`: ES2022 target for Vite config
- `eslint.config.js`: Flat config with TypeScript ESLint
- `tailwind.config.js`: Custom color system and animations
- `postcss.config.js`: TailwindCSS and Autoprefixer plugins

### Application Entry Points
- `index.html`: Main HTML with structured data and meta tags
- `src/main.tsx`: React root with HashRouter and HelmetProvider
- `src/App.tsx`: Main app component with lazy-loaded routes

### Critical Dependencies to Monitor
- `lucide-react`: Currently excluded from optimizeDeps
- `framer-motion`: Animation library used throughout
- `react-helmet-async`: SEO meta tag management
- `lottie-web` & `react-lottie-player`: Animation assets

## REFERENCE DOCUMENTATION
- Official Vite 7 Migration Guide: https://vitejs.dev/guide/migration.html
- Vite 7 Changelog: https://github.com/vitejs/vite/blob/main/packages/vite/CHANGELOG.md
- @vitejs/plugin-react Compatibility: https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/CHANGELOG.md
- Vite Configuration Reference: https://vitejs.dev/config/

## AGENT GUIDANCE
This prompt provides a verified starting point based on the actual codebase. You are encouraged to:
- Consult the official Vite 7 documentation for the most current migration guidance
- Propose alternative upgrade strategies if you identify superior approaches
- Adjust the implementation based on specific breaking changes discovered in Vite 7
- Optimize the configuration beyond the suggested changes if beneficial
- Consider performance improvements or new Vite 7 features that could benefit this application

The goal is the most robust, performant, and maintainable solution—not strict adherence to these suggestions.
