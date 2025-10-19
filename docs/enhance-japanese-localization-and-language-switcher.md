# Enhance Japanese Localization Quality and Update Language Switcher UI

## SEVERITY
P2 - Medium (Maintainability, user experience improvement, localization quality)

## OBJECTIVE
Improve Japanese translation quality by correcting typos and unnatural phrasing, and update the language switcher component to display flag emojis (🇯🇵 for Japanese, 🇬🇧 for English) instead of country flags (🇺🇸).

## CONTEXT
- **Files**: 
  - `src/contexts/LanguageContext.tsx` [EXISTS]
  - `src/components/ui/LanguageSwitcher.tsx` [EXISTS]
- **Current behavior**: The application uses a LanguageContext for translations with English and Japanese support. The LanguageSwitcher component currently displays 🇺🇸 for English and 🇯🇵 for Japanese.
- **Root cause**: 
  1. Japanese translation contains a typo: "兵ね備えています" should be "兼ね備えています"
  2. The English flag should be 🇬🇧 (UK) instead of 🇺🇸 (US) for consistency with the application's international business context

## REPLICATION STEPS
1. Open `src/contexts/LanguageContext.tsx`
2. Navigate to line 109 in the `ja` translations object
3. Observe the typo in `'vehicles.allion.description'`: "兵ね備えています" (incorrect kanji)
4. Open `src/components/ui/LanguageSwitcher.tsx`
5. Navigate to line 36 in the `getFlag` function
6. Observe the function returns '🇺🇸' for English instead of '🇬🇧'

## PROBLEM

### Location 1: src/contexts/LanguageContext.tsx (Line 109)
```typescript
'vehicles.allion.description': 'トヨタ・アリオンは、優雅なスタイリングと実用的な機能性を兵ね備えています。このシルバーのセダンは、快適な乗り心地、優れた燃費効率、日常の通勤に十分な室内空間を提供します。',
```
**Issue**: The kanji "兵" (soldier/military) is incorrect. The correct kanji should be "兼" (combine/concurrent). The phrase "兼ね備えています" means "combines/possesses both" which is the natural and correct expression in Japanese business context.

### Location 2: src/components/ui/LanguageSwitcher.tsx (Lines 34-37)
```typescript
// Get flag emoji
const getFlag = () => {
  return language === 'en' ? '🇺🇸' : '🇯🇵';
};
```
**Issue**: The function returns the US flag (🇺🇸) for English, but for an international business context and consistency with the application's global reach, the UK flag (🇬🇧) would be more appropriate as it represents the English language internationally rather than a specific country.

## SUGGESTED HYPOTHESIS

### Hypothesis 1: Direct Correction (Recommended)
**Theory**: Directly correct the typo in the Japanese translation and update the flag emoji to use the UK flag for English. This is a straightforward fix with no side effects.

**File**: `src/contexts/LanguageContext.tsx`
```typescript
// Line 109 - Change from:
'vehicles.allion.description': 'トヨタ・アリオンは、優雅なスタイリングと実用的な機能性を兵ね備えています。このシルバーのセダンは、快適な乗り心地、優れた燃費効率、日常の通勤に十分な室内空間を提供します。',

// To:
'vehicles.allion.description': 'トヨタ・アリオンは、優雅なスタイリングと実用的な機能性を兼ね備えています。このシルバーのセダンは、快適な乗り心地、優れた燃費効率、日常の通勤に十分な室内空間を提供します。',
```

**File**: `src/components/ui/LanguageSwitcher.tsx`
```typescript
// Lines 34-37 - Change from:
const getFlag = () => {
  return language === 'en' ? '🇺🇸' : '🇯🇵';
};

// To:
const getFlag = () => {
  return language === 'en' ? '🇬🇧' : '🇯🇵';
};
```

**Trade-offs**:
✅ Simple, minimal change with immediate impact
✅ Improves professional appearance and correctness
✅ No breaking changes to component API or behavior
✅ Maintains existing animation and interaction logic
⚠️ Users may notice the flag change (minor visual update)

### Hypothesis 2: Comprehensive Japanese Translation Review (Optional Enhancement)
**Theory**: While fixing the identified typo, conduct a thorough review of all Japanese translations to identify and correct any other potential issues with grammar, naturalness, or technical terminology.

**Approach**: 
1. Review all entries in the `ja` object within `translations`
2. Check for:
   - Grammatical errors
   - Unnatural phrasing for business context
   - Inconsistent terminology
   - Missing or incomplete translations
3. Ensure technical terms (e.g., construction machinery names, vehicle specifications) are accurately translated

**Trade-offs**:
✅ Comprehensive quality improvement
✅ Better user experience for Japanese-speaking clients
✅ More professional presentation
⚠️ Requires native Japanese speaker or professional translator for verification
⚠️ More time-intensive than single correction

## MUST PRESERVE
- The existing `LanguageContext` structure and API (`language`, `setLanguage`, `t` function) [VERIFIED at lines 5-11]
- The `LanguageSwitcher` component props interface: `className` and `showLabel` [VERIFIED at lines 6-8]
- The animation behavior using Framer Motion's `AnimatePresence` [VERIFIED at lines 47-60]
- The Globe icon from lucide-react [VERIFIED at line 45]
- The toggle functionality between 'en' and 'ja' languages [VERIFIED at lines 18-27]
- All existing translation keys and structure [VERIFIED throughout translations object]

## SUCCESS CRITERIA
1. The typo "兵ね備えています" is corrected to "兼ね備えています" in the Allion vehicle description
2. The English flag emoji changes from 🇺🇸 to 🇬🇧 in the language switcher
3. The language switcher continues to display the flag emoji correctly
4. The `showLabel` prop still controls text visibility as expected
5. All animations and transitions remain smooth and functional
6. No breaking changes to the component API or translation system
7. Application builds successfully with `npm run build`
8. Language switching works correctly in both navbar and floating switcher contexts

## VERIFICATION STEPS
1. **Build Test**: Run `npm run build` to confirm no TypeScript or build errors
2. **Development Test**: Run `npm run dev` and verify:
   - Switch between English and Japanese multiple times using both switchers
   - Confirm the English flag displays as 🇬🇧 (not 🇺🇸)
   - Confirm the Japanese flag displays as 🇯🇵
   - Navigate to the vehicles page and switch to Japanese
   - Verify the Toyota Allion description displays "兼ね備えています" (correct kanji)
   - Check that all text content updates correctly across all pages
   - Verify the Globe icon remains visible in both switchers
   - Test the floating switcher (without label) displays only flags
   - Confirm animations are smooth during language transitions
3. **Visual Inspection**: Check the layout and appearance of both language switchers
4. **Translation Spot Check**: Review several Japanese translations in the UI to confirm overall quality

## CONSTRAINTS
- Must not modify the translation key structure or add/remove keys
- Must not change the component's external API (props, exports)
- Must maintain backward compatibility with existing usage
- Must not introduce performance regressions
- Must preserve all existing animations and visual effects
- Must maintain accessibility attributes (aria-label)
